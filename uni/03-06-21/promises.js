const myPromise = (val) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (val === "day") {
                resolve(2);
            } else {
                reject("Promise rejected");
            }
        }, 1000)
    })
}

// myPromise("night")
// .then((count) => {
//     console.log("In then", count)
// })
// .catch((e) => {
//     console.log("In catch", e)
// })


// Task 1
const onMyBirthday = (isKayoSick) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isKayoSick) {
                reject();
            } else {
                resolve(2);
            }
        }, 1000)
    })
}

// Task 2
const guessingGame = () => {
    const userInput = +prompt("Enter a Number");
    const systemGeneratedNum = Math.ceil(Math.random() * 6);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(userInput)) {
                reject(new Error("Enter a valid number"));
            }
            if (userInput == systemGeneratedNum) {
                resolve(2);
            }
            else if (
                userInput == systemGeneratedNum - 1 ||
                userInput == systemGeneratedNum + 1
            ) {
                resolve(1);
            } else {
                resolve(0);
            }
        }, 1000)
    })
}

const runGame = () => {
    guessingGame()
        .then((points) => {
            alert("You've won " + points + " points");
        })
        .catch(e => alert(e))
        .finally(() => {
            const choice = prompt("If wants to try again type YES");
            if (choice && choice.toUpperCase() === "YES") {
                runGame();
            } else {
                alert("Have a good day!")
            }
        })
}