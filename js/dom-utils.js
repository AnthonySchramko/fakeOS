export const createElementWithText = (elementType, text, parentNode) => {
  const node = document.createElement(elementType);
  const returnText = document.createTextNode(text);
  node.appendChild(returnText);
  parentNode.appendChild(node);
};
export const deleteElementContents = (element) => {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
};
