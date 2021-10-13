let mobileNav = document.querySelector(".nav");
document.querySelector(".fas").addEventListener("click", function () {
  if (mobileNav.style.display === "block") {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "block";
  }
  document.querySelector(".arrowimage").classList.toggle("hidden");
});

document.body.addEventListener("click", function (e) {
  if (!e.target.matches("ul") && !e.target.matches(".fas")) {
    document.querySelector(".arrowimage").classList.remove("hidden");
    mobileNav.style.display = "none";
  }
});
