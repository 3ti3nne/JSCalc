"use strict";

const d = document;

///Targetting buttons, declaring variables

const equalBtn = d.querySelector("[data-equal]");
const operationBtns = d.querySelectorAll("[data-operation]");
const numberBtns = d.querySelectorAll("[data-number]");
const outputScreen = d.querySelector(".outputText");

numberBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    outputScreen.innerHTML += btn.innerHTML;
  })
);
