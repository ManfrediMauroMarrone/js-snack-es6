$(document).ready(function() {
  let peso = getRndInteger(1, 30);

  console.log(peso);

  let biciclette = [
    {
      nome : 'pippo',
      peso : 20
    },
    {
      nome : 'pluto',
      peso : 25
    },
    {
      nome : 'paperino',
      peso : 18
    },
    {
      nome : 'topolino',
      peso : 30
    }
  ]

  console.log(biciclette);

  let biciGiusta = {}

  // creo una variabile per regostrare il peso delle biciclette

  let pesoMinore = biciclette[0].peso

  for (var i = 0; i < biciclette.length; i++) {
    biciCorrente = biciclette[i]

    const {peso} = biciCorrente

    console.log(peso);

    if (peso < pesoMinore) {
      pesoMinore = peso

      biciGiusta = biciCorrente
    }
  }

  console.log(biciGiusta);

  console.log(
    `
    La bici più leggera è ${biciGiusta.nome} e pesa ${biciGiusta.peso}
    `
  );

  document.getElementById('title').innerHTML = `La bici più leggera è ${biciGiusta.nome} e pesa ${biciGiusta.peso}`

  function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
})
