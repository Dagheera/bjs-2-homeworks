function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg;

  for (let i=0; i < arr.length; i+=1) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr [i];
    }
    sum += arr[i];
  }
  avg = +(sum / arr.length).toFixed(2); 

  return {min, max, avg};
}

// function getArrayParams(...arr) {
//   let min, max, sum, avg;
//   min = Infinity;
//   max = -Infinity;
//   sum = 0;

//   min = Math.min(...arr);
//   max = Math.max(...arr);
//   sum = arr.reduce(function (curSum, curVal) {return curSum + curVal}, 0);
//   avg = +(sum / arr.length).toFixed(2);

//   return {min: min, max: max, avg: avg};
// }


function summElementsWorker(...arr) {
  let sum;
  sum = arr.reduce(
    (currentValue, currentIndex) => currentValue + currentIndex, 0);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let maxElement; 
  let minElement;
  let result = 0;
  if (arr.length === 0) {
    return 0;
  }
  maxElement = Math.max(...arr);
  minElement = Math.min(...arr);
  result = maxElement - minElement;
  return result;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length === 0) {
    return 0;
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      }
    else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length === 0) {
      return 0;
    }
  for (i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
          sumEvenElement += arr[i];
          countEvenElement +=1;
      }
  }
  return +(sumEvenElement / countEvenElement);
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let currFunctionResult = 0;
  for (j = 0; j < arrOfArr.length; j++) {
    currFunctionResult = func(...arrOfArr[j]);
    if (maxWorkerResult < currFunctionResult) {
      maxWorkerResult = currFunctionResult;
    }
  }
  return maxWorkerResult;
}
