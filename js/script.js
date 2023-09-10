import { getTime } from "./apps/date_and_time.js";
import {
  domElements,
  createElementWithText,
  deleteElementContents,
  hideApps,
} from "./dom-utils.js";

const recycleBin = document.querySelector("#icons__recycle-bin");
const notepad = document.querySelector("#icons__notepad");
const messenger = document.querySelector("#icons__messenger");
const pictures = document.querySelector("#icons__pictures");
const recycleBinApp = document.querySelector("#recycle-bin");
const notepadApp = document.querySelector("#notepad");
const messengerApp = document.querySelector("#messenger");
const picturesApp = document.querySelector("#pictures");

//Time
const updateTime = () => {
  document.querySelector(".time").innerHTML = getTime();
  setInterval(updateTime, 30000); //1000 = 1s, so 30000 = 0.5min. Calling this function every 0.5 min to update time and save memory
};
updateTime();

// recycleBin.addEventListener("click", (e) => {
//   e.preventDefault();
// });
recycleBin.addEventListener("dblclick", (e) => {
  e.preventDefault();
  console.log("recycleBin");
  hideApps();
  recycleBinApp.classList.add("app--shown");
});
notepad.addEventListener("dblclick", (e) => {
  e.preventDefault();
  console.log("notepad");
  hideApps();
  notepadApp.classList.add("app--shown");
});
messenger.addEventListener("dblclick", (e) => {
  e.preventDefault();
  console.log("messenger");
  hideApps();
  messengerApp.classList.add("app--shown");
});
pictures.addEventListener("dblclick", (e) => {
  e.preventDefault();
  console.log("pictures");
  hideApps();
  picturesApp.classList.add("app--shown");
});
