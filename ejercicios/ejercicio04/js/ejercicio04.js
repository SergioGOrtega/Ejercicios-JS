// Comprueba y devuelve si la palabra es mayuscula o no
const esMayuscula = (palabra) => {
    return palabra === palabra.toUpperCase();
}

/** 
 * Agregamos evento al botón azul, al hacer click mostrara si la palabra es mayuscula o minuscula
 */
document.querySelector(".btn-primary").addEventListener("click", () => {

    let palabra = document.getElementById("palabra").value;
    let mensaje = document.getElementById("resultado");

    if((isNaN(palabra)) && (palabra.length >= 1)) {

        if(esMayuscula(palabra)) {
            mensaje.innerHTML = "<b>La palabra esta en mayúscula</b>";
        } else {
            mensaje.innerHTML = "<b>La palabra esta en minúscula</b>";
        }

    } else {
        mensaje.innerHTML = "<b>Imposible hacer el calculo.</b>";
    }

    mensaje.classList.remove("d-none");

});

// Agregamos evento al botón rojo, al hacer click rederigira a la página anterior
document.querySelector(".btn-danger").addEventListener("click", () => {
    history.back();
});