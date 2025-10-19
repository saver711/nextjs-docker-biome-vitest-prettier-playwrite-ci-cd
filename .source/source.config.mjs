// source.config.mjs
import { defineConfig, defineDocs } from "fumadocs-mdx/config";
var docs = defineDocs({
  dir: "content/docs"
});
var source_config_default = defineConfig();
export {
  source_config_default as default,
  docs
};
