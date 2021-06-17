function submitFuncton() {
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

  var x = document.getElementById("frm1");
  var text = "";
  
  var a = document.forms["frm1"]["fname"].value;
  var b = document.forms["frm1"]["lname"].value;
  var c = document.forms["frm1"]["uage"].value;
  var d = document.forms["frm1"]["usex"].value;
  var e = document.forms["frm1"]["uemail"].value;
  var f = document.forms["frm1"]["unumber"].value;

  if (a || b || c || d || e || f == "") {
    alert("You are missing required information!");
    return;
  } else {
      
  btn.addEventListener("click", () => {
    first.textContent = `First name:${firstName.value}`;
    last.textContent = `Last name:${lastName.value}`;
    age.textContent = `Age:${userAgeInfo.value}`;
    sex.textContent = `Sex: ${userSexInfo.value}`
    email.textContent = `Email: ${userEmail.value}`
    phone.textContent = `Phone Number: ${userPhone.value}`
    
  });

  document.getElementById("checkInfo").innerHTML = text + "Is this all your information?";
  }
}
