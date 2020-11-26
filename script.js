const input1 = document.querySelector(".calculator__first-value");
const input2 = document.querySelector(".calculator__second-value");
const buttonPlus = document.querySelector(".calculator__plus");
const buttonMinus = document.querySelector(".calculator__minus");
const buttonMultiply = document.querySelector(".calculator__multiply");
const buttonDivision = document.querySelector(".calculator__division");
const buttonRemainderOfDivision = document.querySelector(
  ".calculator__remainder-of-division"
);
const resultInput = document.querySelector(".calculator__result");

const getSum = (val1, val2) => Number(val1) + Number(val2);

const getSubtraction = (val1, val2) => val1 - val2;

const getMultiplication = (val1, val2) => val1 * val2;

const getDivision = (val1, val2) => val1 / val2;

const getRemainderOfDivision = (val1, val2) => val1 % val2;

const showResult = (result) => {
  resultInput.value = result;
  console.log(result);
};

if (buttonPlus) {
  buttonPlus.addEventListener("click", () => {
    let result = getSum(input1.value, input2.value);
    showResult(result);
  });
}

if (buttonMinus) {
  buttonMinus.addEventListener("click", () => {
    let result = getSubtraction(input1.value, input2.value);
    showResult(result);
  });
}

if (buttonMultiply) {
  buttonMultiply.addEventListener("click", () => {
    let result = getMultiplication(input1.value, input2.value);
    showResult(result);
  });
}

if (buttonDivision) {
  buttonDivision.addEventListener("click", () => {
    let result = getDivision(input1.value, input2.value);
    showResult(result);
  });
}

if (buttonRemainderOfDivision) {
  buttonRemainderOfDivision.addEventListener("click", () => {
    let result = getRemainderOfDivision(input1.value, input2.value);
    showResult(result);
  });
}
