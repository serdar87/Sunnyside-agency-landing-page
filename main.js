const mobileNav = document.querySelector(".nav");
const container = document.querySelector(".container");
document.querySelector(".fas").addEventListener("click", function () {
  if (mobileNav.style.display === "block") {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "block";
  }
  document.querySelector(".arrowimage").classList.toggle("hidden");
});

document.body.addEventListener("click", function (e) {
  if (
    window.innerWidth <= 600 &&
    !e.target.matches("ul") &&
    !e.target.matches(".fas")
  ) {
    document.querySelector(".arrowimage").classList.remove("hidden");
    mobileNav.style.display = "none";
  }
});

const handleOver = function (e) {
  if (e.target.classList.contains("link")&&  window.innerWidth >= 600) {
    const link = e.target;
    const siblings = e.target.closest(".container").querySelectorAll(".link");
    const logo = document.querySelector(".logo");
    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};
container.addEventListener("mouseover", handleOver.bind(0.5));

container.addEventListener("mouseout", handleOver.bind(1));
