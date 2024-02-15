const sumAll = function(start, end) {
    let totalSum = 0;
    const array = [];
    if (start > end){
        [start, end] = [end, start];
    }
    if (typeof start != "number" || typeof end != "number" || start < 0 || end < 0){
        return "ERROR";
    }
    for (let i = 0; i <= end; i++){
        array.push(i);
    }
    for (let i = 0; i < array.length; i++){
        totalSum += array[i];
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
