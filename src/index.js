import { createHead, createMain, createFooter } from "./initPage.js";
import { createHome } from "./home.js";
import { createContact } from "./contacto.js";
import { createMenu } from "./menu.js";

function clearMain() {
  const main = document.querySelector("main");
  main.innerHTML = "";
}

createHead();
createMain();
createHome();
createFooter();

const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const contactBtn = document.querySelector("#contactBtn");

homeBtn.addEventListener("click", () => {
  let home = document.querySelector("#home");
  if (home === null) {
    clearMain();
    createHome();
  }
});
menuBtn.addEventListener("click", () => {
  let menu = document.querySelector("#menu");
  if (menu === null) {
    clearMain();
    createMenu();
  }
});
contactBtn.addEventListener("click", () => {
  let contact = document.querySelector("#contact");
  if (contact === null) {
    clearMain();
    createContact();
  }
});
