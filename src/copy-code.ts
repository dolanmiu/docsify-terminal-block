export const addCopyCodeFunctionality = () => {
  const buttons = document.querySelectorAll(".docsify-terminal-copy-button");
  buttons.forEach((button) => {
    button.addEventListener("click", (element) => {
      const toolTip = (element.target as HTMLElement).parentElement
        ?.parentElement;
      const elements = Array.from(
        toolTip?.parentElement?.querySelectorAll("pre") ?? []
      );

      const code = elements
        .map((e) => e.innerText)
        .filter((e) => e)
        .join("\r");

      toolTip?.setAttribute("data-tip", "Copied!");
      toolTip?.classList.add("dtb-tooltip-open");
      setTimeout(() => {
        toolTip?.setAttribute("data-tip", "Copy");
      }, 2000);
      setTimeout(() => {
        toolTip?.classList.remove("dtb-tooltip-open");
      }, 1800);

      navigator.clipboard.writeText(code);
    });
  });
};
