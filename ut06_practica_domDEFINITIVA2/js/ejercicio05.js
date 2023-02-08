window.onload = inicio;

function inicio ()
{
    let manGradoSuperior = document.getElementById("manGradoSuperior"); // Cogemos todos los ids
    let manGradoMedio = document.getElementById("manGradoMedio");
    let tarGradoMedio = document.getElementById("tarGradoMedio");
    let tarGradoSuperior = document.getElementById("tarGradoSuperior");
    let divInformacion = document.getElementById("divInformacion");

    manGradoSuperior.addEventListener("click", menuInformacion); // Les añadimos los event listeners a cada id
    manGradoMedio.addEventListener("click", menuInformacion2);
    tarGradoMedio.addEventListener("click", menuInformacion3);
    tarGradoSuperior.addEventListener("click", menuInformacion4);

    function menuInformacion(event) // Hacemos una función para cada grado
    {
        divInformacion.innerHTML = "Has elegido " + event.target.getAttribute("name") + " que se imparte en turno de mañana. Los números de grupos que se imparten son cuatro: DAW1, DAW2, DAM1 y DAM2." // A cada grado le añadimos un event.target con el get attribute mas el nombre
    }

    function menuInformacion2(event) 
    {
        divInformacion.innerHTML = "Has elegido " + event.target.getAttribute("name") + " que se imparte en turno de mañana. Los números de grupos que se imparten son tres: SMRDUAL, SMR1 y SMR2."
    }

    function menuInformacion3(event) 
    {
        divInformacion.innerHTML = "Has elegido " + event.target.getAttribute("name") + " que se imparte en turno de tarde. Los números de grupos que se imparten son dos: SMR1 y SMR2."
    }

    function menuInformacion4(event) 
    {
        divInformacion.innerHTML = "Has elegido " + event.target.getAttribute("name") + " que se imparte en turno de tarde. Los números de grupos que se imparten son dos: ASIR1 y ASIR2."
    }
}