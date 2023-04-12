// Get the button element with ID "getbtn"
const btn = document.getElementById("getbtn");

// Get the quote element with ID "quote"
const QuoteElem = document.getElementById("quote");

// Fetch a random quote from the Quotable API
const fetchData = async () => {
  QuoteElem.innerHTML = `<p>Loading...</p>`;
  // Send a request to the Quotable API to get a random quote
  let data = await fetch("https://api.quotable.io/random");

  // Parse the response as JSON
  let json = await data.json();

  // Set the text of the quote element to the content of the fetched quote
  QuoteElem.innerHTML = `<p>${json.content}</p>`;
};

// Add an event listener to the button element that triggers the fetchData function when clicked
btn.addEventListener("click", fetchData);

// Call the fetchData function once to initially populate the quote element with a random quote
fetchData();
