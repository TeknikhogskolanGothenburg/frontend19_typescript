"use strict";
function calcAndHandle(n1, n2, cb) {
    let result = n1 + n2;
    return cb(result);
}
function printResult1(value) {
    console.log("The result is: " + value);
    return value + 1;
}
function printResult2(value) {
    console.log("value = " + value);
    return value - 1;
}
let a = calcAndHandle(3, 4, printResult1);
let b = calcAndHandle(3, 4, printResult2);
console.log("a = " + a + " b = " + b);
