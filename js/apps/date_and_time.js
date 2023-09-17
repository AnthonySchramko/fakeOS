const getTime = () => {
  const time = new Date().toLocaleTimeString("en-AU", {
    timeZone: "Australia/Sydney",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return time;
};
export const updateTime = () => {
  document.querySelector(".time").innerHTML = getTime();
  setInterval(updateTime, 30000); //1000 = 1s, so 30000 = 0.5min. Calling this function every 0.5 min to update time and save memory
};
