// for loop
// for[mention statement ](initializer; condition; increment/decrement){statement}

/*
for (var i = 0; i < 10; i++) {
  console.log(i + 1 + " Hello World");
}
*/

/*
for (var i = 1; i <= 10; i++) {
  console.log(i);
}
*/

// run odd numbers

// for (var i = 1; i <= 10; i++) {
//   if (i % 2 ===1) {
//     console.log(i);
//   }
// }

// sum of numbers

// var sum = 0;
// for (var i = 1; i <= 10; i++) {
//   console.log(sum + "+" + i + "=" + (sum + i));
//   sum += i;
// }
// console.log(sum);

// sum of even numbers
var sum = 0;
for (var i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(sum + "+" + i + "=" + (sum + i));
    sum += i;
  }
}
console.log(sum);