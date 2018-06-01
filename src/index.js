/* Acá va tu código */
window.onload = function(){

/*funcion cifrar, enlazada al boton*/
cifrar.addEventListener('click', () => {
    /*creo una variable para guardar el mensaje que esta en mi textarea*/
    let texto= document.getElementById("message_cif").value.toUpperCase();
    /*creo una variable para traer el valor dentro de mi input type*/
    let desplazamiento= document.getElementById("desplazar").value;
    let mensaje_cifrado= window.cipher.encode(desplazamiento, texto);
    respuesta1.innerHTML = mensaje_cifrado;
});

/*funcion descifrar, enlazada al boton*/
Descifrar.addEventListener('click',()) => {
    
}
}