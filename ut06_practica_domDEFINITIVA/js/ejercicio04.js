window.onload = inicio;

function inicio ()
{
    let input = document.getElementById("input");
    let ul = document.getElementById("ul");
    let add = document.getElementById("add");
    let borrarUltimo = document.getElementById("borrarUltimo");
    let borrarPrimero = document.getElementById("borrarPrimero");
    add.addEventListener("click", addEvento);
    borrarUltimo.addEventListener("click", eliminarUltimo);
    borrarPrimero.addEventListener("click", eliminarPrimero);

    function addEvento()
    {
       const li = document.createElement("li");
        li.textContent = input.value;
        //ul.insertAdjacentElement("afterend", li); // También funciona
        ul.appendChild(li);
    }

    function eliminarUltimo()
    {
        var li = ul.lastChild;
        ul.removeChild(li);
    }

    function eliminarPrimero()
    {
        var li = ul.firstChild;
        ul.removeChild(li);
    }
}