const ct = document.querySelector("#ct");
const vt = document.querySelector("#vt");
const mm = document.querySelector("#mm");
const buttonResult = document.querySelector("#calc-result");
const resultText = document.querySelector("#result");


// function acidityCalculator() {}

const acidityCalculator = () => {
  const resultCalc = (ct.value * vt.value * mm.value)/100

  resultText.innerText = resultCalc
};

buttonResult.addEventListener('click', acidityCalculator)
