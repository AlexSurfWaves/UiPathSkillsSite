import { access, cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const output = resolve(root, "dist");
const client = resolve(output, "client");

const files = [
  "index.html",
  "graph.html",
  "app.js",
  "graph.js",
  "i18n.js",
  "styles.css"
];

const directories = ["assets", "locales"];

await rm(output, { recursive: true, force: true });
await mkdir(client, { recursive: true });
await mkdir(resolve(output, "server"), { recursive: true });
await mkdir(resolve(output, ".openai"), { recursive: true });

for (const file of files) {
  await cp(resolve(root, file), resolve(client, file));
}

for (const directory of directories) {
  await cp(resolve(root, directory), resolve(client, directory), { recursive: true });
}

await cp(resolve(root, "worker", "index.js"), resolve(output, "server", "index.js"));
await cp(resolve(root, ".openai", "hosting.json"), resolve(output, ".openai", "hosting.json"));

for (const required of [
  resolve(output, "server", "index.js"),
  resolve(output, "client", "index.html"),
  resolve(output, ".openai", "hosting.json")
]) {
  await access(required);
}

console.log("Sites build ready in dist");
