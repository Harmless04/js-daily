let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent
document.getElementById("num2-el").textContent


let sumEL = document.getElementById("sum-el")
function add()
{
  let result= num1+num2
  sumEL.textContent= "sum"+ result
}
function subtract()
{
 
  let subrtaction = num1-num2
 
  sumEL.textContent="sum"+subrtaction
  
}

function divide()
{
  let division = num1/num2
  sumEL.textContent="sum"+division
}
