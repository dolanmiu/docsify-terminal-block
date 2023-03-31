export const createContainerBlock = (elements: HTMLElement[]) => {
  // <div class="mockup-code">...</div>

  const output = document.createElement("div");
  output.classList.add("mockup-code");
  elements.forEach((element) => {
    output.appendChild(element);
  });
  console.log(output)
  return output;
};
