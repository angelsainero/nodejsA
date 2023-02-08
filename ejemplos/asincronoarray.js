
// https://plataforma.keepcoding.io/courses/full-stack-keepcoding-bootcamp-web14/lectures/45421432
//BUCLE ASINCRONO CON ARRAY 09:52:00

function escribeTras2Segundos(texto, callback) {
  setTimeout(() => {
    console.log(texto);
    callback();
  }, 2000);
}
//hacemos la funcion de recursividad
function serie(arr, fn, callback) { 
  if (arr.length == 0) {    
    callback();
    return;
  }  
  fn("texto " + arr.shift(), () => {
    serie(arr, fn, callback);
  });
}

console.log("inicio");
serie(['uno','dos','tres','cuatro','cinco'], escribeTras2Segundos, () => {
  console.log("fin.");
});
