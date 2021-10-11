document.querySelector(".fas").addEventListener("click", function () {
  document.querySelector(".nav").classList.toggle("navmobile");
  document.querySelector(".arrowimage").classList.toggle("hidden");
});

document.addEventListener("click", function (e) {
  if (
    !e.target.matches(".nav") &&
    !e.target.matches(".fas") &&
    document.querySelector(".nav").classList.contains("navmobile")
  )
    document.querySelector(".nav").classList.remove("navmobile");
});
