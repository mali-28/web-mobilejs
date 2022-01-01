// class Students {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// const student1 = new Students("John", "10");
// const student2 = new Students("Jane", "9");

// unNamed
// let Rectangle = class {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
// }

// console.log(Rectangle.name);
// methods
// let Square = class Square2 {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
// }

// console.log(Square.name);

// class Rectangle {
//     static name = "My Reactangle"; // static variable
//     company = "UIT"; // company dec is euqals to this.company dec
//     static width = 8; // static varibale
//     constructor() {
//         this.height = 5; // object property
//     }
//     // Getter Function
//     get calculatedArea() {
//         return this.calculateArea();
//     }
//     // Setter Function
//     set updateWidth(newWidth) {
//         Rectangle.width = newWidth;
//     }
//     // method
//     calculateArea() {
//      return Rectangle.width * this.height;   
//     }
// }
// // instance
// const rectangle = new Rectangle();
// // get calculated area with original data;
// console.log({
//     height: rectangle.height, //propert
//     width: Rectangle.width, // static
//     calculatedArea: rectangle.calculatedArea // getter
// });
// // udpate height then get calculated area;
// rectangle.height = 4;
// console.log({
//     height: rectangle.height, //propert
//     width: Rectangle.width, // static
//     calculatedArea: rectangle.calculatedArea // getter
// });
// // udpate width then get calculated area;
// rectangle.updateWidth = 6; // seter
// console.log({
//     height: rectangle.height, //propert
//     width: Rectangle.width, // static
//     calculatedArea: rectangle.calculatedArea // getter
// });

// class Animal {
//     speak() {
//         console.log("this animal speaks");
//     }
// }
// class Dog extends Animal {
//     constructor() {
//         super();
//     }
//     bark() {
//         this.speak();
//         console.log("this animal barks");
//     }
// }

// const animal = new Dog();