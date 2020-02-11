function calcAndHandle(n1: number, n2: number, cb: (num: number) => number) {
  let result = n1 + n2;
  return cb(result);
}

function printResult1(value: number) {
  console.log("The result is: " + value);
  return value + 1;
}

function printResult2(value: number) {
  console.log("value = " + value);
  return value - 1;
}

let a = calcAndHandle(3, 4, printResult1);
let b = calcAndHandle(3, 4, printResult2);
console.log("a = " + a + " b = " + b);
