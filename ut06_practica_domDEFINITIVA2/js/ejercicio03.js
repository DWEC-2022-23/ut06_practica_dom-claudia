window.onload = inicio;

function inicio ()
{
    let input = document.getElementById("input"); // Cogemos el id del input
    let ul = document.getElementById("ul"); // El del ul
    let boton = document.getElementById("boton"); // El del botón
    let info = document.getElementById("info"); // El del div
    boton.addEventListener("click", addEvento); // Y le añadimos un event Listener al botón

    function addEvento() // Creamos una función
    {
       const li = document.createElement("li"); // Creamos un elemento li
        li.textContent = input.value; // Que coge el contenido del input
        if (input.value === "") // Si el input está vacío, no lo coge
        {
            info.innerHTML = "No puedes dejar ese campo vacío"; // Y sale este mensaje de aviso en el div de info
        }
        else // En caso contrario
        {
            ul.appendChild(li); // Se le añade el elemento li al padre ul
            //ul.insertAdjacentElement("afterend", li); // También funciona
            info.innerHTML = ""; // Y borramos el posible mensaje que se podría haber creado
        }
    }
}