const themeToggler = document.querySelector(".dark");

const mainBG = "#252B42";
const navColor = "#1A2036";
const cardColor = "#1A2036";
const borderColor = "#1A2036";
const fontColor = "#B1B9D8";


function themeToLigit() {
    document.documentElement.style.setProperty("--mainBG", mainBG);
  document.documentElement.style.setProperty("--navColor", navColor);
  document.documentElement.style.setProperty("--cardColor", cardColor);
  document.documentElement.style.setProperty("--fontColor", fontColor);
  localStorage.setItem("theme", "light");
}

function themeToDark() {
    document.documentElement.style.setProperty("--mainBG", "#B1B9D8");
    document.documentElement.style.setProperty("--navColor", "#969fc4");
    document.documentElement.style.setProperty("--cardColor", "#969fc4");
    document.documentElement.style.setProperty("--fontColor", "#1A2036");
    localStorage.setItem("theme", "dark");
}

themeToggler.addEventListener("click", () => {
console.log(localStorage.getItem("theme"))

    themeToggler.className = localStorage.getItem('theme')
    if (themeToggler.classList.value != "dark") {
        themeToDark();
    } else {
        themeToLigit();
    }
    // console.log(5)
});

if (localStorage.getItem('theme') === 'light') {
    themeToLigit()
}else {
    themeToDark()
}

// --mainBG : #252B42;
// --navColor : #1A2036;
// --fontColor: #B1B9D8;

console.log(localStorage.getItem("theme"))