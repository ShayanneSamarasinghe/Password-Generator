// Variables
var generateBtn = document.querySelector("#generate");
var myuppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var mylowercase = "abcdefghijklmnopqrstuvwxyz";
var mynumbers = "0123456789";
var mysymbols = "!@#$%^&*";
var passlength = 0;
var temppass = "";
var mypassword = "";

// writePassword Function
function writePassword() {

  // var password = generatePassword();
  var passwordText = document.querySelector("password");

  // uppercase prompt and user input
  var askuppercase = confirm("Do you want uppercase characters?");
  if (askuppercase) {
    temppass += myuppercase;
    console.log(temppass);

  }

  // lowercase prompt and user input
  var asklowercase = confirm("Do you want lowercase characters?");
  if (asklowercase) {
    temppass += mylowercase;
    console.log(temppass);

  }

  //symbol prompt and user input
  var asksymbols = confirm("Do you want symbol characters? IE:!@#$%^&* ");
  if (asksymbols) {
    temppass += mysymbols;
    console.log(temppass);

  }

  //number prompt and user input
  var asknumbers = confirm("Do you want numbers?");
  if (asknumbers) {
    temppass += mynumbers;
    console.log(temppass);


  }

  if (temppass.length == 0) {
    alert("You must select at least one data type. Please refresh and try again");



  }

  else {
    // passlength prompt and user input
    var passlength = prompt("How many characters do you want? Between 8 and 128");

    // passlength = Number(passlength);
    console.log(typeof(passlength))
    if (passlength >= 8 && passlength <= 128 && !isNaN(passlength)) {
      var finalpassword = ""
        for (i = 0; i < passlength; i++) {
        finalpassword += temppass.charAt(Math.floor(Math.random() * temppass.length))
      }
      
      document.getElementById("password").value = finalpassword


    }

    else {
      alert("Input not correct. Please start over");
    }


  }




}

//  Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
