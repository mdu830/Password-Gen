
// button

var button = document.getElementById("go");
button.innerHTML = "Generate Password";
button.addEventListener ("click", function() {
 //prompts
    
    ask();
    function ask(){
        pwLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters:");
        
    
        if(pwLength >= 8 && pwLength <= 128){
            alert("Your password length will be " + pwLength + " characters.");
            
            return;
        }
        alert("that is not a valid password length please try again");
        ask(pwLength);
    }
    pwLength = parseInt(pwLength);

var upperCase = confirm("Do you want to use UPPERCASE letters?");
var lowerCase = confirm("Do you want to use lowercase letters?");
var numberQ = confirm("Do you want to include numbers in your password?");
var specialQ = confirm("Do you want to include $pec!al characters in your password?");


if(upperCase) {
    alert("Your password will include uppercase letters");
} else {
    alert("Your password will NOT include uppercase letters");
}



if(lowerCase) {
    alert("Your password will include lowercase letters");
} else {
    alert("Your password will NOT include lowercase letters");
}



if(numberQ) {
    alert("Your password will include numbers");
} else {
    alert("Your password will NOT include numbers");
}



if(specialQ) {
    alert("Your password will include special characters");
} else {
    alert("Your password will NOT include special characters");
}


//password generator
function pwGen(length) {

    var result           = '';
    var characters       = '';
    var caps             = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowr             = 'abcdefghijklmnopqrstuvwxyz';
    var nums             = '1234567890';
    var spec             = '!@#$%^&*()-_+=?}{[];:<>.,';


    if(upperCase){
        characters = characters + caps;
    }
    if(lowerCase){
        characters = characters + lowr;
    }
    if(numberQ){
        characters = characters + nums;
    }
    if(specialQ){
        characters = characters + spec; 
    }

    var charactersLength = characters.length;
    
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

console.log(pwGen(pwLength));

var result = document.getElementById("answer");
result.innerHTML = (pwGen(pwLength));


});
