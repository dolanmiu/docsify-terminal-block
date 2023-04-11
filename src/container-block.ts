export const createContainerBlock = (elements: HTMLElement[]) => {
  // <div class="mockup-code">...</div>

  const output = document.createElement("div");
  output.classList.add("mockup-code");
  elements.forEach((element) => {
    output.appendChild(element);

    const copyToClipboardOriginal = element.querySelectorAll(
      ".docsify-copy-code-button"
    );
    copyToClipboardOriginal.forEach(e => e.classList.add("hidden"));
  });

  // <div data-tip="copy" class="tooltip tooltip-left tooltip-accent"></div>
  const tooltip = document.createElement("div");
  tooltip.classList.add(
    "tooltip",
    "tooltip-left",
    "tooltip-accent",
    "absolute",
    "top-2",
    "right-2"
  );
  tooltip.setAttribute("data-tip", "copy");
  output.appendChild(tooltip);

  // <button class="btn btn-square btn-sm"><svg class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 16 3 C 14.742188 3 13.847656 3.890625 13.40625 5 L 6 5 L 6 28 L 26 28 L 26 5 L 18.59375 5 C 18.152344 3.890625 17.257813 3 16 3 Z M 16 5 C 16.554688 5 17 5.445313 17 6 L 17 7 L 20 7 L 20 9 L 12 9 L 12 7 L 15 7 L 15 6 C 15 5.445313 15.445313 5 16 5 Z M 8 7 L 10 7 L 10 11 L 22 11 L 22 7 L 24 7 L 24 26 L 8 26 Z"></path></svg></button>
  const copyButton = document.createElement("button");
  copyButton.classList.add(
    "btn",
    "btn-square",
    "btn-sm",
    "border-0",
    "docsify-copy-code-button",
    "relative",
    "opacity-100"
  );
  const copyButtonIcon = document.createElement("svg");
  copyButtonIcon.classList.add("w-5", "h-5", "fill-current");
  copyButtonIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  copyButtonIcon.setAttribute("viewBox", "0 0 32 32");
  const copyButtonIconPath = document.createElement("path");
  copyButtonIconPath.setAttribute(
    "d",
    "M 16 3 C 14.742188 3 13.847656 3.890625 13.40625 5 L 6 5 L 6 28 L 26 28 L 26 5 L 18.59375 5 C 18.152344 3.890625 17.257813 3 16 3 Z M 16 5 C 16.554688 5 17 5.445313 17 6 L 17 7 L 20 7 L 20 9 L 12 9 L 12 7 L 15 7 L 15 6 C 15 5.445313 15.445313 5 16 5 Z M 8 7 L 10 7 L 10 11 L 22 11 L 22 7 L 24 7 L 24 26 L 8 26 Z"
  );
  copyButtonIcon.appendChild(copyButtonIconPath);
  copyButton.appendChild(copyButtonIcon);

  tooltip.appendChild(copyButton);

  return output;
};
