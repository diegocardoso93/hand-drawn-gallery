import { createHandler } from "@universal-middleware/hono";
import { Hono } from "hono";
import { uploadImageHandler } from "./server/upload-image-handler";
import { vikeHandler } from "./server/vike-handler";
import { showHandler } from "./server/render-handler";

const app = new Hono();

app.get("/show", createHandler(() => showHandler)());
app.post("/api/upload-image", createHandler(() => uploadImageHandler)());

/**
 * Vike route
 *
 * @link {@see https://vike.dev}
 **/
app.all("*", createHandler(() => vikeHandler)());

export default app;
