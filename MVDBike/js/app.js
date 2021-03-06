console.log("Validation with Javascript");

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}

function myFunction2() {
  var x = document.getElementById("myDIV2");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}



//Styles with Jquery
// $(".textPrincipal1").fadeOut(2000, () => {
//   $(".textPrincipal1").show()
// });

// $( "#TextBtn" ).click( () => {
//   $( "p" ).show( "slow" ) 
// });

// $("#TextBtn").on('click', () => {
//   $(".textPrincipal1").addClass("textPrincipalModificado")
// });

// Form validation 
const form = document.getElementById("form");
const fname = document.getElementById("fname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  
  const fnameValue = fname.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (fnameValue === "") {
    setErrorFor(fname, "name cannot be blank");
  } else {
    setSuccessFor(fname);
  }

  if (phoneValue === "") {
    setErrorFor(phone, "phone cannot be blank");
  } else {
    setSuccessFor(phone);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Password2 cannot be blank");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Passwords does not match");
  } else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("small");
  formGroup.className = "form-group error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// Form data 
