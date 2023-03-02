let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let USD = 4.48;
let EUR = 4.75;
let GBP = 5.39;
let CHF = 4.81;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;
    let rate;

    switch (currency) {
        case "USD":
            rate = USD;            
            break;
        case "EUR":
            rate = EUR;
            break;
        case "GBP":
            rate = GBP;
            break;
        case "CHF":
            rate = CHF;
    }

    const result = amount / rate

    resultElement.value = `${result.toFixed(2)} ${currency}`;
});