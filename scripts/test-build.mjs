import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { extname, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const client = resolve(root, "dist", "client");
const workerUrl = pathToFileURL(resolve(root, "dist", "server", "index.js"));
workerUrl.searchParams.set("test", `${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml"
};

const env = {
  ASSETS: {
    async fetch(request) {
      const url = new URL(request.url);
      const relative = decodeURIComponent(url.pathname).replace(/^\/+/, "");

      try {
        const body = await readFile(resolve(client, relative));
        return new Response(body, {
          headers: { "content-type": contentTypes[extname(relative)] || "application/octet-stream" }
        });
      } catch {
        return new Response("Not found", { status: 404 });
      }
    }
  }
};

const context = {
  waitUntil() {},
  passThroughOnException() {}
};

const home = await worker.fetch(new Request("https://example.test/"), env, context);
assert.equal(home.status, 200);
assert.match(home.headers.get("content-type") || "", /^text\/html/);
assert.match(await home.text(), /UiPath Skills Navigator/);

const graph = await worker.fetch(new Request("https://example.test/graph"), env, context);
assert.equal(graph.status, 200);
assert.match(await graph.text(), /UiPath Skills Knowledge Graph/);

const stylesheet = await worker.fetch(new Request("https://example.test/styles.css"), env, context);
assert.equal(stylesheet.status, 200);
assert.match(stylesheet.headers.get("content-type") || "", /^text\/css/);

console.log("Sites worker routes and static assets verified");
