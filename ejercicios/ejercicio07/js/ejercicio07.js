// Calcula y devuelve el mcd con el método de Euclides
let mcdEuclides = (dividendo, divisor) => {

    let temp;

    while (divisor !== 0) {
        temp = divisor;
        divisor = dividendo % divisor;
        dividendo = temp;
    }

    return Math.abs(dividendo);

}

/** 
 * Agregamos evento al botón azul, al hacer click mostrara el cociente y el resto de la división
 */
document.querySelector(".btn-primary").addEventListener("click", () => {

    let dividendo = parseInt(document.getElementById("dividendo").value);
    let divisor = parseInt(document.getElementById("divisor").value);
    let mensaje = document.getElementById("resultado");

    if((!isNaN(dividendo)) && (!isNaN(divisor)) && (divisor > 0)) {

        let mcd = mcdEuclides(dividendo, divisor);

        mensaje.innerHTML = `<b>El mcd es: ${mcd}</b><br>`;

    } else {
        mensaje.innerHTML = "<b>Imposible hacer el calculo</b>";
    }

    mensaje.classList.remove("d-none");

});

// Agregamos evento al botón rojo, al hacer click rederigira a la página anterior
document.querySelector(".btn-danger").addEventListener("click", () => {
    history.back();
});