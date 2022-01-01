var firstName1 = [];
var lastName1 = [];
var email1 = [];
var password1 = [];

function signUp(){
   var firstName = document.getElementById('fname').value;
   var lastName = document.getElementById('lname').value;
   var mail = document.getElementById('email').value;
   var mailIndexCheck = mail.slice(length-10);
   var typePassword = document.getElementById('tpassword').value;
   var retypePassword = document.getElementById('rtpassword').value;


   if(firstName == ""){
      alert('Write Your First Name');
      fname.focus(); 
      return false; 

   }else if(lastName == ""){
      alert('Write Your Last Name');
      lname.focus(); 
      return false; 

   }else if(mail == ""){
      alert('Write Your e-mail');
      email.focus(); 
      return false; 

   }else if(mailIndexCheck !== "@gmail.com"){
      alert('Write valid e-mail');
      email.focus(); 
      return false; 

   }else if(typePassword == ""){
      alert('Enter a password');
      tpassword.focus(); 
      return false; 

   }else if(typePassword.length < 6){
      alert('Enter a password having 6 character or more');
      tpassword.focus(); 
      return false; 

   }else if(retypePassword == ""){
      alert('confirm the password');
      rtpassword.focus(); 
      return false; 

   }else if(retypePassword !== typePassword){
      alert('Write same password ');
      rtpassword.focus(); 
      return false; 

   }else{
      // alert('welcome');
      firstName1.push(firstName)
      lastName1.push(lastName)
      email1.push(mail)
      password1.push(typePassword)
      display();

      // //display(firstName, lastName, mail, typePassword);
   }
   

}
//// var styleToBeAdded = document.getElementById('demo');
//  //  styleToBeAdded.style.width = '300px';
///// styleToBeAdded.style.marginLeft = "30px";

function display(){

   let displayData = ""
   for(let i = 0; i < firstName1.length; i++){

   displayData += "<tr>"+
      "<td>"+ firstName1[i] + "</td>"+
      "<td>"+ lastName1[i] + "</td>"+
      "<td>"+ email1[i] + "</td>"+
      "<td>"+ password1[i] + "</td>"+
      "<td><input type='button' value='delete' onClick='myFunc("+ i + " )'/></td>"
      "</tr>"
     

   }

   document.getElementById('data-body').innerHTML = displayData;
}

///////     document.getElementById('myTable').setAttribute('border', "2px");
//////     document.getElementById('displayFName').innerHTML = firstName;
 //  //  document.getElementById('displayLName').innerHTML = lastName;
// //     document.getElementById('displayEmail').innerHTML = mail;
// //     document.getElementById('displayPassword').innerHTML = typePassword;


// //     if(document.getElementById('myTable').style.display === 'none'){
// //    document.getElementById('myTable').style.display = 'block';
// //  }else{
// //        document.getElementById('myTable').style.display ='none';
// //     }

// //}



   
function myFunc(i){
   console.log(i);
   firstName1.splice(i, 1);
  lastName1.splice(i, 1);
  email1.splice(i, 1);
  password1.splice(i, 1);
  display();
}




