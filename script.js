var nameError=document.getElementById('nameError');
var emailError=document.getElementById('emailError');
var mobileErorr=document.getElementById('mobileError');
var passError=document.getElementById('passError');
var cpassError=document.getElementById('cpassError');
var submitError=document.getElementById('submitError');

function validateName(){
    var name=document.getElementById('name').value;
    if(name.length<5){
        nameError.innerHTML="Name must be atleast 5 characters long";
        return false;
    }
    else{
        nameError.innerHTML='<i class="fa-solid fa-check"></i>';
        return true;
    }
}
function validateEmail(){
    var email=document.getElementById('email').value;
    if(!email.match( /\S+@\S+\.\S+/)){
        emailError.innerHTML="Email must be in the format abc@gmail.com";
        return false;
    }
    else{
        emailError.innerHTML='<i class="fa-solid fa-check"></i>';
        return true;
    }
}
function validateMobile(){
    var mobile=document.getElementById('mobile').value;
    if(mobile.length!=10){
        mobileError.innerHTML="Phone number must be of 10 digit";
        return false;
    }
    else if(mobile==1234567890){
        mobileErorr.innerHTML="Phone number must not be 1234567890";
        return false;
    }
    else{
        mobileError.innerHTML='<i class="fa-solid fa-check"></i>';
        return true;
    }
}
function validatePass(){
    var pass=document.getElementById('pass').value;
    var name=document.getElementById('name').value;
    if(pass==name){
        passError.innerHTML="Password cannot be same as username ";
        return false;
    }
    else if(pass=='password'){
        passError.innerHTML="Password cannot be 'password' ";
        return false;
    }
    else if(pass.length<8){
        passError.innerHTML="Password should be atleast 8 characters long";
        return false;
    }
    else{
        passError.innerHTML='<i class="fa-solid fa-check"></i>';
        return true;
    }
}
function validateCpass(){
    var cpass=document.getElementById('cpass').value;
    var pass=document.getElementById('pass').value;
    if(cpass!=pass){
        cpassError.innerHTML="Password should be same as above";
        return false;
    }
    else{
        cpassError.innerHTML='<i class="fa-solid fa-check"></i>';
        return true;
    }
}
document.getElementById("form").addEventListener("submit",function(e){
    if(!validateName()||!validateEmail()||!validateMobile()||!validatePass()||!validateCpass()){
        alert("Please fill the form correctly!");
        e.preventDefault();
        return false;
    }
    else{
        alert("Form submitted successfully!");
        return true;
    }
});