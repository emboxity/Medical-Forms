const btn = document.querySelector(".button");

const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");

const first = document.querySelector(".first");
const last = document.querySelector(".last");

const userAgeInfo = document.querySelector(".user-age")
const age = document.querySelector(".userAgeInfo")


btn.addEventListener("click", () => {
  first.textContent = `First name:${firstName.value}`;
  last.textContent = `First name:${lastName.value}`;
  age.textContent = `Age:${userAgeInfo.value}`;

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
