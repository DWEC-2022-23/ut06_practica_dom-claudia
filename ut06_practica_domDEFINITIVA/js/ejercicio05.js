window.onload = inicio;

function inicio ()
{
    let manGradoSuperior = document.getElementById("manGradoSuperior");
    let manGradoMedio = document.getElementById("manGradoMedio");
    let tarGradoMedio = document.getElementById("tarGradoMedio");
    let tarGradoSuperior = document.getElementById("tarGradoSuperior");
    let divInformacion = document.getElementById("divInformacion");
    let ul = document.getElementById("lista");
    let ul2 = document.getElementById("lista2");
    let ul3 = document.getElementById("lista3");
    let ul4 = document.getElementById("lista4");
    ul.style.display = "none";
    ul2.style.display = "none";
    ul3.style.display = "none";
    ul4.style.display = "none";
    
    manGradoSuperior.addEventListener("click", menuInformacion);
    manGradoMedio.addEventListener("click", menuInformacion2);
    tarGradoMedio.addEventListener("click", menuInformacion3);
    tarGradoSuperior.addEventListener("click", menuInformacion4);

    function menuInformacion(event) 
    {
        if (ul.style.display === "block") 
        {
            ul.style.display = "none";
        }
        else
        {
            ul.style.display = "block";
        }
        console.log(event.target.getAttribute("name"));
        divInformacion.innerHTML = "Has elegido " + event.target.getAttribute("name") + " que se imparte en turno de mañana. Los números de grupos que se imparten son cuatro: DAW1, DAW2, DAM1 y DAM2."
    }

    function menuInformacion2(event) 
    {
        if (ul2.style.display === "block") 
        {
            ul2.style.display = "none";
        }
        else
        {
            ul2.style.display = "block";
        }
        divInformacion.innerHTML = "Has elegido " + event.target.getAttribute("name") + " que se imparte en turno de mañana. Los números de grupos que se imparten son tres: SMRDUAL, SMR1 y SMR2."
    }

    function menuInformacion3(event) 
    {
        if (ul3.style.display === "block") 
        {
            ul3.style.display = "none";
        }
        else
        {
            ul3.style.display = "block";
        }
        divInformacion.innerHTML = "Has elegido " + event.target.getAttribute("name") + " que se imparte en turno de tarde. Los números de grupos que se imparten son dos: SMR1 y SMR2."
    }

    function menuInformacion4(event) 
    {
        if (ul4.style.display === "block") 
        {
            ul4.style.display = "none";
        }
        else
        {
            ul4.style.display = "block";
        }
        divInformacion.innerHTML = "Has elegido " + event.target.getAttribute("name") + " que se imparte en turno de tarde. Los números de grupos que se imparten son dos: ASIR1 y ASIR2."
    }
}