// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");

// alert(firstName + " " + lastName);

// var userName = prompt("Enter your user name");

// alert(userName.length);

// var city = prompt("Enter your city name");

// var firstChar = city[0].toUpperCase();
// var remainingChars = city.slice(1);

// alert(firstChar + remainingChars);

// alert(city.toUpperCase());


// var months = ["january","febraury","march","april","may","june","july",

//              "august","september","october","november","december"];

// var selectedMonths = [];

// for (var i = 0 ; i < months.length;i++) {
//  var getLast3Char =  months[i].slice(months[i].length - 3 );
//  if (getLast3Char === "ber") {
//      selectedMonths.push(months[i]);
//  } 
// }

// console.log(selectedMonths);
// alert("All the month which contain ber are: \n" + selectedMonths)

// userInput[i] + userInput[i+1]



// var userInput = prompt("Enter any string");
// var numOfSpaces = prompt("Enter number of spaces");
// var noSpacesFound = true;

// for (var i = 0; i < userInput.length; i++) {
//     // console.log(userInput.slice(i, i+2), userInput.slice(i, i+2) === "  ");
//     if (userInput.slice(i, i+2) === "  ") {
        
//         noSpacesFound = false;
//         alert("Your text contain double spaces");
//     } 
// }

// if (noSpacesFound) {
//     alert(userInput);
// }



// var text = "A deadliest war which we call World War II was end in 1945";
// alert(text);
// for(var i = 0; i < text.length;i++) {
//    if ( text.slice(i, i  + 12) === "World War II") {
//        text = text.slice(0,i) + "The second world war" + text.slice(i+12);
//         break;
//    }
// }

// var startingIndex = text.indexOf("World War II");
// if(statingIndex > -1) {

    // text = text.slice(0,startingIndex) + "The second world war" + text.slice(startingIndex+12);
// }

// text = text.replace("World War II","The second world war");
// alert(text);



// var text = "My name is John Smith. My father name is Doe Smith and my mother name Jane Smith";
// // for single 
// // text = text.replace("Smith","Raza");
// // for all
// text = text.replace(/smith/ig,"Raza");

// alert(text);


// chapter 27


// var dice = Math.random();

// dice = dice*6;
// dice = Math.ceil(dice);

// alert(dice);

// var coin = Math.random();

// coin = coin*2;

// coin = Math.floor(coin);
// console.log(coin);




// var age = prompt("Enter your marks");

// // age = parseInt( age ) + 1;
// // age = parseFloat( age ) + 1;
// age = Number( age ) + 1;

// alert(age);


// var num = +prompt("Enter any number");
// num = num.toString();
// console.log(typeof num,num);

// chapter 30

// var num = +prompt("Enter any number");

// console.log(num.toFixed() );

