// Agregamos evento al botón azul, al hacer click calculara y mostrara la longitud, area y volumen
document.querySelector(".btn-primary").addEventListener("click", () => {

    let mensaje = document.getElementById("resultado");
    let radio = parseFloat(document.getElementById("radio").value);

    if((radio > 0) && (!isNaN(radio))) {
        
        let longitud = (2*Math.PI*radio).toFixed(2);
        let area = (Math.PI*Math.pow(radio, 2)).toFixed(2);
        let volumen = (longitud*Math.PI*Math.pow(radio, 2)).toFixed(2);

        mensaje.innerHTML = "<b>Longitud:</b> " + longitud + " cm<br>";
        mensaje.innerHTML += "<b>Área:</b> " + area + " cm²<br>";
        mensaje.innerHTML += "<b>Volumen:</b> " + volumen + " cm³<br>";

    } else {
        mensaje.innerHTML = "<b>Imposible realizar el calculo.</b>";
    }

    mensaje.classList.remove("d-none");

});

// Agregamos evento al botón rojo, al hacer click rederigira a la página anterior
document.querySelector(".btn-danger").addEventListener("click", () => {
    history.back();
});