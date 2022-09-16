let vector1: number[] = new Array(6);
let vector2: number[] = new Array(6);
let vectorResultante: number[] = new Array(6);

function cargarVector() {
  let vector: number[] = new Array(6);
  for (let i: number = 0; i < 6; i++) {
    vector[i] = Number(prompt("Ingrese el valor " + (i + 1) + " : "));
  }
  return vector;
}

function sumarVectores(vector1, vector2) {
  let resultado: number[] = new Array(6);
  for (let i: number = 0; i < 6; i++) {
    resultado[i] = vector1[i] + vector2[i];
  }
  return resultado;
}

alert("Carga de números para el vector 1");
vector1 = cargarVector();
alert("Carga de números para el vector 2");
vector2 = cargarVector();

vectorResultante = sumarVectores(vector1, vector2);

alert(
  "El resultado de la suma entre vector 1 y vector 2 se mostrará por consola"
);
console.log("vector 1 + vector 2 = vector resultante");
for (let i: number = 0; i < 6; i++) {
  console.log(vector1[i] + " + " + vector2[i] + " = " + vectorResultante[i]);
}

console.log(`Vector Resultante: [${vectorResultante}]`);
