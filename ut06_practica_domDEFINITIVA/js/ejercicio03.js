window.onload = inicio;

function inicio ()
{
    let input = document.getElementById("input");
    let ul = document.getElementById("ul");
    let boton = document.getElementById("boton");
    boton.addEventListener("click", addEvento);

    function addEvento()
    {
        const li = document.createElement("li");
        li.textContent = input.value;
        //ul.insertAdjacentElement("afterend", li); // También funciona
        ul.appendChild(li);
    }
}