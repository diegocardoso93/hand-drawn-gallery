import { UniversalHandler } from "@universal-middleware/core";
import { renderPage } from "vike/server";

export const showHandler = (async (request, context, runtime: any): Promise<Response> => {
  console.log('showHandler');
  const DB = runtime.env.DB;

  const key = request.url.replace(/.*\?id=/, '');
  const pageData = JSON.parse(await DB.get(key) || '{}');

  const pageContextInit = { ...context, urlOriginal: request.url, ...runtime, pageData };

  const pageContext = await renderPage(pageContextInit);
  const response = pageContext.httpResponse;

  const { readable, writable } = new TransformStream();

  response?.pipe(writable);

  return new Response(readable, {
    status: response?.statusCode,
    headers: response?.headers,
  });
}) satisfies UniversalHandler;
