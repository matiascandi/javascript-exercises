const add = function(x, y) {
  let result = x + y;
  return result;
};

const subtract = function(x, y) {
	let result = x - y;
  return result;
};

const sum = function(array) {
  const result = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return result;
};

const multiply = function(array) {
  const result = array.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  }, 1);

  return result;
};


const power = function(x, y) {
	let result;
  if (x === 0) {
    result = 1;
  }
  else {
    result = Math.pow(x, y);
  }
  return result;
};

const factorial = function(x) {
  const array = [];
  if (x === 0 || x === 1){
    return 1;
  }
  for (let i = 1; i <= x; i++){
    array.push(i);
  }
  const fact = array.reduce ((accumulator, currentValue) => {
    return accumulator * currentValue;
  })
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
