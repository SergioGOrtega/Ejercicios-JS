// Calcula y devuelve el cociente y el resto de una división con el método de Euclides
const divisionEuclides = (dividendo, divisor) => {

    let cociente = 0;

    while(dividendo >= divisor) {
        dividendo -= divisor;
        cociente++;
    }

    let resultados = [cociente, divisor];

    return resultados;

}

/** 
 * Agregamos evento al botón azul, al hacer click mostrara el cociente y el resto de la división
 */
document.querySelector(".btn-primary").addEventListener("click", () => {

    let dividendo = parseInt(document.getElementById("dividendo").value);
    let divisor = parseInt(document.getElementById("divisor").value);
    let mensaje = document.getElementById("resultado");

    if((!isNaN(dividendo)) && (!isNaN(divisor)) && (divisor > 0)) {

        let division = divisionEuclides(dividendo, divisor);

        mensaje.innerHTML = `<b>El cociente es: ${division[0]}</b><br>`;
        mensaje.innerHTML += `<b>El resto es: ${division[1]}</b>`;

    } else {
        mensaje.innerHTML = "<b>Imposible hacer el calculo</b>";
    }

    mensaje.classList.remove("d-none");

});

// Agregamos evento al botón rojo, al hacer click rederigira a la página anterior
document.querySelector(".btn-danger").addEventListener("click", () => {
    history.back();
});