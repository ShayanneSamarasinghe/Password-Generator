// Assignment Code
var generateBtn = document.querySelector("#generate");
var myuppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var mylowercase = "abcdefghijklmnopqrstuvwxyz";
var mynumbers = "123456789";
var mysymbols = "!@#$%^&*";
var passlength = 0;
var temppass = "";
var mypassword = "";

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("password");
  var askuppercase = confirm("Do you want uppercase characters?");
  if(askuppercase){
    temppass += myuppercase;
    console.log(temppass);

  }
  
  var asklowercase = confirm("Do you want lowercase characters?");
  if(asklowercase){
    temppass += mylowercase;
    console.log(temppass);

  }
  
  var asksymbols = confirm("Do you want symbol characters? IE:!@#$%^&* ");
  if(asksymbols){
    temppass += mysymbols;
    console.log(temppass);

  }
  
  var asknumbers = confirm("Do you want numbers?");
  if(asknumbers){
    temppass += mynumbers;  
    console.log(temppass);
    

  }
  
  if(temppass.length == 0){
    alert("You must select at least one data type. Please refresh and try again");
 
 
 
  }

  else{
    randomtemppass = shuffle(temppass);
    console.log(randomtemppass);

    var passlength = prompt ("How many characters do you want? Between 8 and 128");
    // passlength = Number(passlength);
    console.log(typeof(passlength))
    if(passlength >= 8 && passlength <= 128 && !isNaN(passlength)){
      var myTruncatedString = randomtemppass.substring(0,passlength);
      document.getElementById("password").value = myTruncatedString

      


    }


    else{
      alert("Input not correct. Please start over");
    }
  }


  



  

   

}

function shuffle(s) {
  var arr = s.split('');          
  
  arr.sort(function() {
    return 0.5 - Math.random();
  });  
  s = arr.join('');                
  return s;  
}                      


// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
