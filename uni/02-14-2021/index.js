// if (typeof document !== null) {
//   var mainNode = document.getElementById("div2");
//   var firstChild = mainNode.children[0];
//   var lastChild = mainNode.children[mainNode.children.length - 1];

  // console.log(mainNode);
  // console.log({firstChild});
  // console.log({lastChild});
  // causing issue due to node list
  // var againFirstChild = mainNode.firstChild;
  // var againLastChild = mainNode.lastChild;
  // console.log({againFirstChild});
  // console.log({againLastChild});

  // Getting siblings
  // var parentNode = mainNode.parentNode;
  // console.log({parentNode});
  // var nextSibling = parentNode.children[2];
  // console.log({nextSibling})
  // console.log(parentNode.nextSibling)
// }

// var parent = document.getElementById("div1");
// var target = parent.firstChild;
// nName = target.nodeName;
// console.log({nName})

// if (parent.hasAttribute("class")) {
//   alert("name exists")
// } else {
//   alert("Failed to found name attribute")
// }
// console.log(parent.getAttribute("name"))


// function changeClass() {
//   console.log("Here")
//   var ele = document.getElementById("div2").children[0];
//   if (ele.getAttribute("class") === "displayBlock") {
//     ele.setAttribute("class", "displayNone")
//   } else {
//     ele.setAttribute("class", "displayBlock");
//   }
// }

// var list = document.getElementById("div2").children[0].attributes;
// console.log(list)


var newEle = document.createElement("p");
 newEle.setAttribute("id", "newAddedP");
 newEle.setAttribute("class", "displayBlock");

 newEle.innerText = "Karachi";

 console.log({newEle})

var parent = document.getElementById("div2");
var childEle = parent.children[1];

 parent.insertBefore(newEle, childEle);
  parent.removeChild(childEle);


// try {
//   var firstName = prompt("Enter your First Name");
//   var lastName = prompt("Enter your Last Name");
//   if (firstName && lastName) {
//     var name = firstName + " "+ lastName;
//     console.log(name);
//   } else  {
//     throw "Please enter name";
//   }
// } catch(e) {
//   console.log(e)
// }

// Below is  build time error no exception handler can handle this.
// try {
//   var class = "V";
// } catch(e) {
//   console.log("Error");
// }

// es6 variable declarations

// function main1(flag) {
//   if (true) {
//     var name = "fallback";
//     var name = "nothing";
//     if (flag === true) {
//       name = "flagName"
//     }
//   }
//   return name;
// }
// function main2(flag) {
//   if (true) {
//     let zzzx = "fallback";
//     zzzx = "nothing";
//     if (flag === true) {
//       zzzx = "flagName"
//     }
//     return zzzx;
//   }
// }
// function main3(flag) {
//   if (true) {
//     const zzzx = "fallback";
//     zzzx = "nothing";
//     if (flag === true) {
//       zzzx = "flagName"
//     }
//     return zzzx;
//   }
// }

// var has functional scope
// var can be redeclare
// var can be reassign

// let has block scope
// let can not be redeclare
// let can be reassign

// const has block scope
// const can not be redeclare
// const can not be reassign

// Task Queue, waiting queue
/*console.log("1")
console.log("2")
console.log("3")
setTimeout(function() {
console.log("4")
},0);

console.log("5");*/
// answer is 1, 2, 3, 5, 4