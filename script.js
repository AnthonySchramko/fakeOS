import { getTime } from "./js/date_and_time.js";

const recycleBin = document.querySelector("#app__recycle-bin");
const notepad = document.querySelector("#app__notepad");
const messenger = document.querySelector("#app__messenger");
const pictures = document.querySelector("#app__pictures");
//Time
const updateTime = () => {
  document.querySelector(".time").innerHTML = getTime();
  setInterval(updateTime, 30000); //1000 = 1s, so 30000 = 0.5min. Calling this function every 0.5 min to update time and save memory
};
updateTime();

// recycleBin.addEventListener("click", (e) => {
//   e.preventDefault();
// });
