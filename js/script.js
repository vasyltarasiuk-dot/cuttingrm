// anchor script

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

//mobile menu

document.getElementById("burger").onclick = function () {
  document.getElementById("mobile-menu").classList.add("active");
  document.getElementById("dark").classList.add("visible");
  document.getElementById("dark").classList.add("smooth");
  document.querySelector("html").classList.add("overflowed");
};

document.getElementById("mobile-menu__close").onclick = function () {
  document.getElementById("mobile-menu").classList.remove("active");
  document.getElementById("dark").classList.remove("visible");
  setTimeout(() => document.getElementById("dark").classList.remove("smooth"), 1000);
  document.querySelector("html").classList.remove("overflowed");
};
