// Calcula y devuelve la letra del DNI proporcionado
const cacularLetra = (dni) => {
    const LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE";
    return LETRAS[dni%23];
}

/** 
 * Agregamos evento al botón azul, al hacer click mostrara la letra del DNI proporcionado
 */
document.querySelector(".btn-primary").addEventListener("click", () => {

    let dni = parseInt(document.getElementById("dni").value);
    let mensaje = document.getElementById("resultado");

    if((!isNaN(dni)) && (dni.toString().length == 8)) {
        let letra = cacularLetra(dni);
        mensaje.innerHTML = "<b>Letra:</b> " + letra;
    } else {
        mensaje.innerHTML = "<b>Imposible hacer el calculo.</b>"
    }

    mensaje.classList.remove("d-none");

});

// Agregamos evento al botón rojo, al hacer click rederigira a la página anterior
document.querySelector(".btn-danger").addEventListener("click", () => {
    history.back();
});