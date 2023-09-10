const elementArr = [];
export const domElements = (identifier) => {
  let element;
  if (identifier.id) {
    element = document.querySelector(`#${identifier.id}`);
  } else if (identifier.classCSS) {
    element = document.querySelectorAll(`.${identifier.classCSS}`);
  }
  elementArr.push(element);
  return element;
};

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
const apps = domElements({ classCSS: "app" });
export const hideApps = () => {
  for (const element of apps) {
    if (element.classList.contains("app--shown")) {
      element.classList.remove("app--shown");
    }
  }
};
