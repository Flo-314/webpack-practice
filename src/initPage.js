function createHead() {
  const content = document.querySelector("#content");
  const header = document.createElement("header");
  const div = document.createElement("div")
  const h1 = document.createElement("h1");
  const nav = document.createElement("nav");
  const home = document.createElement("button");
  const menu = document.createElement("button");
  const contact = document.createElement("button");
  const p = document.createElement("p")
  const img = document.createElement("img")



  img.src = ""
  img.setAttribute("id", "header-img");
  div.setAttribute("id", "title-container");
  h1.innerHTML = "La Turba";
  p.textContent = "Av. Varela 503"
  contact.setAttribute("id", "contactBtn");
  contact.innerHTML = "Contacto";
  menu.setAttribute("id", "menuBtn");
  menu.innerHTML = "Nuestro Menu ";
  home.setAttribute("id", "homeBtn");
  home.innerHTML = "Home";
  div.appendChild(h1)
  nav.append(home, menu, contact);
  header.append(div,p, nav);
  content.appendChild(header);
  content.appendChild(img)
}
function createMain() {
  const content = document.querySelector("#content");
  const main = document.createElement("main");
  const mainDiv = document.createElement("div");
  content.appendChild(main);
}

function createFooter() {
  const content = document.querySelector("#content");
  const footer = document.createElement("footer");
  const img = document.createElement("img")
  img.src =  "https://cdn-icons-png.flaticon.com/512/25/25231.png"
  
  footer.innerHTML = "Page created by flo";
  footer.appendChild(img)
  content.appendChild(footer);
}

export { createHead, createMain, createFooter };
