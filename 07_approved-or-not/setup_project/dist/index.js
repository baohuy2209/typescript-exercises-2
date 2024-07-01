"use strict";
let a = Math.random() * (1 - 20) + 20;
let b = parseInt(a.toString());
let flag = false;
if (b > 10) {
    flag = true;
}
else {
    flag = false;
}
console.log("B : ", b);
if (flag) {
    console.log("Check");
}
else {
    console.log("uncheck");
}
