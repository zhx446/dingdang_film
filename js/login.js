var ele_username = document.getElementById("username");
var ele_password = document.getElementById("password");

var ele_usernameError = ele_username.parentElement.querySelector(".input-tip");
var ele_passwordError = ele_password.parentElement.querySelector(".input-tip");

function login() {
    if (checkLoginInfo()) {
        window.location.href = "index.html";
    }
}

function checkLoginInfo() {
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

    return isSuccess;
}