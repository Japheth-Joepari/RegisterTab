const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("userEmail");
const passwordInput = document.getElementById("userPassword");
const passwordConfirm = document.getElementById("confirm");
const formInput = document.getElementById("form");
const buttonSubmit = document.getElementById("submit");
const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//  Targeting messages the error message hova here.
    const emptyUserName = document.getElementById("emptyUserName");
    const lessthanusername = document.getElementById("lessthanusername");
    const emptymail = document.getElementById("emptymail");
    const validmail = document.getElementById("validmail");
    const emptypswd = document.getElementById("emptypswd");
    const lessthanpassword = document.getElementById("lessthanpassword");
    const emptyconfirm = document.getElementById("emptyconfirm");
    const notmatch = document.getElementById("notmatch");

    // Generalized the all Inputs (validate during submission)
    // Validation of all fields
usernameInput.addEventListener("change", (event) => {
  setTimeout(() => {
   validateUserName();
  }, 3000);
});
// Email funtionality validation process
emailInput.addEventListener("change", (event) => {
  setTimeout(() => {
   emailInputValidation();
  }, 3000);
});
// password error messages
passwordInput.addEventListener("change", (event) => {
  setTimeout(() => {
    passwordInputValidation();
  }, 3000);
});
// Confirmpassword validatuional
passwordConfirm.addEventListener("change", (event) => {
  setTimeout(() => {
    passwordConfirmValidation();
  }, 3000);
});

// // Whole funtion
const validateUserName = () => {
  if (usernameInput.value == "") {
    emptyusername.innerHTML = "Please enter your name";
    emptyusername.style.visibility="visible";
    lessthanusername.style.visibility="hidden";
  }else if (usernameInput.value.length < 3 || usernameInput.value.length > 15) {
    lessthanusername.innerHTML = "Must between 3 and 15 characters!";
    lessthanusername.style.visibility="visible";
    emptyusername.style.visibility="hidden";
  }else{
    lessthanusername.style.visibility="hidden";
    emptyusername.style.visibility="hidden";
  }
}

const emailInputValidation = () => {
// EmaiL VALIDATE
if (emailInput.value == "") {
  emptymail.innerHTML = "Please enter your email";
  emptymail.style.visibility="visible";
  validmail.style.visibility="hidden";
} else if (!emailInput.value.match(validRegex)) {
  validmail.innerHTML = "Please enter a valid email";
  validmail.style.visibility="visible";
  emptymail.style.visibility="hidden";
} else {
  validmail.style.visibility="hidden";
  emptymail.style.visibility="hidden";
}
}

const passwordInputValidation = () => {
  // Password validation field 
  if (passwordInput.value == "") {
    emptypsw.innerHTML = "Please enter a password";
    emptypsw.style.visibility="visible";
    lessthanpassword.style.visibility="hidden";
  } else if (
    passwordInput.value.length < 8 ||
    passwordInput.value.length > 15
  ) {
    lessthanpassword.innerHTML = "Must between 3 and 15 characters!";
    lessthanpassword.style.visibility="visible";
    emptypsw.style.visibility="hidden";
  } else {
    lessthanpassword.style.visibility="hidden";
    emptypsw.style.visibility="hidden";
  }
  
  }

  const passwordConfirmValidation = () => {
    if (passwordConfirm.value == "") {
      emptyconfirm.innerHTML = "Please enter your password";
      emptyconfirm.style.visibility="visible";
      notmatch.style.visibility="hidden";
    } else if (
      !passwordConfirm.value.match(passwordInput.value) ||
      !passwordInput.value.match(passwordConfirm.value)
    ) {
      notmatch.innerHTML = "Confirm Password not match";
      notmatch.style.visibility="visible";
      emptyconfirm.style.visibility="hidden";
    } else {
      notmatch.style.visibility="hidden";
      emptyconfirm.style.visibility="hidden";
    }
  
  }
  
  


 buttonSubmit.addEventListener("click", (event) => {

  if (usernameInput.value == "" ||emailInput.value == "" || passwordInput.value == "" || passwordConfirm.value == "") {
    alert("No input should be empty");
  }else{
    // Storing the data in localstorage
    localStorage.setItem("username", JSON.stringify(usernameInput.value));
    localStorage.setItem("userEmail", JSON.stringify(emailInput.value));
    localStorage.setItem("userPassword", JSON.stringify(passwordInput.value));
    localStorage.setItem("confirm", JSON.stringify(passwordConfirm.value));
    alert('Kindly verif from the login page');
      window.location.href = "http://127.0.0.1:5500/Pages/login.html";
  }
    // validateUserName();
    // emailInputValidation();
    // passwordInputValidation();
    // passwordConfirmValidation();
 

        
});

