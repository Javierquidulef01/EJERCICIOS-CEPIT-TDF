/*
let div = document.querySelector(".divConinfo");
let btnOcultarMostrar = document.getElementById("boton-1");

btnOcultarMostrar.addEventListener("click", ocultarMostrar)
*/
function ocultarMostrar() {
    div.classList.toggle("div-ocultarMostrar");
}

let div = document.querySelector(".divConinfo");
let botones = document.querySelectorAll(".div-boton button");

botones.forEach(boton => {
    boton.addEventListener("click", ocultarMostrar);
})
