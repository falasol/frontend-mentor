const hamburgerEl = document.querySelector(".hero__hamburger");
const mobileNavEl = document.querySelector(".nav--mobile");

hamburgerEl.addEventListener("click", changeMobileNavStatus);

function changeMobileNavStatus(event) {
  if (mobileNavEl.style.display == "block") {
    mobileNavEl.style.display = "none";
  } else {
    mobileNavEl.style.display = "block";
  }
}
