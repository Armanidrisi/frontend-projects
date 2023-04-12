// Select the button element with the ID 'btn'
const btn = document.getElementById("btn");

// Define a function to change the background color
const changebg = () => {
  // Generate a random value between 0 and 255 for each color component (red, green, blue)
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // Construct an RGB color string using the random values
  const rgbColor = `rgb(${red}, ${green}, ${blue})`;

  // Set the background color of the body to the random RGB color
  document.body.style.backgroundColor = rgbColor;
};

// Call the changebg function once to set the initial background color
changebg();

// Add an event listener to the button that calls the changebg function when clicked
btn.addEventListener("click", changebg);
