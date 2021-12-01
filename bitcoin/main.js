/*
// var is ES5
// const and let is ES6
const btc = 3.5;
const btcUsdBought = 10000;
const btcUsdNow = 12000;

const invested = btc * btcUsdBought;
const current = btc * btcUsdNow;

const profit = current - invested;
//const growth = profit / invested * 100;
const growth = calcGrowth(invested, current);

// Function declaration
function calcGrowth(pastVal, currentVal) {
  return (currentVal - pastVal) / pastVal * 100;
}

// Function expression: ES5
const calcGrowth2 = function(pastVal, currentVal) {
  return (currentVal - pastVal) / pastVal * 100;
}
const growth2 = calcGrowth2(5000, 5500);
console.log(growth2);


// ES6 arrow function
const calcGrowth3 = (pastVal, currentVal) => (currentVal - pastVal) / pastVal * 100;
const growth3 = calcGrowth3(20, 60);
console.log(growth3);


let message = "";
if (profit > 0) {
  //message = "Great! You made a profit of $" + profit + " (" + growth + "%).";
  message = `Great! You made a profit of $${profit} (${growth}%).`;
} else if (profit < 0) {
  message = `Oh no! You're at a loss of $${profit} (${growth}%).`;
} else {
  message = "You're breaking even!";
}
console.log(message);
*/

const calcGrowth = (pastVal, currentVal) =>
  ((currentVal - pastVal) / pastVal) * 100;

// DOM manipulation: seleting elements / handling events
document.querySelector(".investment__btn").addEventListener("click", () => {
  // 1. Select and read data from the UI
  const btcUsdBought = document.querySelector(".price__input--bought").value;
  const btcUsdNow = document.querySelector(".price__input--now").value;
  const btc = document.querySelector(".investment__btc").value;

  // 2. Calculate the profits
  const invested = btc * btcUsdBought;
  const current = btc * btcUsdNow;
  const profit = current - invested;
  const growth = calcGrowth(invested, current);

  // 3. Write the result to the UI
  let message = "";
  const resultField = document.querySelector(".result");
  if (profit > 0) {
    message = `Great! You made a profit of $${profit} (${growth}%).`;
    resultField.style.color = "green";
  } else if (profit < 0) {
    message = `Oh no! You're at a loss of $${profit} (${growth}%).`;
    resultField.style.color = "red";
  } else {
    message = "You're breaking even!";
  }

  resultField.textContent = message;
});
