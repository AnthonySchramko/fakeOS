export const updateTime = () => {
  const displayTime = document.querySelector(".date-time");
  const time = new Date().getTime();
  displayTime.textContent = time.substring(16, 21);
};
setInterval(updateTime, 1000);
