{
    const calculateResult = (amount, currency) => {
        const rateEUR = 4.7038;
        const rateUSD = 4.5387;
        const rateNOK = 0.4504;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "USD":
                return amount / rateUSD;

            case "NOK":
                return amount / rateNOK;
        }
    }

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount.toFixed(2)} PLN=<strong>${result.toFixed(2)} ${currency}</strong>`;
        if (amount < 0) {
            resultElement.innerText = "Wartość nie może być ujemna!"
        }
    }

    const onFormInput = () => {
        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);

        preventDefaultEnter(amountElement);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("input", onFormInput);
    }

    const clearResultElement = () => {
        const resultElement = document.querySelector(".js-result");
        const amountElement = document.querySelector(".js-amount");
        resultElement.innerText = "";
        amountElement.focus();
    }
    const reset = () => {
        const button = document.querySelector(".js-reset");
        button.addEventListener("click", clearResultElement)
    }

    const preventDefaultEnter = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            return false;
        }
    const amountElement = document.querySelector(".js-amount");
    amountElement.addEventListener('keypress', preventDefaultEnter)
    }
        
    init();
    reset();
}

