const calculateButton = document.getElementById("calculate");
const amountInput = document.getElementById("amount");
const fromCurrencySelect = document.getElementById("from");
const toCurrencySelect = document.getElementById("to");
const outputElement = document.getElementById("output");

calculateButton.addEventListener("click", () => {
  const amount = amountInput.value;
  const from = fromCurrencySelect.value;
  const to = toCurrencySelect.value;

  if (amount < 1) {
    alert("Invalid amount");
    return;
  }

  fetch(`https://v6.exchangerate-api.com/v6/814385ebe55498d47ded4e4f/latest/${from}`)
    .then((res) => res.json())
    .then((response) => {
      const conversionRate = response.conversion_rates[to];
      if (conversionRate !== undefined) {
        const result = amount * conversionRate;
        outputElement.textContent = `${amount} ${from} = ${result} ${to}`;
        outputElement.style.display = "block";
      } else {
        alert("Invalid currency selection");
      }
    })
    .catch((e) => {
      alert("Something went wrong");
    });
});