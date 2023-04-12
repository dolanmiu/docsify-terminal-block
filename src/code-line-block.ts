import { LinePayload } from "./line-parser";

export const createLineBlocks = (
  lines: readonly LinePayload[]
): readonly HTMLElement[] => {
  // <pre v-pre="" data-lang="" data-prefix=">" style="background-color: transparent; padding: 0; margin: 0; display: flex;"><code class="lang-terminal" style="background-color: transparent !important; padding: 0; margin: 0; color: white;">$|npm run start $|npm run build</code><button class="docsify-copy-code-button hidden"><span class="label">Copy to clipboard</span><span class="error">Error</span><span class="success">Copied</span></button></pre>
  const lineBlocks = lines.map((line) => {
    const lineBlock = document.createElement("pre");
    lineBlock.setAttribute("v-pre", "");
    lineBlock.setAttribute("data-lang", "");
    if (line.prefix) {
      lineBlock.setAttribute("data-prefix", line.prefix);
    }
    lineBlock.setAttribute(
      "style",
      "background-color: transparent; padding: 0; margin: 0; display: flex;"
    );

    const codeBlock = document.createElement("code");
    codeBlock.setAttribute("class", "lang-terminal"); // Or lang-bash
    codeBlock.setAttribute(
      "style",
      "background-color: transparent !important; padding: 0; margin: 0;"
    );

    switch (line.type) {
      case "info":
        lineBlock.classList.add("!dtb-bg-info", "!dtb-text-info-content");
        break;
      case "error":
        lineBlock.classList.add("!dtb-bg-error", "!dtb-text-error-content");
        break;
      case "success":
        lineBlock.classList.add("!dtb-bg-success", "!dtb-text-success-content");
        break;
      case "warning":
        lineBlock.classList.add("!dtb-bg-warning", "!dtb-text-warning-content");
        break;
      default:
        codeBlock.classList.add("!dtb-text-white");
        break;
    }

    codeBlock.textContent = line.text;
    lineBlock.appendChild(codeBlock);
    return lineBlock;
  });

  return lineBlocks;
};
