window.onload = inicio;

function inicio()
{
    let div1 = document.getElementById("div1");
    let parrafo1 = document.getElementById("parrafo1");
    let parrafo2 = document.getElementById("parrafo2");
    let parrafo3 = document.getElementById("parrafo3");
    let parrafo4 = document.getElementById("parrafo4");
    let boton = document.getElementById("boton");

    boton.onclick = function () {
        if (boton.innerHTML === "Fondo Claro")
        {
            div1.style.background = "white";
            parrafo1.style.color = "black";
            parrafo2.style.color = "black";
            parrafo3.style.color = "black";
            parrafo4.style.color = "black";
            boton.innerHTML = "Fondo Oscuro";
        }
        else
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