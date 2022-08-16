
function sumarPrecioTotal(precio) {
    totalCompra += precio;
}
//------------------------------------------------------
function crearCeldasTd() {
    let celdas = new Array(3);
    for (let i = 0; i < celdas.length; i++) {
        celdas[i] = document.createElement("td");
    }
    return celdas;
}

function agregarContenidoTd (td) {
    td[0].textContent = nroCompra;
    td[1].textContent = producto.value;
    td[2].textContent = "$ " + precio.value;
}

function agregarElementosTd(tr) {
    let arrayTd = crearCeldasTd();
    agregarContenidoTd(arrayTd);
    arrayTd.forEach(td => {
        tr.appendChild(td);
    });
}

function crearElementoTr() {
    let tableRow = document.createElement("tr");
    agregarElementosTd(tableRow);

    return tableRow;
}

//-----------------------------------------------------

function agregarProducto() {
    nroCompra++;
    sumarPrecioTotal(Number(precio.value));

    let filaTr = crearElementoTr();
    let tabla = document.querySelector(".tabla");
    tabla.appendChild(filaTr);
}

function agregarTotal () {
    let div = document.createElement("div");
    div.setAttribute("id", "divTotal");

    let h3 = document.createElement("h3");
    h3.textContent = `Total = $${totalCompra}`;

    div.appendChild(h3);
    document.body.appendChild(div);

}

//---------------------------------------------------

let nroCompra = 0;
let totalCompra = 0;

let producto = document.getElementById("producto");
let precio = document.getElementById("precio");

let inputAgregar = document.getElementById("inputAgregar");
let inputTotal = document.getElementById("inputTotal");

let filaNula = document.querySelector(".filaNula");

inputAgregar.addEventListener('click', (e) => {
    e.preventDefault();
    if (filaNula.isConnected) {
        filaNula.remove();
    }
    agregarProducto();
});

inputTotal.addEventListener("click",(e) => {
    e.preventDefault();
    let divTotal = document.querySelector("#divTotal");
    if (divTotal == null) {
        agregarTotal();
    } else {
        let h3 = divTotal.querySelector("h3");
        h3.textContent = `Total = $${totalCompra}`;
    }
});



