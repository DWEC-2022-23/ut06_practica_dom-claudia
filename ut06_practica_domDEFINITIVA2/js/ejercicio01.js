window.onload = inicio;

function inicio()
{
    let colourPicker= document.getElementById("colourPicker"); // Cogemos el id de input
    let titulo = document.getElementsByTagName("h1")[0]; // Cogemos el id del primer (y único, pero tenemos que indicarlo) h1 y lo llamamos titulo
    let button = document.getElementById("boton"); // Cogemos el id del botón
    button.addEventListener("click", ()=>{ // Hacemos una función flecha
        titulo.style.color = colourPicker.value; // Le cambiamos el color al titulo
    });
}