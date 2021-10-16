function createMenu(){
    const imgHeader = document.querySelector("#header-img")
    imgHeader.src = "https://media.discordapp.net/attachments/762206362271744001/899067756119486484/unknown.png "

   

const main = document.querySelector("main");
const titleDiv = document.createElement("div")
const menuDiv = document.createElement("div")
const hamburguesa = document.createElement("div")
const milanesa = document.createElement("div")
const tortilla = document.createElement("div")
const  pizza = document.createElement("div")
const empanadas = document.createElement("div")
const cafe = document.createElement("div")

titleDiv.textContent = "Nuestro Menu"
hamburguesa.textContent = "Hamburguesa con Papas Fritas"
milanesa.textContent = "Milanesa con Papas Fritas"
tortilla.textContent = "Tortilla a la Española"
pizza.textContent = "Pizza de Muzzarella"
empanadas.textContent = "Empanadas de Carne"
cafe.textContent = "Cafe con Medialunas"

hamburguesa.classList.add("menuContainer")
milanesa.classList.add("menuContainer")
tortilla.classList.add("menuContainer")
pizza.classList.add("menuContainer")
empanadas.classList.add("menuContainer")
cafe.classList.add("menuContainer")


hamburguesa.setAttribute("id", "hamburguesa");
milanesa.setAttribute("id", "milanesa");
tortilla.setAttribute("id", "tortilla");
pizza.setAttribute("id", "muzzarela");
empanadas.setAttribute("id", "empanadas");
cafe.setAttribute("id", "cafe");
titleDiv.setAttribute("id", "title");
menuDiv.setAttribute("id", "menu");


menuDiv.append(hamburguesa,milanesa,tortilla,pizza,empanadas,cafe)
main.append(titleDiv,menuDiv)
}
export{createMenu}