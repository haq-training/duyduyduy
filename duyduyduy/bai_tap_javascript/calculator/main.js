const input = document.getElementById("input"); // input/output button
const number = document.querySelectorAll(".numbers div"); // number buttons
const operator = document.querySelectorAll(".operators div"); // operator buttons
const result = document.getElementById("result"); // equal button
const clear = document.getElementById("clear"); // clear button
const xoa = document.getElementById("delete"); // clear button
const resultDisplayed = false; // flag to keep an eye on what output is displayed

let currentString;
let newText;
let lastChar;

for(var i = 0 ; i<number.length ; i++){
  number[i].addEventListener("click", (e) => {
    input.innerHTML = input.innerHTML + e.target.innerHTML;
  });
}
clear.addEventListener("click", () => {
  input.innerHTML = "";
});

for(var i = 0 ; i < operator.length ; i++){
  operator[i].addEventListener("click", function (e) {
    currentString = input.innerHTML;
    
    if (currentString != "" || e.target.innerHTML == "-"){
      input.innerHTML = input.innerHTML + e.target.innerHTML;
    }
      lastChar = currentString[currentString.length - 1];
      console.log(lastChar);
    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "×" ||
      lastChar === "÷"
    ) {
      newText =
        currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
      input.innerHTML = newText;
    }
  });
}

result.addEventListener("click", function () {
  var newstringabc = input.innerHTML; 
   input.innerHTML=eval(newstringabc.replace("×","*").replace("÷","/"));
});

