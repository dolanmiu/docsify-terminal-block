import "./index.css";

import { createContainerBlock } from "./container-block";

declare var $docsify: any;

(function () {
  const myPlugin = (hook: any, _vm: any) => {
    hook.doneEach(function () {
      const mainContent = document.getElementById("main");

      if (!mainContent) {
        return;
      }

      createContainerBlock([]);
    });
  };
  // Add plugin to docsify's plugin array
  (window as any).$docsify = (window as any).$docsify || {};
  (window as any).$docsify.plugins = [].concat(
    (window as any).$docsify.plugins || [],
    myPlugin as any
  );
})();
