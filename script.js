const input1 = document.querySelector(".calculator__first-value");
const input2 = document.querySelector(".calculator__second-value");
const buttonPanel = document.querySelector(".calculator__buttons");
const resultInput = document.querySelector(".calculator__result");

const getSum = (val1, val2) => Number(val1) + Number(val2);

const getSubtraction = (val1, val2) => Number(val1) - Number(val2);

const getMultiplication = (val1, val2) => Number(val1) * Number(val2);

const getDivision = (val1, val2) => Number(val1) / Number(val2);

const getRemainderOfDivision = (val1, val2) => Number(val1) % Number(val2);

const showResult = (result) => {
  resultInput.value = result;
  console.log(result);
};

if (buttonPanel) {
  buttonPanel.addEventListener("click", (evt) => {
    let result;
    switch (evt.target.value) {
      case "plus":
        result = getSum(input1.value, input2.value);
        showResult(result);
        break;

      case "minus":
        result = getSubtraction(input1.value, input2.value);
        showResult(result);
        break;

      case "multiply":
        result = getMultiplication(input1.value, input2.value);
        showResult(result);
        break;

      case "division":
        result = getDivision(input1.value, input2.value);
        showResult(result);
        break;

      default:
        result = getRemainderOfDivision(input1.value, input2.value);
        showResult(result);
        break;
    }
  });
}
