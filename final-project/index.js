const before = document.getElementById('before');
const after = document.getElementById('after');

function login_btn() {
    document.getElementById('email').focus();
};
function login(){
    let email = document.getElementById('email');
    let password =  document.getElementById('password');
    let email_value =  email.value;
    let password_value = password.value;
    let slice_email = email.value.slice(length-4);
    
    if (email_value == ''){
        alert('Please enter an email');
        email.focus();
        return false;
    }else if(slice_email != '.com'){
        alert('Please enter a valid email like xyz@example.com');
        email.focus();
        return false;
        
    }else if(password_value == ''){
        alert('Please enter password');
        password.focus();
        
        return false;
    }else{
        
        after.style.display = 'block';
        before.style.display = 'none';
        localStorage.setItem("email", email_value);
        localStorage.setItem("password", password_value);
        displayEmail(email_value);
        
        return true; 
    }
}



const input = () =>{
    title_value = document.getElementById('title').value;
    description_value = document.getElementById('description').value;
    
    if(title_value == ''){
        alert('Please enter a title');
    }else if(description_value == ''){
        alert('Please enter a description');
    }else{
        document.getElementById('info-display').style.display = 'block';
        document.getElementById('info').style.display = 'none';
        
        document.getElementById('info-title').innerText = title_value;
        document.getElementById('info-description').innerText = description_value;
    }
}

function logout(){
    localStorage.clear();
}

const preloader = document.getElementById('preloader');
const body = document.getElementById('body');
window.addEventListener("load", function() {
     setTimeout(function(){
        preloader.style.display = 'none';
        body.style.display = 'block';

     }, 1000);
    

    const local_email = localStorage.getItem('email');
    const local_pass = localStorage.getItem('password');
    displayEmail(local_email);
    
    if(local_email && local_pass){
        before.style.display = 'none';
        after.style.display = 'block';
    }else{
        before.style.display = 'block';
    }
    });

function displayEmail(email){
    document.getElementById('yourMail').innerHTML =`<b>${email}</b>`;
}

