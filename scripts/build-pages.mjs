import { build } from "vitepress";

process.env.DOCS_TARGET = "github-pages";

await build("docs");
