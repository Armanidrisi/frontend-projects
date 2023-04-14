// Selecting the hour, minute, and second elements by their IDs
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

// Setting up an interval to update the clock every second
setInterval(() => {
  // Creating a new Date object to get the current time
  const now = new Date();

  // Extracting the hours, minutes, and seconds from the Date object
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculating the rotation angles for the hour, minute, and second hands
  const hourRotation = 30 * hours + minutes / 2;
  const minuteRotation = 6 * minutes;
  const secondRotation = 6 * seconds;

  // Setting the transform property of the hour, minute, and second elements to rotate them to their respective angles
  hour.style.transform = `rotate(${hourRotation}deg)`;
  minute.style.transform = `rotate(${minuteRotation}deg)`;
  second.style.transform = `rotate(${secondRotation}deg)`;
}, 1000);
