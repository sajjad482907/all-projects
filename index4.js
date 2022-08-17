   

function passwordCheking(form) {
    password1 = form.password1.value;
    password2 = form.password2.value;

    
    if (password1 == '')
        alert ("Please enter Your  Password");
          
  
    else if (password2 == '')
        alert ("Please enter Your confirm password");
          
     
    else if (password1 == password2) {
        alert("Password Match: welcome to your account!")
        return false;
    }

    
    else{
        alert ("Password did not match: Please try again...")
        return true;
    }
}




var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
// myInput.onfocus = function() {
//   document.getElementById("message").style.display = "block";
// }
// // When the user clicks outside of the password field, hide the message box
// myInput.onblur = function() {
//   document.getElementById("message").style.display = "none";
// }

// When the user starts to type something inside the password field


myInput.onkeyup=function(myInput) {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    // letter.classList.remove("invalid");
    // letter.classList.add("valid");
    return true;
  } else {
    // letter.classList.remove("valid");
    // letter.classList.add("invalid");
    return false;
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) { 
    // capital.classList.add("valid"); 
    // capital.classList.remove("invalid");
    return true;
   
  } else {
    // capital.classList.remove("valid");
    // capital.classList.add("invalid");
    return false;
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    // number.classList.add("valid");
    // number.classList.remove("invalid");
    return true;
  } else {
    // number.classList.remove("valid");
    // number.classList.add("invalid");
    return false;
  }
  
  // Validate length
  if(myInput.value.length >=8) {
    // length.classList.add("valid");
    // length.classList.remove("invalid");
    return true;
  } else {
    // length.classList.remove("valid");
    // length.classList.add("invalid");
    return false;
  }
}