let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.7038;
let rateUSD = 4.5387;
let rateNOK = 0.4504;

formElement.addEventListener("input", () => {

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;
        case "USD":
            result = amount / rateUSD;
            break;
        case "NOK":
            result = amount / rateNOK;
            break;
    }

    resultElement.innerHTML = `${amount.toFixed(2)} PLN=<strong>${result.toFixed(2)} ${currency}</strong>`;

    if (amount < 0) {
        resultElement.innerText = "Wartość nie może być ujemna!"
    }
});

// Sprawdzane warunki w linii 82:
// (amount.toString().startsWith("-")
// (amount === "-")
// (amount === +("-"))
// (amountElement === "-")
// (amountElement === +("-"))
