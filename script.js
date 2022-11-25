"use strict";

const d = document;

///Targetting buttons, declaring variables

const equalBtn = d.querySelector("[data-equal]");
const operationBtns = d.querySelectorAll("[data-operation]");
const numberBtns = d.querySelectorAll("[data-number]");
let outputScreen = d.querySelector(".outputText");
const clearBtn = d.querySelector(".clear");
const virgule = d.querySelector(".virgule");

let firstNumber = "";
let secondNumber = "";
let operator = "";

clearBtn.addEventListener("click", () => {
  outputScreen.innerHTML = "";
  firstNumber = "";
  secondNumber = "";
  operator = "";
});

numberBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    outputScreen.innerHTML += btn.innerHTML;
  })
);

operationBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    outputScreen.innerHTML += btn.innerHTML;
  })
);

function calculate(a, searchingOperator, b) {
  a = parseInt(a);
  b = parseInt(b);
  switch (searchingOperator) {
    case "+":
      return (a + b).toString();
      break;
    case "*":
      return (a * b).toString();
      break;
    case "/":
      return (a / b).toString();
      break;
    case "-":
      return (a - b).toString();
      break;
  }
}

equalBtn.addEventListener("click", () => {
  let myString = "";

  myString = outputScreen.firstChild.data;

  let theIndex = [...myString].findIndex((searchingOperator) => {
    if (
      searchingOperator === "-" ||
      searchingOperator === "*" ||
      searchingOperator === "+" ||
      searchingOperator === "/"
    ) {
      return true;
    }
  });
  for (let i = 0; i < theIndex; i++) {
    firstNumber += [...myString][i];
  }
  for (let i = theIndex + 1; i < [...myString].length; i++) {
    secondNumber += [...myString][i];
  }
  operator = [...myString][theIndex];

  outputScreen.innerHTML = calculate(firstNumber, operator, secondNumber);

  firstNumber = "";
  secondNumber = "";
  console.log(firstNumber);
  console.log(secondNumber);
});
