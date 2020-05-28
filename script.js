// Assignment Code
var generateBtn = document.querySelector("#generate");
var myuppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var mynumbers = "123456789";
var passlength = 0;

// Write password to the #password input
function writePassword() {
  console.log("We are in the function!")
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var askuppercase = confirm("Do you want uppercase characters?");
  console.log(askuppercase);
  var asknumbers = confirm("Do you want numbers?");
  console.log(asknumbers);
  var passlength = prompt ("how many characters do you want? Between 8 and 128");
  console.log(passlength);
  console.log(typeof(passlength));
  passlength = Number(passlength);
  console.log(typeof(passlength))

  if(passlength >= 8 && passlength <= 128 ){
    var mypassword= "";

    //loop as many times as the pass length
    //for every repetition of the loop, we will add 1 random character from our selection
    // check the users criteria (upercase, lowercase, etc.)
    //Build a temporary password string with all characters that the user wants...
    //var temppass = myuppercase + mynumbers

  }





  passwordText.value = "Password will appear here";
 

  // passwordText.value = password;

}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
