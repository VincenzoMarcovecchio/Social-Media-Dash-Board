const ball = document.querySelector(".ball");
const headerRigth = document.querySelector(".header-right");
const body = document.getElementsByTagName("BODY")[0];
const header = document.getElementsByTagName("HEADER")[0];
const title = document.querySelectorAll(".title");
const cards = document.querySelectorAll(".card-big");
const numbers = document.querySelectorAll("strong");
const smallCards = document.querySelectorAll(".card-small");
headerRigth.addEventListener("click", () => {
  headerRigth.classList.toggle("header-style");
  ball.classList.toggle("ball-style");
  body.classList.toggle("white");
  header.classList.toggle("azurro");

  cards.forEach((element) => {
    element.classList.toggle("bg");
  });

  title[0].classList.toggle("black");
  title[1].classList.toggle("black");
  numbers.forEach((element) => {
    element.classList.toggle("black");
  });

  smallCards.forEach((element) => {
    element.classList.toggle("bg");
  });
});
