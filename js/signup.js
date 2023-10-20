// validation form register and register user local storage
const inputEmailRegister = document.querySelector(".input-signup-email");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const btnRegister = document.querySelector(".signup__signInButton");

// validation form register and register user local storage

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputEmailRegister.value === "" ||
    inputPasswordRegister.value === ""
  ) {
    alert("vui lòng không để trống");
  } else {
    // array user
    const user = {
      email: inputEmailRegister.value,
      password: inputPasswordRegister.value,
    };
    const registeredUser = localStorage.getItem(inputEmailRegister.value);
    if (registeredUser) {
      alert("Email này đã có người đăng ký");
    }else{

      let json = JSON.stringify(user);
      localStorage.setItem(inputEmailRegister.value, json);
      alert("Đăng Ký Thành Công");
      window.location.href = "login.html";
    }
  }
});
