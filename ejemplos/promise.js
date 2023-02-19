"use strict";
// https://plataforma.keepcoding.io/courses/full-stack-keepcoding-bootcamp-web14/lectures/45541580 
// min 02:53:00

//funcion que devuelve una promesa

function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    //   if (true) {
    //     reject(new Error("fatal"));
    //   }
      resolve(54);
    }, ms);
  });
}

const promesa = sleep(2000);

console.log(promesa);

promesa
  .then((result) => {
    console.log("pasaron 2 segundos", result);
    throw new Error ('Crash en el primer . then')
    return sleep(2000);
  }).catch(err => {
    console.log('falló la llamada a Meta para coger el nombre') 
    return sleep(100)   
  }).then((result) => {
    console.log("pasaron 2 segundos", result);
    return sleep(2000);
  })
  .then((result) => {
    console.log("fin", result);
  }).catch(err => {
    console.log('Hubo un error', err.message);
  })



Promise.all([sleep(1000), sleep(5000), sleep[3000]]).then(()=> { //cuando terminan todos se ejecuta el console.log a los 5 seg. 
  console.log('terminaron todas las promesas');
})

