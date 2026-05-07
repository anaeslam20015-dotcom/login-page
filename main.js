let Fname = document.getElementById("Fname");
let Sname = document.getElementById("Sname");
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let btn = document.getElementById("fo");

btn.onsubmit = function (e) {
  if (Fname.value === "") {
    Fname.style.border = "2px solid red";
    e.preventDefault();
  } else {
    Fname.style.border = "2px solid green";
  }
  if (Sname.value === "") {
    Sname.style.border = "2px solid red";
    e.preventDefault();
  } else {
    Sname.style.border = "2px solid green";
  }
  if (!/\w+@\w+\.\w+/gi.test(email.value)) {
    email.style.border = "2px solid red";
    e.preventDefault();
  } else {
    email.style.border = "2px solid green";
  }
  if (pass.value.length < 6) {
    pass.style.border = "2px solid red";
    e.preventDefault();
  } else {
    pass.style.border = "2px solid green";
  }
};
