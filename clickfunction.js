const btn = document.querySelector(".button");

const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");

const first = document.querySelector(".first");
const last = document.querySelector(".last");

const userAgeInfo = document.querySelector(".user-age")
const age = document.querySelector(".userAgeInfo")

const userSexInfo = document.querySelector(".user-sex")
const sex = document.querySelector(".userSexInfo")

const userEmail = document.querySelector(".user-email")
const email = document.querySelector(".email")

const userPhone = document.querySelector(".user-number")
const phone = document.querySelector(".number")

btn.addEventListener("click", () => {
  first.textContent = `First name:${firstName.value}`;
  last.textContent = `First name:${lastName.value}`;
  age.textContent = `Age:${userAgeInfo.value}`;
  sex.textContent = `Sex: ${userSexInfo.value}`
  email.textContent = `Email: ${userEmail.value}`
  phone.textContent = `Phone Number: ${userPhone.value}`
});

function submitFuncton() {
  var x = document.getElementById("frm1");
  var text = "";
  var i;
  for (i = 0; i < x.length; i++) {
  
  }
  document.getElementById("checkInfo").innerHTML =
    text + "Is this all your information?";
}
