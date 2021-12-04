const addBtn = document.querySelector(".add-btn");
const sectionAddCard = document.querySelector(".addGroup");
const closeBtn = document.querySelector(".close-btn");

addBtn.addEventListener("click", () => {
  sectionAddCard.classList.toggle("display");
});

closeBtn.addEventListener("click", () => {
  sectionAddCard.classList.toggle("display");
});

// drag, drop and click
const clickOrDrag = document.querySelector(".form-img-container");
const file = document.getElementById("profile-img");
const dragBox = document.querySelector(".form-detail");

clickOrDrag.addEventListener("click", () => {
  file.click();
  
});

dragBox
  .addEventListener("dragover", (e) => {
    e.preventDefault();
    dragBox.classList.add("imgVisit");
    console.log(this);
    console.log(e);
  });

var eventtype = ["dragleave", "dragend"]

eventtype.forEach((type) => {
    dragBox.addEventListener(type, (e) => {
    e.preventDefault();
    dragBox.classList.remove("imgVisit");
    console.log(this);
})})

//////////// theme changer
const themeToggler = document.querySelector(".dark");
const browserTheme = window.matchMedia("(prefers-color-scheme: light)");
const mainBG = "#252B42";
const navColor = "#1A2036";
const cardColor = "#1A2036";
const borderColor = "#1A2036";
const fontColor = "#B1B9D8";

function themeDark() {
  document.documentElement.style.setProperty("--mainBG", mainBG);
  document.documentElement.style.setProperty("--navColor", navColor);
  document.documentElement.style.setProperty("--cardColor", cardColor);
  document.documentElement.style.setProperty("--fontColor", fontColor);
  localStorage.setItem("theme", "dark");
  themeToggler.className = localStorage.getItem("theme");
}

function themeLight() {
  document.documentElement.style.setProperty("--mainBG", "#B1B9D8");
  document.documentElement.style.setProperty("--navColor", "#969fc4");
  document.documentElement.style.setProperty("--cardColor", "#969fc4");
  document.documentElement.style.setProperty("--fontColor", "#1A2036");
  localStorage.setItem("theme", "light");
  themeToggler.className = localStorage.getItem("theme");
}

themeToggler.addEventListener("click", () => {
  if (themeToggler.classList.value === "light") {
    themeDark();
  } else {
    themeLight();
  }
});

if (browserTheme.matches && localStorage.getItem("theme") === null) {
  themeLight();
  console.log(1);
} else if (localStorage.getItem("theme") === "light") {
  themeLight();
} else {
  themeDark();
}
///////////////////////////////////////////////////////

// animation on startup
gsap.from("nav", { duration: 1.6, x: "-150", opacity: 0, ease: "elastic" });
gsap.from(".sectionBar", {
  duration: 1.5,
  y: "-100",
  opacity: 0,
  ease: "elastic",
});
gsap.from(".card", {
  duration: 0.6,
  x: 200,
  opacity: 0,
  stagger: 0.1,
  ease: "power4.out",
});