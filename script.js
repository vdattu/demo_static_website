const formOpenBtn = document.querySelector("#form-open"),
  signupOpenBtn = document.querySelector("#signup-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  logoutBtn = document.querySelector("#logout"),
  pwShowHide = document.querySelectorAll(".pw_hide");

// Open login form
formOpenBtn.addEventListener("click", () => {
  formContainer.classList.remove("active");
  home.classList.add("show");
});

// Open signup form
signupOpenBtn.addEventListener("click", () => {
  formContainer.classList.add("active");
  home.classList.add("show");
});

// Close form
formCloseBtn.addEventListener("click", () => {
  home.classList.remove("show");
  formContainer.classList.remove("active");
});

// Toggle password visibility
pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

// Open signup form from login form
signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});

// Open login form from signup form
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});

// Handle form submission
document
  .querySelector(".form.login_form form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    home.classList.remove("show");
    logoutBtn.style.display = "block"; // Assuming logoutBtn is initially hidden
  });

document
  .querySelector(".form.signup_form form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    home.classList.remove("show");
    logoutBtn.style.display = "block"; // Assuming logoutBtn is initially hidden
  });

// Hide form on scroll
window.addEventListener("scroll", () => {
  if (home.classList.contains("show")) {
    home.classList.remove("show");
    formContainer.classList.remove("active");
  }
});
