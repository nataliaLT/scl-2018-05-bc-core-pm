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
    

  decode: (desplazar, texto1) => {
    /* Acá va tu código */
    let mensajeDescifrado = "";
    /*obtengo la posicion de la letra*/
    for (let i=0; i<texto1.length; i++){
    let asciI= texto1.charCodeAt(i);
    let posicionDes = (asciI + 65 + parseInt(desplazar)% 26 + 65);
    mensajeDescifrado +=String.fromCharCode(posicionDes);
    }
    console.log(mensajeDescifrado);
   return mensajeDescifrado;

  }
}
