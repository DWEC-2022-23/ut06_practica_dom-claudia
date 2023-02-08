window.onload = inicio;

function inicio()
{
    let div1 = document.getElementById("div1"); // Cogemos el id del div
    let parrafo1 = document.getElementById("parrafo1");
    let parrafo2 = document.getElementById("parrafo2");
    let parrafo3 = document.getElementById("parrafo3");
    let parrafo4 = document.getElementById("parrafo4"); // Cogemos los ids de todos los párrafos
    let boton = document.getElementById("boton"); // Cogemos el id del botón

    boton.onclick = function () { // Hacemos una función que al hacer click sobre el botón funcione así:
        if (boton.innerHTML === "Fondo Claro") // Si el botón pone "fondo claro" que haga lo siguiente
        {
            div1.style.background = "white";
            parrafo1.style.color = "black";
            parrafo2.style.color = "black";
            parrafo3.style.color = "black";
            parrafo4.style.color = "black";
            boton.innerHTML = "Fondo Oscuro";
        }
        else // Si no, que haga, lo siguiente
        {
            div1.style.background = "black";
            parrafo1.style.color = "white";
            parrafo2.style.color = "white";
            parrafo3.style.color = "white";
            parrafo4.style.color = "white";
            boton.innerHTML = "Fondo Claro";
        }
    }
}