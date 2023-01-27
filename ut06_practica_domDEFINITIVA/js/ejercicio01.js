window.onload = inicio;

function inicio()
{
    let colourPicker= document.getElementById("colourPicker");
    let titulo = document.getElementsByTagName("h1")[0];
    let button = document.getElementById("boton");
    button.addEventListener("click", ()=>{
        titulo.style.color = colourPicker.value;
    });
}