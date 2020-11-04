$(document).ready(function() {
  let nomi = ['pippo', 'pluto', 'paperino', 'paperone', 'qui', 'quo', 'qua']

   // chiedo due numeri all'utente

  let numero1 = parseInt(prompt('inserisci un numero da 0 a 7'))

  let numero2 = parseInt(prompt('inserisci un altro numero da 0 a 7'))

  console.log(numero1);

  console.log(numero2);

  const nomiEstratti = nomi.filter((element, index) => {
  return numero1 <= index && numero2 >= index

  })

  console.log(nomiEstratti);


})
