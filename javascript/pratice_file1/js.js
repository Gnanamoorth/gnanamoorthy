function hfirst_js() {
  document.getElementById("stylesheet").innerHTML = "Gnanamoorthy.V";
  document.getElementById("stylesheet").style.fontSize = "35px";
  document.getElementById("stylesheet").style.color = "red";
  document.getElementById("stylesheet").style.fontWeight = "bold";
  document.getElementById("stylesheet").style.textAlign = "center";
  document.getElementById("stylesheet").style.margin = "10px";
  document.getElementById("stylesheet").style.padding = "10px";
  document.getElementById("stylesheet").style.border = "1px solid black";
  document.getElementById("stylesheet").style.background = "black";
  document.getElementById("stylesheet").style.borderRadius = "5px";
  document.getElementById("stylesheet").style.outline = "1px solid black";
  document.getElementById("stylesheet").style.boxShadow = "2px 2px 2px black";
  document.getElementById("stylesheet").style.MozBoxShadow = "2px 2px 2px";
  document.getElementById("stylesheet").style.WebkitBoxShadow = "2px 2px 2px";
  document.getElementById("stylesheet").style.MozBoxShadow = "2px 2px 2px";
  document.getElementById("stylesheet").style.WebkitBoxShadow = "2px 2px 2px";
  document.getElementById("stylesheet").style.boxShadow = "2px 2px 2px";
  document.getElementById("stylesheet").style.textShadow = "2px 2px 2px";
}
function prints() {
  window.getElementById(pri).print
}


function alert_fn() {
  alert(document.innerHTML = "this is protected the security");
}
function sampleFunction() {
  document.getElementById("sampleAnchor").innerHTML = "BitDegree Space Doggos";
  document.getElementById("sampleAnchor").href = "https://www.bitdegree.org/courses/learn-solidity-space-doggos/";
  document.getElementById("sampleAnchor").target = "_blank";
}

function times() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  document.getElementById("date").innerHTML = date + day + month + year;
  document.getElementById("date").style.color = "red";
  document.getElementById("date").style.fontWeight = "bold";
  document.getElementById("date").style.textAlign = "center";
}
function let_variable() {
  let z = 11;
  {
    let z = 10
  }
  document.getElementById("let-variable").innerHTML = z;
}
function var_variable() {
  var z = 11;
  {
    var z = 10;
  }
  document.getElementById("var-variable").innerHTML = z;
}
/* loop */
function loop() {
  let text = "";
  for (let i = 0; i < 10; i++) {
    if (i == 6) { break; }
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
  };
  document.getElementById("for_loop").innerHTML = text;
}

function for_in() {
  let number = [10, 20, 30, 40, 50];
  txt = "<ul>";
  for (let x in number) {
    txt += "<li>" + number[x] + "</li>";
  };
  txt += "</ul>";
  document.getElementById("in_loop").innerHTML = txt;
}
function Do_while() {
  let txt = "";
  let i = 0;
  do {
    txt += "<br>The numbers are" + " " + i;
    i++;
  }
  while (i < 5);
  document.getElementById("do_while").innerHTML = txt;
}

function maping() {
  let fruits = new Map([
    ["apple", 210],
    ["orange", 90],
    ["bannana", 10],
    ["graps", 100],
  ]);
  fruits.set("lemon", 5);
  fruits.delete("bannana");
  text = "<ul>"
  fruits.forEach(function (value, key) {
    text += "<li>" + key + "=" + value + "</li>"
  })
  text += "</ul>";
  let txt = "";
  for (let x of fruits.entries()) {
    txt += x + "<br>";
  }
  document.getElementById("maps").innerHTML = fruits.get("apple") + "<br>" + fruits.get("lemon") + "<br>" + fruits.size + "<br>" + fruits.has("bannana") + "<br>" + fruits.has("lemon") + "<br>" + text + "<br>" + txt;
}

function sets() {
  const letters = new Set(["a", "b", "c", "d", "12"]);
  letters.add("e");
  /* if the same values is retur its can't be count the values of them in set functions */
  letters.add("e");
  /* for each in set */
  txt = "";
  letters.forEach(function (values) {
    txt += values + " <br>";
  })
  /* values */
  text1 = "";
  for (const x of letters.values()) {
    text1 += x + "<br>";
  }
  document.getElementById("set").innerHTML = letters.size + "<br>" + txt + " " + letters.values() + "<br>" + text1;
}
/* ternary operator */
function ternary_operator() {
  let age = 18;
  let result =
    (age >= 18) ? "your eligble to this site" : "your not eligble to this site";
  document.getElementById("ternary").innerHTML = result;
}