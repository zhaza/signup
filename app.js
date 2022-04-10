var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password")
  , button = document.querySelector("button");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
    confirm_password.style.borderColor = "red";
    password.style.borderColor = "red";
  } else {
    confirm_password.setCustomValidity('');
  }
}

button.onclick = validatePassword;