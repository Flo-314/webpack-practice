 import { createHead, createMain, createFooter } from "./initPage.js";
import { createHome } from "./home.js";
import { createContact } from "./contacto.js";
import { createMenu } from "./menu.js";

function clearMain(){
  const main = document.querySelector("main")
  main.innerHTML = ""
}


createHead();
createMain();
createMenu();
createFooter();

 const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const contactBtn = document.querySelector("#contactBtn");

homeBtn.addEventListener("click", () => {
  let home = document.querySelector("#home")
  if(home === null){
    clearMain()
    createHome()
  }
});
menuBtn.addEventListener("click", () => {
  let menu = document.querySelector("#menu")
  if(menu === null){
    clearMain()
    createMenu()
  }
});
contactBtn.addEventListener("click", () => {
  let contact = document.querySelector("#contact")
  if(contact === null){
    clearMain()
    createContact()
  }
}); 
 
/* </div>

    <header id="header">
    <div id="title-container"><h1>La Turba</h1></div>  
    <p>Av. Varela 503</p>  
    <nav>
        <button>Home</button>
        <button>Menu</button>
        <button>Contacto</button>
      </nav>
    </header>
    <img id="header-img" src="" alt="">  
      <main>
        <div id="title">Nuestro Menu</div>
        <div id="menu">
          <div class="menuContainer" id="hamburguesa">  Hamburguesa con Papas Fritas</div>
          <div class="menuContainer" id="milanesa">Milanesa con Papas Fritas</div>
          <div class="menuContainer" id="tortilla">Tortilla a la Española</div>
          <div class="menuContainer" id="muzzarela">Pizza de Muzzarela</div>
          <div class="menuContainer" id="empanadas">Empanadas de Carne</div>
          <div class="menuContainer" id="cafe">Cafe con Medialunas</div>
          <div class="menuContainer" id="cafe">Cafe con Medialunas</div>
          <div class="menuContainer" id="cafe">Cafe con Medialunas</div>
          <div class="menuContainer" id="cafe">Cafe con Medialunas</div>
          <div class="menuContainer" id="cafe">Cafe con Medialunas</div>
          <div class="menuContainer" id="cafe">Cafe con Medialunas</div>
          <div class="menuContainer" id="cafe">Cafe con Medialunas</div>


      </main>
    
    <footer>
      Page created by flo   <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="">
    </footer> */