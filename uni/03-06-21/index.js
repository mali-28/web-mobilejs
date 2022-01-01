// const myFunction = () => {
//     console.log("Here");
// }

function multipleOfTwo (num) {
    return num * 2;
}

const multipleOfTwoNew = num => num * 2;

const noParamFunction = _ =>  {
    console.log("Here");
}

const sum = (a, b) => a + b;

// Es5
// const obj = {
//     id: 4,
//     counter: function () {
//         setTimeout(function() {
//             console.log(this.id)
//         }.bind(this), 1000);
//     }
// }
// 
// ES6
const obj = {
    id: 4,
    counter: function () {
        setTimeout(() => {
            console.log(this.id)
        }, 1000);
    }
}

// const arr = [1,2,3,4,5];

// arr.reduce((accumulator, currentValue) => {
//     console.log({accumulator, currentValue});
//     return accumulator + currentValue;
// });

// arr.reduce((accumulator, currentValue) => {
//     console.log({accumulator, currentValue});
//     return accumulator + currentValue;
// }, 10);