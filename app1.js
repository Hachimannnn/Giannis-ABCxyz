function validateForm() {
    let a = document.getElementById("username").value;
    let b = document.getElementById("password").value;
    
    if (a == "") {
      alert("Không được để trống tên đăng nhập.");
      return false;
    }
    if (b == "") {
        alert("Không được để trống mật khẩu.");
        return false;
    }
}

function show() {
  if(document.getElementById("forgot").style.display != "block") {
      document.getElementById("forgot").style.display = "block";
      document.getElementById("forgot-button").innerHTML = "Forgot password?";
  }
  else {
      document.getElementById("forgot").style.display = "none";
      document.getElementById("forgot-button").innerHTML = "Forgot password?  ";
  }
}