import "./index.css";

import { createContainerBlock } from "./container-block";

declare var $docsify: any;

(function () {
  const myPlugin = (hook: any, _vm: any) => {
    hook.doneEach(function () {
      const originalBlocks = document.querySelectorAll(
        `#main > pre[data-lang="terminal"]`
      );

      console.log(originalBlocks);

      originalBlocks.forEach((node) => {
        node.setAttribute("data-lang", "");
        node.setAttribute("data-prefix", ">");
        const codeNode = node.getElementsByTagName("code")[0];
        console.log(node);

        node.setAttribute(
          "style",
          "background-color: transparent; padding: 0; margin: 0; display: flex;"
        );
        codeNode.setAttribute(
          "style",
          "background-color: transparent !important; padding: 0; margin: 0; color: white;"
        );
        node.removeAttribute(":after");

        node.outerHTML = createContainerBlock([
          node.cloneNode(true) as HTMLElement,
        ]).outerHTML;
      });
    });
  };
  // Add plugin to docsify's plugin array
  (window as any).$docsify = (window as any).$docsify || {};
  (window as any).$docsify.plugins = [].concat(
    (window as any).$docsify.plugins || [],
    myPlugin as any
  );
})();
