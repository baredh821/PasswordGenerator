function generateRandomPassword () {
event.preventDefault();
var userInput = "";
var temp = "";
// var temp1 = "";
var userInputIsCorrect = false;
var specialCharacters;
var numericCharacters;
var lowerCaseCharacters;
var upperCaseCharacters;
var specialCharactersValue = "(!#$%&'()*+,-./:;<=>?@[\]^_`{|}~)";
var numericCharactersValue = "1234567890";
var lowerCaseValue = "abcdefghijklmnopqrstuvwxyz";
var upperCaseValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var finalPasssword = document.querySelector("#textArea");

while(!userInputIsCorrect)
{
userInput = prompt('Enter the length of the password');
if(userInput > 8 && userInput < 128){
userInputIsCorrect = true;
specialCharacters = confirm("Do you want to add special Characters?");
numericCharacters = confirm("Do you want to add numeric Characters?");
lowerCaseCharacters = confirm("Do you want to add Lowercase Characters?");
upperCaseCharacters = confirm("Do you want to add Uppercase Characters?");
if ((specialCharacters == true) && (numericCharacters == true) && 
    (lowerCaseCharacters == true) && (upperCaseCharacters == true)){
        var cond1 = (specialCharactersValue + numericCharactersValue + lowerCaseValue + upperCaseValue);
        for (i=0;i<userInput;i++)
        temp += cond1.charAt(Math.floor(Math.random() * cond1.length));
        finalPasssword.innerHTML = temp;
}
    else if ((specialCharacters == true) && (numericCharacters == true) && 
    (lowerCaseCharacters == true) && (upperCaseCharacters == false)){
        var cond1 = (specialCharactersValue + numericCharactersValue + lowerCaseValue);
        for (i=0;i<userInput;i++)
        temp += cond1.charAt(Math.floor(Math.random() * cond1.length));
        finalPasssword.innerHTML = temp;
    }
    else if ((specialCharacters == true) && (numericCharacters == true) && 
    (lowerCaseCharacters = false) && (upperCaseCharacters = true)){
        var cond1 = (specialCharactersValue + numericCharactersValue + upperCaseValue);
        for (i=0;i<userInput;i++)
        temp += cond1.charAt(Math.floor(Math.random() * cond1.length));
        finalPasssword.innerHTML = temp;
    }
    else if ((specialCharacters == true) && (numericCharacters == false) && 
    (lowerCaseCharacters == true) && (upperCaseCharacters == true)){
        var cond1 = (specialCharactersValue + lowerCaseValue + upperCaseValue);
        for (i=0;i<userInput;i++)
        temp += cond1.charAt(Math.floor(Math.random() * cond1.length));
        finalPasssword.innerHTML = temp;
    }
    else if ((specialCharacters == false) && (numericCharacters == true) && 
    (lowerCaseCharacters == true) && (upperCaseCharacters == true)){
        var cond1 = (numericCharactersValue + lowerCaseValue + upperCaseValue);
        for (i=0;i<userInput;i++)
        temp += cond1.charAt(Math.floor(Math.random() * cond1.length));
        finalPasssword.innerHTML = temp;
    }
    else if ((specialCharacters == true) && (numericCharacters == false) && 
    (lowerCaseCharacters == false) && (upperCaseCharacters == false)){
        var cond1 = (specialCharactersValue);
        for (i=0;i<userInput;i++)
        temp += cond1.charAt(Math.floor(Math.random() * cond1.length));
        finalPasssword.innerHTML = temp;
    }
    else if ((specialCharacters == false) && (numericCharacters == true) && 
    (lowerCaseCharacters == false) && (upperCaseCharacters == false)){
        var cond1 = (numericCharactersValue);
        for (i=0;i<userInput;i++)
        temp += cond1.charAt(Math.floor(Math.random() * cond1.length));
        finalPasssword.innerHTML = temp;
    }
    else if ((specialCharacters == false) && (numericCharacters == false) && 
    (lowerCaseCharacters == true) && (upperCaseCharacters == false)){
        var cond1 = (lowerCaseValue);
        for (i=0;i<userInput;i++)
        temp += cond1.charAt(Math.floor(Math.random() * cond1.length));
        finalPasssword.innerHTML = temp;
    }
    else if ((specialCharacters == false) && (numericCharacters == false) && 
    (lowerCaseCharacters == false) && (upperCaseCharacters == true)){
        var cond1 = (upperCaseValue);
        for (i=0;i<userInput;i++)
        temp += cond1.charAt(Math.floor(Math.random() * cond1.length));
        finalPasssword.innerHTML = temp;
    }
    else if ((specialCharacters == true) && (numericCharacters == true) && 
    (lowerCaseCharacters == false) && (upperCaseCharacters == false)){
        var cond1 = (specialCharactersValue + numericCharactersValue);
        for (i=0;i<userInput;i++)
        temp += cond1.charAt(Math.floor(Math.random() * cond1.length));
        finalPasssword.innerHTML = temp;
    }
    else if ((specialCharacters == true) && (numericCharacters == false) && 
    (lowerCaseCharacters == true) && (upperCaseCharacters == false)){
        var cond1 = (specialCharactersValue + lowerCaseValue);
        for (i=0;i<userInput;i++)
        temp += cond1.charAt(Math.floor(Math.random() * cond1.length));
        finalPasssword.innerHTML = temp;
    }
    else if ((specialCharacters == true) && (numericCharacters == false) && 
    (lowerCaseCharacters == false) && (upperCaseCharacters == true)){
        var cond1 = (specialCharactersValue + upperCaseValue);
        for (i=0;i<userInput;i++)
        temp += cond1.charAt(Math.floor(Math.random() * cond1.length));
        finalPasssword.innerHTML = temp;
    }
    else if ((specialCharacters == false) && (numericCharacters == true) && 
    (lowerCaseCharacters == true) && (upperCaseCharacters == false)){
        var cond1 = (numericCharactersValue + lowerCaseValue);
        for (i=0;i<userInput;i++)
        temp += cond1.charAt(Math.floor(Math.random() * cond1.length));
        finalPasssword.innerHTML = temp;
    }
    else if ((specialCharacters == false) && (numericCharacters == true) && 
    (lowerCaseCharacters == false) && (upperCaseCharacters == true)){
        var cond1 = (numericCharactersValue + upperCaseValue);
        for (i=0;i<userInput;i++)
        temp += cond1.charAt(Math.floor(Math.random() * cond1.length));
        finalPasssword.innerHTML = temp;
    }
    else if ((specialCharacters == false) && (numericCharacters == false) && 
    (lowerCaseCharacters == true) && (upperCaseCharacters == true)){
        var cond1 = (lowerCaseValue + upperCaseValue);
        for (i=0;i<userInput;i++)
        temp += cond1.charAt(Math.floor(Math.random() * cond1.length));
        finalPasssword.innerHTML = temp;
    }
    else if ((specialCharacters == false) && (numericCharacters == false) && 
    (lowerCaseCharacters == false) && (upperCaseCharacters == false)){
        alert("Please select atleast one character type");  
    }
}
else{
alert('Please enter a value between 8 - 128 Characters');
userInputIsCorrect = false;
}
}}

function copyClip(){
    event.preventDefault();
    var copyText = document.querySelector("#textArea");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}
