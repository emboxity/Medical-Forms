function submitFuncton() {
    var x = document.getElementById("frm1");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
      text += x.elements[i].value + "<br>";
    }
    document.getElementById("checkInfo").innerHTML = text + "Is this all your information?";
  }
