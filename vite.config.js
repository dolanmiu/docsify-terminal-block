import { defineConfig } from "vite";
import { resolve } from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [
    cssInjectedByJsPlugin({
      injectCodeFunction: (cssCode, options) => {
        console.log(options)
        try {
          if (typeof document != "undefined") {
            var elementStyle = document.createElement("style");
            console.log('TEST', cssCode)
            const cssWithoutDataTheme = cssCode.replace(/\[data-theme\]{[^{}]*}/g, "");
            elementStyle.appendChild(document.createTextNode(cssWithoutDataTheme));
            document.head.appendChild(elementStyle);
          }
        } catch (e) {
          console.error("vite-plugin-css-injected-by-js", e);
        }
      },
    }),
  ],
  build: {
    lib: {
      entry: [resolve(__dirname, "src/main.ts")],
      name: "docsifyTerminalBlock",
      fileName: "index",
      formats: ["iife"],
    },
    outDir: resolve(__dirname, "dist"),
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
});
