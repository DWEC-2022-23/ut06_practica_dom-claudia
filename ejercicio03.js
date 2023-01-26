window.onload = inicio;

function inicio ()
{
    let input = document.getElementById("input");
    let ul = document.getElementById("ul");
    let boton = document.getElementById("boton");
    /*boton.addEventListener("click", ()=>{
        let nuevoli = document.createElement("li");
        let nuevoContenido = document.createTextNode(newElement);
        nuevoli.appendChild(nuevoContenido);
        newElement.appendChild(nuevoli);
        ul.appendChild(newElement);
    });*/

    //HACE LO MISMO ASI QUE COMO PREFIERAS TENERLO
    boton.addEventListener("click", addEvento);

    function addEvento()
    {
        
        let elementoNuevo = document.createElement("li"); 
        ul.appendChild(input);
        input.parentNode.replaceChild(elementoNuevo, input);
        
        //NO LO HACE
    }
}