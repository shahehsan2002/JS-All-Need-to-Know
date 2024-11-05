var a = 10;
var b = 20;
var c = 30;
var d = 40;

// AND operator
if (a > b && c > d) {
  console.log("a is greater than b and c is greater than d");
}else{
  console.log("a is not greater than b and c is not greater than d");
}


// OR operator
if (a > b || c > d) {
  console.log("a is greater than b or c is greater than d");
}else{
  console.log("a is not greater than b or c is not greater than d");
}


// NOT operator
var check = !!(a > b);
console.log(check)