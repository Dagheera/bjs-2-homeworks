// md5 = require('js-md5');
function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    let hash = md5(args);
    let objectInCache = cache.find((item) => item.hash == hash);
    if (objectInCache) {
        return "Из кэша: " + objectInCache.result;
    }
    let result = func(...args);
    cache.push({hash: hash, result: result});
    if (cache.length > 5) { 
        cache.shift();
    }
        return "Вычисляем: " + result;  
  }
  return wrapper;
}

function debounceDecoratorNew(func, delay) {
    let timerId;
    function resultFunction (...args) {
      resultFunction.allCount++;
      if (timerId === undefined) {
        func(...args); // синхронный вызов функции
        resultFunction.count++;
      }

      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func(...args); // асинхронный вызов функции
        resultFunction.count++;
      }, delay);
    }

    resultFunction.count = 0;
    resultFunction.allCount = 0;
    return resultFunction;
}