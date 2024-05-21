// Devuelve el mes del año según el número de mes elegido
const calendario = (mes) => {

    const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    return MESES[mes];

}

/** 
 * Agregamos evento al botón azul, al hacer click mostrara el mes del año elegido
 */
document.querySelector(".btn-primary").addEventListener("click", () => {

    let mes = document.getElementById("mes").value;
    let mensaje = document.getElementById("resultado");

    if((mes >= 0) && (mes <= 11)) {

        let anio = calendario(mes);

        mensaje.innerHTML = `<b>Has elegido: ${anio}</b><br>`;

    } else {
        mensaje.innerHTML = "<b>Selecciona un mes del año.</b>";
    }

    mensaje.classList.remove("d-none");

});

// Agregamos evento al botón rojo, al hacer click rederigira a la página anterior
document.querySelector(".btn-danger").addEventListener("click", () => {
    history.back();
});