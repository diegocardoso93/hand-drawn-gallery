import { UniversalHandler } from "@universal-middleware/core";
import { renderPage } from "vike/server";

export const vikeHandler = (async (request, context, runtime): Promise<Response> => {
  console.log('vikehandler');
  const DB = runtime.env.DB;

  const pageContextInit = {
    ...context,
    urlOriginal: request.url,
    ...runtime,
    pageData: getListPageData(request, DB),
  };

  const pageContext = await renderPage(pageContextInit);
  const response = pageContext.httpResponse;

  const { readable, writable } = new TransformStream();

  response?.pipe(writable);

  return new Response(readable, {
    status: response?.statusCode,
    headers: response?.headers,
  });
}) satisfies UniversalHandler;

async function getListPageData(request, DB) {
  console.log('listHandler');
  console.log(request.url);
  let pageData = {};
  const parts = request.url.split('/');
  const endPart = parts[parts.length-1];
  if (!endPart || endPart === 'index.pageContext.json') {
    const last = await DB.get('_LAST');
    pageData = { items: [] };
    for (let x = last; x>0; x--) {
      pageData.items.push(JSON.parse(await DB.get(x)));
    }
  }
  return pageData;
}
