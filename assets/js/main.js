// const nome = document.getElementById('nomePersona').value;
// console.log(nome)


function somma() {
    const nomeCognome  = document.getElementById('nomePersona').value;
    const km = document.getElementById('kmDaPercorrere').value;
    const eta = document.getElementById('fasciaEta').value;


    console.log (nomeCognome, km, eta);

    let prezzo_finale = (km * 0.21).toFixed(2);
    let offerta ='prezzo standard'
    if (eta < 18){
        prezzo_finale = prezzo_finale - (prezzo_finale * 0.20 ).toFixed(2);
        offerta ='prezzo scontato del 20'
    }
    else if (eta > 65){
        prezzo_finale = prezzo_finale -  (prezzo_finale * 0.40).toFixed(2);
        offerta ='prezzo scontato del 40'
    }
    console.log (prezzo_finale);
    prezzo_finale = prezzo_finale.toFixed(2);
    document.getElementById('costo').innerHTML = prezzo_finale;



    // document.getElementById('passeggero').innerHTML = nomeCognome;
    document.getElementById('offerta').innerHTML = offerta;
     document.getElementById('carrozza').innerHTML = Math.random(1).toFixed(2);
     document.getElementById('codice').innerHTML = Math.random(1).toFixed(2);


}






