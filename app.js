function validateForm() {
    let a = document.getElementById("username").value;
    let b = document.getElementById("age").value;
    let c = document.getElementById("phone-number").value;
    
    if (a == "") {
      alert("Không được để trống tên đăng nhập.");
      return false;
    }
    if (b == "") {
        alert("Không được để trống tuổi.");
        return false;
    }
    if (c == "") {
        alert("Không được để trống số điện thoại.");
        return false;
    }
    else {
        return true;
    }
}