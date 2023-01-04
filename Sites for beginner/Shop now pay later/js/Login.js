const openPopUpLogIn = document.getElementById("open_login");
const closePopUpLogIn = document.getElementById("pop_up_close_login");
const popUpLogIn = document.getElementById("pop_up_login");

openPopUpLogIn.addEventListener("click", function (e) {
  e.preventDefault();
  popUpLogIn.classList.add("active");
});

closePopUpLogIn.addEventListener("click", () => {
  popUpLogIn.classList.remove("active");
});
