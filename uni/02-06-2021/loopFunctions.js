// Recursive Functions

// function fib(value) {
//  if (value <= 1) {
//    return value;
//  }
//  return fib(value - 1) + fib(value - 2);
// }

// var enterValue = +prompt("Enter positive integer number");
// var returnValue = fib(enterValue);
// console.log(returnValue);


// Loop Function -> es6
// forEach    --> itterate over all values, it returns nothing
// map        --> itterate over all values, return user defined values in array
// filter     --> itterate over all values, return only turth/true condition actual array values in array
// find       --> itterate until meets condition, return only found value 
// some       --> itterate until meets condition, return only boolean
// findIndex  --> itterate until meets condition, return only found value's index

// function sum () { return 5 + 6}

// function avg(callback) {
//   return callback() /2;
// }

// console.log("Named Function Call",avg(sum));
// console.log("Annonymus Function Call",avg(function() { return 5 + 6}));

// function myForEach(callback) {
//   var array = ["a", "b", "c", "d"];
//   for (var i = 0; i < array.length; i++) {
  //     callback(array[i], i);
//   }
// }

// myForEach(function(value, index) {
  //   console.log({value, index})
// })

var subjects = ["Math", "English", "Science", "Islamiat"];
var erros = ["default", "default", "error", "error"];

console.log("=======For Each=========")
var forEachResult = subjects.forEach(function(value, index) {
  console.log({value, index});
  return value;
});
console.log({ forEachResult });
console.log("========Map============")
var mapResult = subjects.map(function(value, index) {
  console.log({value, index});
  if (value.indexOf("s") > -1) {
    return value + "1";
  }
});
console.log({mapResult})

console.log("========Filter============");
var filterResult = subjects.filter(function(value, index) {
  console.log({value, index});
  if (value.indexOf("s") > -1) {
    return true;
  }
});
console.log({filterResult})

console.log("========Find===========");
var findResult = subjects.find(function (value, index) {
  console.log({value, index});
  if (value.indexOf("s") > -1) {
    return true;
  }
});
console.log({findResult})

console.log("========Some============");
var someResult = subjects.some(function (value, index) {
  console.log({value, index});
  if (value.indexOf("s") > -1) {
    return true;
  }
});
console.log({someResult})
console.log("========Find Index============");
var findIndexResult = subjects.findIndex(function (value, index) {
  console.log({value, index});
  if (value.indexOf("s") > -1) {
    return true;
  }
});
console.log({findIndexResult})