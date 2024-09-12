// Ejercicio entregable para el lunes 30/05
// Nombre del Ejercicio: PERSONAS EN UNA DISCO
let listaEdades: number[] = new Array(270);

/*
function imprimirEdades(listaEdades:number[]){
    for (let i:number = 0; i < listaEdades.length; i++) {
        console.log(`Posicion ${i} = ${listaEdades[i]}`);
    }
}
*/

//-----------------------------------------------------------------------
function mostrarInformacionDeEdades() {
  let personasMenorA21: number = 0;
  let personasMayorIgual21: number = 0;

  for (let i: number = 0; i < listaEdades.length; i++) {
    if (listaEdades[i] < 21) {
      personasMenorA21++;
    } else {
      personasMayorIgual21++;
    }
  }
  console.log(`Cantidad de personas menores a 21 años: ${personasMenorA21}`);
  console.log(
    `Cantidad de personas mayores o iguales a 21 años: ${personasMayorIgual21}`
  );
  console.log(`Total de personas dentro del local: ${listaEdades.length}`);
}

//------------------------------------------------------------------------
function aleatorio(menorValor: number, mayorValor: number): number {
  let edad: number = 0;

  while (edad < menorValor || edad > mayorValor) {
    edad = Math.floor(Math.random() * 100); // obtendrá edades hasta que edad sea un valor que esté entre 18 y 40
  }
  return edad; // 18 <= edad <= 40
}

function cargarEdades() {
  for (let i: number = 0; i < listaEdades.length; i++) {
    listaEdades[i] = aleatorio(18, 40);
  }
}
//-------------------------------------------------------------------------

cargarEdades();
mostrarInformacionDeEdades();

//imprimirEdades(listaEdades);
