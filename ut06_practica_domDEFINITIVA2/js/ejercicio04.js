window.onload = inicio;

function inicio ()
{
    let input = document.getElementById("input"); // Cogemos el id del input
    let ul = document.getElementById("ul"); // El del ul
    let info = document.getElementById("info"); // El del div
    let add = document.getElementById("add"); // Y el de los botones
    let borrarUltimo = document.getElementById("borrarUltimo");
    let borrarPrimero = document.getElementById("borrarPrimero");
    add.addEventListener("click", addEvento); // Creamos los event listeners para los botones
    borrarUltimo.addEventListener("click", eliminarUltimo);
    borrarPrimero.addEventListener("click", eliminarPrimero);

    function addEvento() // Creamos la funcion de añadir evento
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

    function eliminarUltimo() // Creamos la funcion de eliminar el ultimo hijo
    {
        let li = ul.lastElementChild; // Tenemos que usar lastElemementChild porque si no hay que darle dos veces click para que borre el elemento correcto que nosotros queremos que borre
        ul.removeChild(li); // ul es el padre de li y tenemos que usar removeChild
    }

    function eliminarPrimero() // Y creamos la función de eliminar el primero hijo
    {
        let li = ul.firstElementChild; // Tenemos que usar lastElemementChild porque si no hay que darle dos veces click para que borre el elemento correcto que nosotros queremos que borre
        ul.removeChild(li); // ul es el padre de li y tenemos que usar removeChild
    }
}