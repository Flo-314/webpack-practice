(()=>{"use strict";function e(){document.querySelector("#header-img").src="https://media.discordapp.net/attachments/762206362271744001/899067756119486484/unknown.png ";const e=document.querySelector("main"),t=document.createElement("div"),n=document.createElement("div"),c=document.createElement("div"),a=document.createElement("div"),d=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div"),r=document.createElement("div");t.textContent="Nuestro Menu",c.textContent="Hamburguesa con Papas Fritas",a.textContent="Milanesa con Papas Fritas",d.textContent="Tortilla a la Española",o.textContent="Pizza de Muzzarella",i.textContent="Empanadas de Carne",r.textContent="Cafe con Medialunas",c.classList.add("menuContainer"),a.classList.add("menuContainer"),d.classList.add("menuContainer"),o.classList.add("menuContainer"),i.classList.add("menuContainer"),r.classList.add("menuContainer"),c.setAttribute("id","hamburguesa"),a.setAttribute("id","milanesa"),d.setAttribute("id","tortilla"),o.setAttribute("id","muzzarela"),i.setAttribute("id","empanadas"),r.setAttribute("id","cafe"),t.setAttribute("id","title"),n.setAttribute("id","menu"),n.append(c,a,d,o,i,r),e.append(t,n)}function t(){document.querySelector("main").innerHTML=""}!function(){const e=document.querySelector("#content"),t=document.createElement("header"),n=document.createElement("div"),c=document.createElement("h1"),a=document.createElement("nav"),d=document.createElement("button"),o=document.createElement("button"),i=document.createElement("button"),r=document.createElement("p"),u=document.createElement("img");u.src="",u.setAttribute("id","header-img"),n.setAttribute("id","title-container"),c.innerHTML="La Turba",r.textContent="Av. Varela 503",i.setAttribute("id","contactBtn"),i.innerHTML="Contacto",o.setAttribute("id","menuBtn"),o.innerHTML="Nuestro Menu ",d.setAttribute("id","homeBtn"),d.innerHTML="Home",n.appendChild(c),a.append(d,o,i),t.append(n,r,a),e.appendChild(t),e.appendChild(u)}(),function(){const e=document.querySelector("#content"),t=document.createElement("main");document.createElement("div"),e.appendChild(t)}(),e(),function(){const e=document.querySelector("#content"),t=document.createElement("footer"),n=document.createElement("img");n.src="https://cdn-icons-png.flaticon.com/512/25/25231.png",t.innerHTML="Page created by flo",t.appendChild(n),e.appendChild(t)}();const n=document.querySelector("#homeBtn"),c=document.querySelector("#menuBtn"),a=document.querySelector("#contactBtn");n.addEventListener("click",(()=>{null===document.querySelector("#home")&&(t(),function(){document.querySelector("#header-img").src=" https://media.discordapp.net/attachments/799844724642938900/899055343894679572/Sin_titulo-1.png?width=720&height=236";const e=document.querySelector("main"),t=document.createElement("div");t.setAttribute("id","home"),e.appendChild(t)}())})),c.addEventListener("click",(()=>{null===document.querySelector("#menu")&&(t(),e())})),a.addEventListener("click",(()=>{null===document.querySelector("#contact")&&(t(),document.querySelector("#header-img").src="https://media.discordapp.net/attachments/762206362271744001/899063545407361084/unknown.png?width=731&height=327")}))})();