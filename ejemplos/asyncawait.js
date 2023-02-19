'use strict'

function sleep(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(54);
      }, ms);
    });
  }

  async function main () {
    const resultado = await sleep (2000)
    console.log(resultado)
}
main()