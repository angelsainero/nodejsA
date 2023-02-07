// llamar dos veces a la funciona para escribir dos veces con sus pausas
//

// function escribeTras2Segundos(texto) {
//   setTimeout(() => {
//     console.log(texto);
//   }, 2000);
// }
// console.log("inicio");
// escribeTras2Segundos("texto1");
// escribeTras2Segundos("texto2");
// console.log("fin");

//con esto nos pintaría inicio y fin y posteriormente los textos juntos asi que no nos vale.

function escribeTras2Segundos(texto, callback) {
  setTimeout(() => {
    console.log(texto);
    callback();
  }, 2000);
}
console.log("inicio");
escribeTras2Segundos("texto1", () => {
  escribeTras2Segundos("texto2", () => {
    console.log("fin");
  });
});

//BUCLE ASINCRONO

function escribeTras2Segundos(texto, callback) {
  setTimeout(() => {
    console.log(texto);
    callback();
  }, 2000);
}
//hacemos la funcion de recursividad
function serie(n, fn, callback) {
  if (n == 0) {
    //termino el bucle
    callback();
    return;
  }
  n = n - 1;
  fn("texto" + n, () => {
    serie(n, fn, callback);
  });
}

console.log("inicio");
serie(5, escribeTras2Segundos, () => {
  console.log("fin");
});
