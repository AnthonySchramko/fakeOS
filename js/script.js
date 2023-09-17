import { updateTime } from "./apps/date_and_time.js";
import { hideApps, hideApp, showApp } from "./dom-utils.js";

const notepad = document.querySelector("#icons__notepad");
const notepadApp = document.querySelector("#notepad");
const startMenu = document.querySelector("#startMenu");
const startMenuApp = document.querySelector("#startApp");
const notepadStart = document.querySelector(".startMenu__notepad");
const notepadExitIcon = document.querySelector("#notepadExit");
const computerApp = document.querySelector("#computer");
const computerStart = document.querySelector("#computerStart");
const computerExit = document.querySelector("#computerExit");
let startMenuClicked = false;
//Time
updateTime();
//Notepad app
notepad.addEventListener("dblclick", (e) => {
  e.preventDefault();
  hideApps();
  showApp(notepadApp);
});
notepadExitIcon.addEventListener("click", (e) => {
  e.preventDefault();
  hideApp(notepadApp);
});
//My Computer app
computerExit.addEventListener("click", (e) => {
  e.preventDefault();
  hideApp(computerApp);
});
//Start menu
startMenu.addEventListener("click", (e) => {
  e.preventDefault();
  if (startMenuClicked) {
    hideApp(startMenuApp);
    startMenu.src = "./media/startMenu/xp_start_normal.png";
    startMenuClicked = false;
  } else {
    console.log("clicked");
    startMenuClicked = true;
    startMenu.src = "./media/startMenu/xp_start_clicked.png";
    showApp(startMenuApp);
  }
});
notepadStart.addEventListener("click", (e) => {
  hideApp(startMenuApp);
  startMenu.src = "./media/startMenu/xp_start_normal.png";
  showApp(notepadApp);
});
computerStart.addEventListener("click", (e) => {
  hideApp(startMenuApp);
  startMenu.src = "./media/startMenu/xp_start_normal.png";
  showApp(computerApp);
});
