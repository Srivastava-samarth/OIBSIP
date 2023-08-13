const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenumber');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', (num) =>{
    num.preventDefault();
    validate();
})

const isValidEmail = (emailVal) =>{
    var atSymbol = emailVal.indexOf("@");
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf(".");
    if(dot <= atSymbol + 3) return false;
    if(dot === emailVal.length - 1) return false;
    return true;
}

const sendData = (usernameVal,s,count) =>{
    if(s === count){
        // alert("Registration Successful");
        // swal("Welcome! " + usernameVal, "Registration successful", "success");
        location.href = `demo.html?username=${usernameVal}`;
    }
}

const SuccessMsg = (usernameVal) =>{
    let formCon = document.getElementsByClassName('details');
    var count = formCon.length - 1;
    for(var i=0;i<formCon.length;i++){
        if(formCon[i].className === "details success"){
            var s = 0 + i;
            sendData(usernameVal,s, count);
        }else{
            return false;
        }
    }
}

const validate = () => {
const usernameVal = username.value.trim();
const emailVal = email.value.trim();
const PhoneVal = phonenumber.value.trim();
const passwordVal = password.value.trim();
const cpasswordVal = cpassword.value.trim();
//validate username
if(usernameVal === ""){
    setError(username, 'username cannot be blank');
}else if(usernameVal.length <= 5){
    setError(username, 'username should be min 6 characters');
}else{
    setSuccessMsg(username);
}
//validate email
if(emailVal === ""){
    setError(email, 'email cannot be blank');
}else if(!isValidEmail(emailVal)){
    setError(emailVal, 'Enter valid email');
}else{
    setSuccessMsg(email);
}
//validate phone number
if(PhoneVal === ""){
    setError(phonenumber, 'phone number cannot be blank');
}else if(PhoneVal.length != 10){
    setError(phonenumber, 'Enter valid number');
}else{
    setSuccessMsg(phonenumber);
}
//validate password
if(passwordVal === ""){
    setError(password, 'password cannot be blank');
}else if(passwordVal.length < 8){
    setError(password, 'Password must be minimum of 8 digits');
}else{
    setSuccessMsg(password);
}
//validate confirm password
if(cpasswordVal === ""){
    setError(cpassword, 'confirm password cannot be blank');
}else if(passwordVal != cpasswordVal){
    setError(cpassword, 'Passwords must be equal');
}else{
    setSuccessMsg(cpassword);
}
    SuccessMsg(usernameVal);
}

function setError(input, errorMessage){
    const det = input.parentElement;
    const small = det.querySelector('small');
    det.className = "details error";
    small.innerText = errorMessage;
}

function setSuccessMsg(input){
    const det = input.parentElement;
    det.className = "details success";
}

