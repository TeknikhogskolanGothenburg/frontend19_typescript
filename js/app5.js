"use strict";
function superAdder(input1, input2, resultConvertion) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConvertion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    //   if (resultConvertion === "as-number") {
    //     return +result;
    //   } else {
    //     return result.toString();
    //   }
    return result;
}
let resultValue = superAdder(3, 5, "as-text");
console.log(resultValue);
resultValue = superAdder("3", "5", "as-text");
console.log(resultValue);
resultValue = superAdder(3, 5, "as-number");
console.log(resultValue);
resultValue = superAdder("3", "5", "as-number");
console.log(resultValue);
