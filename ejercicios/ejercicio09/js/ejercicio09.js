// Cambiar el tema del formulario según el parametro que le pases
function cambiarTema(tema) {

    let classBody;
    let classEncabezado;
    let classBoton;
    let classFormulario;
    let encabezados = document.querySelectorAll("h1");
    let boton = document.querySelector("button");
    let formulario = document.querySelector("form");

    document.body.style.backgroundImage = "none";

    switch(tema) {

        case "dark":
            classBody = "bg-black text-white";
            classEncabezado = "text-center text-shadow text-danger mb-4";
            classBoton = "btn btn-success mt-3";   
            classFormulario = "w-60 p-5 border border-danger rounded-4 bg-dark";
            break;
        case "light":
            classBody = "bg-white text-black";
            classEncabezado = "text-center text-shadow text-black mb-4";
            classBoton = "btn btn-primary mt-3";
            classFormulario = "w-60 p-5 border border-black rounded-4 bg-light";
            break;

    }

    document.body.setAttribute("class", classBody);

    encabezados.forEach((encabezado) => {
        encabezado.setAttribute("class", classEncabezado);
    });
    
    boton.setAttribute("class", classBoton);
    formulario.setAttribute("class", classFormulario);

}

document.getElementById("dark").addEventListener("click", () => {
    cambiarTema("dark");
});

document.getElementById("light").addEventListener("click", () => {
    cambiarTema("light");
});

// Devuelve el mes del año según el número de mes elegido
let calendario = (mes) => {

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