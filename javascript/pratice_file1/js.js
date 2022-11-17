function hello(){
    document.getElementById("script").innerHTML = "gnanamoorthy.";
    document.getElementById("script").style.fontSize="35px";
    document.getElementById("script").style.color="red";
    document.getElementById("script").style.fontWeight="bold";
    document.getElementById("script").style.textAlign="center";
    document.getElementById("script").style.margin="10px";
    document.getElementById("script").style.padding="10px";
    document.getElementById("script").style.border="1px solid black";
    document.getElementById("script").style.background="black";
    document.getElementById("script").style.borderRadius="5px";
    document.getElementById("script").style.outline="1px solid black";
    document.getElementById("script").style.boxShadow="2px 2px 2px black";
    document.getElementById("script").style.MozBoxShadow="2px 2px 2px";
    document.getElementById("script").style.WebkitBoxShadow="2px 2px 2px";
    document.getElementById("script").style.MozBoxShadow="2px 2px 2px";
    document.getElementById("script").style.WebkitBoxShadow="2px 2px 2px";
    document.getElementById("script").style.boxShadow="2px 2px 2px";
    document.getElementById("script").style.textShadow="2px 2px 2px";
}
  function prints(){
    window.getElementById(pri).print
  }
 
  
  function alert_fn() {
    alert(document.innerHTML="this is protected the security");
  }
  function sampleFunction() {
    document.getElementById("sampleAnchor").innerHTML = "BitDegree Space Doggos";
    document.getElementById("sampleAnchor").href = "https://www.bitdegree.org/courses/learn-solidity-space-doggos/";
    document.getElementById("sampleAnchor").target = "_blank";
  }
  
  function times() {
    let date=new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    document.getElementById("date").innerHTML = date+day+month+year;
    document.getElementById("date").style.color="red";
    document.getElementById("date").style.fontWeight="bold";
    document.getElementById("date").style.textAlign="center";
  }
  function let_variable () {
    let z = 11;
    {
      let z=10
    }
    document.getElementById("let-variable").innerHTML = z;
  }
  function var_variable () {
    var z = 11;
    {
      var z=10;
    }
    document.getElementById("var-variable").innerHTML = z;
  }
