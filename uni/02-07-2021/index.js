// chapter 49
function checkAddress(param) {
  var email = document.getElementById(param).value;
  if (email === "") {
    alert("Please enter your email!");
  } else {
    alert("Your entered email is " + email);
  }
}

// chapter 50
function fillCity(fieldId) {
  console.log("Here");
  var cityName;
  var zipEntered = document.getElementById(fieldId).value;

  switch (zipEntered) {
    case "60608":
      cityName = "Chicago";
      break;
    case "68114":
      cityName = "Omaha";
      break;
    case "53212":
      cityName = "Milwaukee";
  }
  document.getElementById("city").value = cityName;
  console.log({cityName})
}

// chapter 51
function expandLoris(flag) {
  var shortPara = `Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus...
      <a href="javascript:void(0);" onClick="expandLoris('more');"
        ><em>Click for more.</em></a
      >`;
  var longPara = `Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis praesentium, numquam qui consectetur odio laborum corporis rerum accusamus ullam amet expedita nulla quam asperiores. Ducimus quasi exercitationem odio cumque neque?
    <a href="javascript:void(0);" onClick="expandLoris('less');"
        ><em>Click for less.</em></a
      >`;

      
  var genericParaVariable;
  if (flag === "less") {
    genericParaVariable = shortPara;
  } else {
    genericParaVariable = longPara;
  }
  document.getElementById("slowLoris").innerHTML = genericParaVariable;
}
// chapter 52
function makeInvisible() {
  document.getElementById("ugly").className += " hidden";
}
function toggleImage() {
  var oldMySrc = document.getElementById("ugly").dataset.mysrc;
  console.log({ oldMySrc });
  if (oldMySrc === "image1") {
    document.getElementById("ugly").src = "./images/image2.png";
    document.getElementById("ugly").dataset.mysrc = "image2";
  } else {
    document.getElementById("ugly").src = "./images/image1.png";
    document.getElementById("ugly").dataset.mysrc = "image1";
  }
}