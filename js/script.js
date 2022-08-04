const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafo_1 = document.querySelector(".parrafito");
const parrafo_2 = document.querySelector("#pid");
const inp = document.querySelector("input");

// Modifica texto o HTML con innerHTML
h1.innerText = "Patito Feo";
// Modifica o añade atributos
h1.setAttribute("class", "patito")

// Añade clase a la lista de clases
h1.classList.add('rojo');
h1.classList.remove('patito')

// inp.value = 'Hey'

const img = document.createElement('img');
img.setAttribute('src', 'https://imgs.search.brave.com/3UMBkgOvoTk19oXOu-I-yVFXEKhXh-J1qOylEid0CQE/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5E/QXp5R3Q5cGl4TnVx/aERad05hYzNBSGFF/SyZwaWQ9QXBp');

parrafo_2.appendChild(img)