const elementArr = [];
const domElements = (identifier) => {
  let element;
  if (identifier.id) {
    element = document.querySelector(`#${identifier.id}`);
  } else if (identifier.classCSS) {
    element = document.querySelectorAll(`.${identifier.classCSS}`);
  }
  elementArr.push(element);
  return element;
};

const apps = domElements({ classCSS: "app" });
export const hideApps = () => {
  for (const element of apps) {
    if (element.classList.contains("app--shown")) {
      element.classList.remove("app--shown");
    }
  }
};
export const hideApp = (parent) => {
  if (parent.classList.contains("app--shown")) {
    parent.classList.remove("app--shown");
  }
};
export const showApp = (parent) => {
  parent.classList.add("app--shown");
};
