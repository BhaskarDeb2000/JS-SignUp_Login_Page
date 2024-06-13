let userName = "";
let name = "";
let password = "";
let confirmPassword = "";

// Output element
const output = document.getElementById("output");

function signUpPasswordMatch(password, confirmPassword) {
  if (password === confirmPassword) {
    output.innerText =
      "Password Matched. You have successfully signed yourself up.";
  } else {
    output.innerText =
      "Sorry, the password didn't match! Please start all over again.";
  }
}

function loginUserNameMatch(inputUserName) {
  if (inputUserName === userName) {
    output.innerText = `Hello ${userName}, Your name is ${name}`;
  } else {
    output.innerText = "Username not found.";
  }
}

function loginPasswordMatch(inputPassword) {
  if (inputPassword === password) {
    output.innerText = "Welcome!";
  } else {
    output.innerText = "Wrong Password! Try again.";
  }
}

function handleResetOption() {
  const resetOption = document
    .getElementById("reset-option")
    .value.trim()
    .toLowerCase();
  if (resetOption === "y") {
    const newPassword = prompt("Enter your new password:");
    const newConfirmPassword = prompt("Enter your new confirmPassword:");
    password = newPassword;
    confirmPassword = newConfirmPassword;
    signUpPasswordMatch(newPassword, newConfirmPassword);
  }
}

function handleSignup() {
  name = document.getElementById("signup-name").value.trim();
  userName = document.getElementById("signup-username").value.trim();
  password = document.getElementById("signup-password").value.trim();
  confirmPassword = document
    .getElementById("signup-confirm-password")
    .value.trim();

  signUpPasswordMatch(password, confirmPassword);
}

function handleLogin() {
  const loginUserName = document.getElementById("login-username").value.trim();
  loginUserNameMatch(loginUserName);

  const loginPassword = document.getElementById("login-password").value.trim();
  loginPasswordMatch(loginPassword);
}

function disableAllSections() {
  document.getElementById("signup-section").style.display = "none";
  document.getElementById("login-section").style.display = "none";
}
