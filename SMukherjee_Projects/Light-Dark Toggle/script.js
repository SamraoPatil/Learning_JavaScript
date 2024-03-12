const changeThemeBtn = document.querySelector(".change-theme-btn");
const body = document.querySelector("body");
const text = document.querySelector(".heading");

changeThemeBtn.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    text.innerHTML = "DARK MODE 😈";
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    text.innerHTML = "LIGHT MODE 😊";
  }
});
