import { defineConfig } from "astro/config";
import aws from "astro-sst/lambda";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [mdx(), tailwind()],
  adapter: aws(),
});
