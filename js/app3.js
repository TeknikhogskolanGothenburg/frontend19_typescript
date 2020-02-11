"use strict";
function adder(input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
let theresult = adder(3, 4);
console.log(theresult);
let strResult = adder("Anna", "Bob");
console.log(strResult);
