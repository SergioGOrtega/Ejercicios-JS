// Comprueba y devuelve si la palabra es palindromo o no
let esPalindromo = (palabra) => {
    return palabra.toLowerCase() === palabra.split('').reverse().join('').toLowerCase();
}

/** 
 * Agregamos evento al botón azul, al hacer click mostrara si la palabra es palindromo o no
 */
document.querySelector(".btn-primary").addEventListener("click", () => {

    let palabra = document.getElementById("palabra").value;
    let mensaje = document.getElementById("resultado");

    if(isNaN(palabra)) {

        if(esPalindromo(palabra)) {
            mensaje.innerHTML = "<b>La palabra es palindromo</b>";
        } else {
            mensaje.innerHTML = "<b>La palabra NO es palindromo</b>";
        }

    } else {
        mensaje.innerHTML = "<b>Imposible hacer el calculo</b>";
    }

    mensaje.classList.remove("d-none");

});

// Agregamos evento al botón rojo, al hacer click rederigira a la página anterior
document.querySelector(".btn-danger").addEventListener("click", () => {
    history.back();
});