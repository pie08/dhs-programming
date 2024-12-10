const timeElement = document.querySelector("#time");
const periodElement = document.querySelector("#period");

function padLeft(str, padChar, len) {
  const padLength = len - str.length;

  if (padLength < 0) return str;

  let padString = "";
  for (let i = 0; i < padLength; i++) {
    padString = padString + padChar;
  }

  return padString + str;
}

function clock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();
  let period = hours >= 12 ? "PM" : "AM";

  const timeString = `${
    hours > 12 ? (hours % 13) + 1 : hours
  }:${minutes}:${seconds}:${padLeft(String(milliseconds), "0", 3)}`;

  console.log(padLeft(String(milliseconds), "0", 3));

  timeElement.textContent = timeString;
  periodElement.textContent = period;
}

setInterval(clock, 1);
