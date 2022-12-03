function myFunction() {
  var x = document.getElementById("username");
  var y = document.getElementById("feedback");

  console.log( "Name: " + x.value);
  console.log(" Feedback: " + y.value);
}

function toggle_visibility() {
  if(document.getElementsByClassName('examples1')[0].style.display != "block") {
    document.getElementsByClassName('examples1')[0].style.display = "block";
    document.getElementsByClassName("button-38")[0].value = "Show less";
  }
  else {
    document.getElementsByClassName("examples1")[0].style.display = "none";
    document.getElementsByClassName("button-38")[0].value = "Show more";
  }
}