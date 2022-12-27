var variable;
let variableLetFirst;
// const constante;
const constante = "Constante";
console.log(constante);
var a = 1;
console.log(a);
a = 4;
console.log(a);
//constante = "Adios!";
console.log(constante);
let b = 3;
console.log(b);
b = 5;
console.log(b);
var variable = "variable VAR";
for (var i = 0; i < 3; i++) {
  var variable = "segunda variable";
}
console.log(variableLet);
//////////
var num = 4;
console.log(typeof num);
num = "soy num";
console.log(typeof num);

//////////////////////////////
const c = 4;
c + 4;
const ar = [1, 2, 3, 4];
console.log(ar[2]);

// () => funciones
function suma(a, b) {
    // cuerpo de funcion
}


if (true) {
  // todo por dentro
  const constante2 = "Ciao";
}

// {} => llaves para objetos, funciones y estructuras de control
const movil = {
  anchura: 5,
  altura: 10,
  marca: "Xiaomi",
  isWhite: false,
  contactos : ["Gorka", "Martin", "raul"],
  tarjeta : {
    marca: "lg",
    almacenamiento: "32"
  },
  "altura-tarjeta": 4
};

movil.anio = 2019;
movil.sumergible = false;
console.log(movil.tarjeta);
console.log(movil.anio);
console.log(movil.sumergible);

//////////////////////////////
const lista = [1, "hi", true, undefined, null];
const lista2 = new Array(2, "hola", true, false, null);
const lista3 = new Array(3);
lista3[0] = "primer elemento";
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//////////////////////////////
// Fechas
// Librerias de apoyo Moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10) //milisegundos 
console.log(fecha_milis)

const fecha_cadena = new Date("December 27 2022")
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 2, 15);
console.log(fecha_valores);

const dia = ahora.getDate()
const mes = ahora.getMonth() + 1
const anio = ahora.getFullYear()
console.log(dia, mes, anio)