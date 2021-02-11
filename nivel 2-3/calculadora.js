const erase = document.querySelector(".borrar");
const btnOperation = document.querySelectorAll(".botonOperacion");
const equals = document.querySelector("#igual");
const btnNumber = document.querySelectorAll(".botonNumero");
const period = document.querySelector("#punto");
let current = document.querySelector(".resultado-now");
let previous = document.querySelector(".resultado-prev");
const eraseOne = document.querySelector(".borrarUno");

erase.onclick = clear;
equals.onclick = calculate;
eraseOne.onclick = clearOne;

btnNumber.forEach((button) => {
  // button.addEventListener('click', addNumber(button.innerText))
  //button.onkeydown= teclado;
  button.onclick = addNumber;
});

btnOperation.forEach((button) => {
  // button.addEventListener('click', addNumber(button.innerText))

  button.onclick = addOperator;
  //button.onkeydown= teclado;
});

function addNumber() {
  let number = this.innerText;
  current.innerHTML.toString();
  number.toString();
  if (number === "." && current.innerHTML.includes(".")) return;
  current.innerHTML += number;
  console.log(current.innerText);
}

function addOperator() {
  let operator = this.innerText;
  if (operator === "+" && current.innerHTML.includes("+")) return;
  if (operator === "-" && current.innerHTML.includes("-")) return;
  if (operator === "*" && current.innerHTML.includes("×")) return;
  if (operator === "/" && current.innerHTML.includes("÷")) return;

  current.innerHTML += operator;

  previous.innerHTML = current.innerHTML;

  current.innerHTML = "";
}

function calculate() {
  if (current.innerHTML) {
    if (previous.innerText.includes("+")) {
      let slicedNum = previous.innerText.slice(0, -1);
      let numPrev = parseFloat(slicedNum);
      let numCurrent = parseFloat(current.innerText);
      let resultado = numPrev + numCurrent;
      previous.innerHTML = `${numPrev}+${numCurrent}`;
      current.innerHTML = resultado;
    } else if (previous.innerText.includes("-")) {
      let slicedNum = previous.innerText.slice(0, -1);
      let numPrev = parseFloat(slicedNum);
      let numCurrent = parseFloat(current.innerText);
      let resultado = numPrev - numCurrent;
      previous.innerHTML = `${numPrev}-${numCurrent}`;
      current.innerHTML = resultado;
    } else if (previous.innerText.includes("÷")) {
      //previous.innerHTML = previous.innerText.slice(0, -1);
      let slicedNum = previous.innerText.slice(0, -1);
      let numPrev = parseFloat(slicedNum);
      let numCurrent = parseFloat(current.innerText);
      let resultado = numPrev / numCurrent;

      console.log(resultado);
      if (resultado === Infinity) {
        resultado = "No puedes dividir entre 0";
      }
      previous.innerHTML = `${numPrev}÷${numCurrent}`;
      current.innerHTML = resultado;
    } else if (previous.innerText.includes("×")) {
      let slicedNum = previous.innerText.slice(0, -1);
      let numPrev = parseFloat(slicedNum);
      let numCurrent = parseFloat(current.innerText);
      let resultado = numPrev * numCurrent;
      previous.innerHTML = `${numPrev}×${numCurrent}`;
      current.innerHTML = resultado;
    }
  }
}
function clear() {
  current.innerHTML = "";
  previous.innerHTML = "";
}

function clearOne() {
  current.innerHTML = current.innerText.slice(0, -1);
}

/*
function teclado(e){
    
    let numberCode=e.keyCode;

    let prueba=this.numberCode;
    // el 7
    if(prueba==55 || prueba ==36){
        addNumber();
    }
    // el 8
    if(prueba==56 || prueba ==38){
        addNumber();
    }
    //el 9
    if(prueba==57 || prueba ==33){
        addNumber();
    }
    // el /
    if(prueba==111){
        addOperator();
    }
    // el 4
      if(prueba==52 || prueba ==100){
        addNumber();
    }
    // el 5
      if(prueba==53 || prueba ==101){
        addNumber();
    }
      //el 6
    if(prueba==54 || prueba ==102){
        addNumber();
    }
    // el *
    if(prueba==106){
        addOperator();
    }
    // el 1
      if(prueba==49 || prueba ==97){
        addNumber();
    }
    // el 2
      if(prueba==50 || prueba ==98){
        addNumber();
    }
    // el 3
      if(prueba==51 || prueba ==99){
        addNumber();
    }
        // el -
    if(prueba==109){
        addNumber();
    }
    // el 0
      if(prueba==48 || prueba ==96){
        addNumber();
    }
    // el .
      if(prueba==110){
        addNumber();
    }
    // el = y enter
      if(prueba==48 || prueba ==13){
        addOperator();
    }
}

*/
