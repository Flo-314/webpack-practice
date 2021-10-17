
function createHome() {
    const content = document.querySelector("main");
    const imgHeader = document.querySelector("#header-img")
    imgHeader.src = " https://media.discordapp.net/attachments/799844724642938900/899055343894679572/Sin_titulo-1.png?width=720&height=236"
    const home = document.createElement("div")
    home.setAttribute("id","home"); 
    content.appendChild(home)
}
export{createHome}