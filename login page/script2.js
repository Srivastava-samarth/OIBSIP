var userInfo=[
    {
        username:"samarth",
        password:"123456789"
    },
    {
        username:"harsh",
        password:"sam123456"
    },
    {
        username:"samarth123",
        password:"harsh12345"
    }
]

form.addEventListener('submit', (num) =>{
    num.preventDefault();
    validate();
})

const validate = () => {
        getInfo();
    }
    
    function getInfo(){
    var usernameVal = document.getElementById("username").value;
    var passwordVal = document.getElementById("password").value;
    console.log(usernameVal + " " + passwordVal);
    for(i=0; i<userInfo.length; i++){
        if(usernameVal == userInfo[i].username && passwordVal == userInfo[i].password){
            console.log(usernameVal + " is logged in");
            location.href = `demo2.html?username=${usernameVal}`;
            return;
        }
    }
    console.log("Incorrect username or password");
}