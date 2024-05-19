/**
 * Agregamos evento al botón azul, al hacer click comprobara y mostrara si es un triángulo
 * equilátero, isósceles o escaleno
 */
document.querySelector(".btn-primary").addEventListener("click", () => {

    let primerLado = parseFloat(document.getElementById("primerLado").value);
    let segundoLado = parseFloat(document.getElementById("segundoLado").value);
    let tercerLado = parseFloat(document.getElementById("tercerLado").value);
    let mensaje = document.getElementById("resultado");

    if((primerLado > 0 && segundoLado > 0 && tercerLado > 0) && (!isNaN(primerLado) && !isNaN(segundoLado) && !isNaN(tercerLado))) {

        if((primerLado == segundoLado) && (segundoLado == tercerLado))  {
            mensaje.innerHTML = "<b>El triángulo es equilatero.</b>";
        } else if((primerLado == segundoLado) || (primerLado == tercerLado) || (segundoLado == tercerLado)) {
            mensaje.innerHTML = "<b>El triángulo es isósceles.</b>";
        } else {
            mensaje.innerHTML = "<b>El triángulo es escaleno.</b>"
        }

    } else {
        mensaje.innerHTML = "<b>Imposible realizar la comparación.</b>";
    }

    mensaje.classList.remove("d-none");

});

// Agregamos evento al botón rojo, al hacer click rederigira a la página anterior
document.querySelector(".btn-danger").addEventListener("click", () => {
    history.back();
});