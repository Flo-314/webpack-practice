
function createHome() {
    const content = document.querySelector("main");
    const imgHeader = document.querySelector("#header-img")
    imgHeader.src = " https://media.discordapp.net/attachments/799844724642938900/899055343894679572/Sin_titulo-1.png?width=720&height=236"
    const home = document.createElement("div")
    home.setAttribute("id","home"); 
    home.append(imgHeader)
    home.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempore laboriosam quaerat nisi porro reiciendis reprehenderit fuga aut sapiente deserunt, voluptas delectus ullam doloremque blanditiis nam possimus quis unde voluptates incidunt asperiores eaque ipsam facere ex. Minus, provident ex sapiente possimus ad explicabo assumenda reiciendis quos expedita optio? Distinctio accusamus, delectus dolorem nisi molestiae ipsum autem libero facere labore, obcaecati repellat, tenetur ex rem! Quas unde neque laudantium iste dolor, id rem eos ullam? Nulla corrupti nihil mollitia commodi unde sed nobis exercitationem quod, labore, cumque ullam impedit esse quasi voluptas doloribus dolorum laudantium quo explicabo? Maiores voluptatibus voluptates fugit cupiditate asperiores tenetur voluptatum, ipsum exercitationem ratione sapiente iure perferendis explicabo dolorum eos hic, odit deserunt ad non eum. Reprehenderit minima porro molestiae suscipit consectetur. Tempore dicta suscipit, mollitia in nam quasi impedit aliquam assumenda nemo iure illum neque voluptatum numquam aut et odio aperiam, alias molestiae expedita eaque provident. i"
    content.appendChild(home)
}
export{createHome}