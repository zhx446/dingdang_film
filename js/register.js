var ele_username = document.getElementById("username");
var ele_password = document.getElementById("password");
var ele_email = document.getElementById("e-mail");
var ele_re_password = document.getElementById("re-password");


var ele_usernameError = ele_username.parentElement.querySelector(".input-tip");
var ele_passwordError = ele_password.parentElement.querySelector(".input-tip");
var ele_emailError = ele_email.parentElement.querySelector(".input-tip");
var ele_re_passwordError = ele_re_password.parentElement.querySelector(".input-tip");

function register() {
    if (checkRegisterInfo()) {
        window.location.href = "login.html";
    }
}

function checkRegisterInfo() {
    let isSuccess = true;

    if (!ele_username.value) {
        ele_usernameError.style.color = "#F00";
        ele_usernameError.innerHTML = "用户名不能为空！";
        isSuccess = false;
    }
    if (!ele_password.value) {
      ele_passwordError.style.color = "#F00";
      ele_passwordError.innerHTML = "密码不能为空！";
      isSuccess = false;
    }
    if (!ele_email.value) {
      ele_emailError.style.color = "#F00";
      ele_emailError.innerHTML = "邮箱不能为空！";
      isSuccess = false;
  }
  if (!ele_re_password.value) {
    ele_re_passwordError.style.color = "#F00";
    ele_re_passwordError.innerHTML = "确认密码不能为空！";
    isSuccess = false;
  }

    return isSuccess;
}