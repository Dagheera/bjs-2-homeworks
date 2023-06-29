"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discr = Math.pow(b,2) - 4 * a * c; 

 if(discr === 0) {
    let root = -b / (2*a);
    arr.push(root);
  } else if(discr > 0) {
    let root1 = (-b + Math.sqrt(discr)) / (2*a);
    let root2 = (-b - Math.sqrt(discr)) / (2*a);
    arr.push(root1);
    arr.push(root2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentNormalized = percent / 100;
  let percentNormalizedMonthly = percentNormalized / 12;
  let totalMortgage = amount - contribution;

  let monthlyPayment = totalMortgage * (percentNormalizedMonthly + (percentNormalizedMonthly / (((1 + percentNormalizedMonthly) ** countMonths) - 1)));
  let total = monthlyPayment * countMonths; 
  
  return Number(total.toFixed(2));
}