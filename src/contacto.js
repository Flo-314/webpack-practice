function createContact() {
  const content = document.querySelector("main");
  const contact = document.createElement("div");
  const imgHeader = document.querySelector("#header-img");
  imgHeader.src =
    "https://media.discordapp.net/attachments/762206362271744001/899063545407361084/unknown.png?width=731&height=327";
  const h2 = document.createElement("h2");
  const divContent = document.createElement("div");
  const divStreet = document.createElement("div");
  const divInfo = document.createElement("div");
  const imgMap = document.createElement("img");
  const divContainer = document.createElement("div");

  divContainer.classList.add("contactContainer");
  imgMap.src = "https://i.imgur.com/USx7anP.png";
  contact.setAttribute("id", "contact");
  divInfo.classList.add("contactInfo");
  divStreet.classList.add("contactStreet");
  divContent.classList.add("contactContent");
  h2.textContent = "¿Quienes Somos?";
  divContent.textContent =
    "Somos un centro cultural,bar y confiteria de barrio. Tenemos la mejor calidad, calidad y etcetera de el pais. HASTA EL MAS ÑATO SABE QUE EN VARELA, SE COME DE VERDAD. TE DAMOS GRANDE Y GRUESA LAS PORCIONES... CREES QUE LAS AGUANTAS?.";
  divStreet.textContent =
    "Varela 503 (3.01 mi) Buenos Aires, Ciudad Autónoma de Buenos Aires, Argentina, 1406";
  divInfo.textContent =
    "Nuestro telefono : 03453411 674545453580-9389999999999999999999";
  divStreet.append(imgMap);
  divContainer.append(divStreet, divInfo);
  contact.append(h2, divContent, divContainer);
  content.appendChild(contact, divContainer);
}
export { createContact };
