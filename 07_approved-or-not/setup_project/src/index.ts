let a: number = Math.random() * (1 - 20) + 20;
let b: number = parseInt(a.toString());
let flag: boolean = false;
if (b > 10) {
  flag = true;
} else {
  flag = false;
}
console.log("B : ", b);
if (flag) {
  console.log("Check");
} else {
  console.log("uncheck");
}
