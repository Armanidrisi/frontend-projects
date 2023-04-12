// Selecting the necessary DOM elements
const input = document.getElementById("inp");
const qrcodeContainer = document.getElementById("qrcode-container");
const qrimg = document.getElementById("qrimg");
const btn = document.getElementById("btn");

// Add an event listener to the button that triggers the creation of the QR code
btn.addEventListener("click", () => {
  // Check if the input field has a value
  if (input.value) {
    // If the input field has a value, set the source of the QR code image to a URL that will create the QR code
    // using the input field's value as the data for the QR code. Set the size of the QR code to 300x150 pixels.
    qrimg.setAttribute(
      "src",
      `https://api.qrserver.com/v1/create-qr-code/?size=300x150&data=${input.value}`
    );

    // Show the container element that holds the QR code image by setting its display style to "flex"
    qrcodeContainer.style.display = "flex";
  } else {
    // If the input field does not have a value, show an alert message asking the user to enter text
    alert("Please Enter Text!");
  }
});
