
// button

var button = document.getElementById("go");
button.innerHTML = "Generate Password";
button.addEventListener ("click", function() {

 //prompts
    
    ask();
    function ask(){
        pwLength = prompt("Pick a password length between 8 - 128 characters (only enter the NUMBER of characters):");
        
        if(pwLength === null || pwLength === "") {
            return;
        }
    
        if(pwLength >= 8 && pwLength <= 128) {
            alert("Your password length will be " + pwLength + " characters.");
            
            return;
        }
        alert("that is not a valid password length. Make sure you are entering a NUMBER between 8 - 128");
        ask(pwLength);
    }
    if(pwLength === "") {
        alert("Nothing entered, please try again");
        return;
        
    }
    if(pwLength === null) {
        return;
    }
    pwLength = parseInt(pwLength);

var upperCase = confirm("Do you want UPPERCASE letters in your password?");
var lowerCase = confirm("Do you want lowercase letters in your password?");
var numberQ = confirm("Do you want numbers in your password?");
var specialQ = confirm("Do you want $pec!al characters in your password?");

if(upperCase) {
    upTf = "UPPERCASE letters, ";
} else {
    upTf = "No UPPERCASE letters, ";
}

if(lowerCase) {
    lowTf = "will have lowercase letters, ";
} else {
    lowTf = "No lowercase letters, ";
}

if(numberQ) {
    numTf = "will have Numbers, ";
} else {
    numTf = "No numbers, ";
}

if(specialQ) {
    specTf = "will have $pec!al characters. ";
} else {
    specTf = "No $pec!al characters. ";
}

alert("Your password will include: " + upTf + lowTf + numTf + "and " + specTf);

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

//The end result

var result = document.getElementById("answer");
result.innerHTML = (pwGen(pwLength));

});
