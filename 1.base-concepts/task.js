"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  
  let discr = Math.pow(b,2) - 4 * a * c; //b²-4*a*c

  if(discr < 0) {
    //nothing
  } else if(discr === 0) {
    let root = -b / (2*a); //-b/(2*a)
    arr.push(root);
  } else if(discr > 0) {
    //(-b + Math.sqrt(d) )/(2*a) и (-b - Math.sqrt(d) )/(2*a)
    let root1 = (-b + Math.sqrt(discr)) / (2*a);
    let root2 = (-b - Math.sqrt(discr)) / (2*a);
    arr.push(root1);
    arr.push(root2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentNormalized = percent / 100.0;
  let percentNormalizedMonthly = percentNormalized / 12.0;
  let totalMortgage = amount - contribution;
  let monthlyPayment = totalMortgage * (percentNormalizedMonthly + (percentNormalizedMonthly / (((1 + percentNormalizedMonthly) ** countMonths) - 1))); //S * (P + (P / (((1 + P)^n) - 1)))
  let total = monthlyPayment * 12 + contribution; 
  
  return total.toFixed(2);
}

//console.log(solveEquation (1,2,10));

//console.log(calculateTotalMortgage(10, 0, 50000, 12));