import { getTime } from "./apps/date_and_time.js";
import { hideApps, hideApp, showApp } from "./dom-utils.js";

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
  hideApps();
  showApp(recycleBinApp);
  const recycleBinExitIcon = document.querySelector("#recycleExit");
  recycleBinExitIcon.addEventListener("click", (e) => {
    e.preventDefault();
    hideApp(recycleBinApp);
  });
});
notepad.addEventListener("dblclick", (e) => {
  e.preventDefault();
  hideApps();
  showApp(notepadApp);
  const notepadExitIcon = document.querySelector("#notepadExit");
  notepadExitIcon.addEventListener("click", (e) => {
    e.preventDefault();
    hideApp(notepadApp);
  });
});
messenger.addEventListener("dblclick", (e) => {
  e.preventDefault();
  hideApps();
  messengerApp.classList.add("app--shown");
  const messengerExitIcon = document.querySelector("#messengerExit");
  messengerExitIcon.addEventListener("click", (e) => {
    e.preventDefault();
    hideApp(messengerApp);
  });
});
pictures.addEventListener("dblclick", (e) => {
  e.preventDefault();
  hideApps();
  showApp(picturesApp);
  const picturesExitIcon = document.querySelector("#picturesExit");
  picturesExitIcon.addEventListener("click", (e) => {
    e.preventDefault();
    hideApp(picturesApp);
  });
});
