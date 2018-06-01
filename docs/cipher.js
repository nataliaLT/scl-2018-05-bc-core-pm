window.cipher = {

  encode: (desplazamiento, texto) => {
    /* Acá va tu código */
    let mensajeCifrado = "";
    /*obtengo la posicion de la letra*/
    for (let i=0; i<texto.length; i++){
    let ascii= texto.charCodeAt(i);
    let posicion = (ascii - 65 + parseInt(desplazamiento)% 26 + 65);
    mensajeCifrado +=String.fromCharCode(posicion);
    }
    console.log(mensajeCifrado);
   return mensajeCifrado;

    },
    

  decode: (desplazarOne, textoOne) => {
    /* Acá va tu código */
    let mensajeDescifrado = "";
    /*obtengo la posicion de la letra*/
    for (let i=0; i<textoOne.length; i++){
    let asciI= textoOne.charCodeAt(i);
    let posicionDes = ((asciI + 65 - parseInt(desplazarOne))% 26 + 65);
    mensajeDescifrado +=String.fromCharCode(posicionDes);
    }
    console.log(mensajeDescifrado);
   return mensajeDescifrado;

  }
}
