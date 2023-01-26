window.onload = inicio;

function inicio ()
{
    let manGradoSuperior = document.getElementById("manGradoSuperior");
    let manGradoMedio = document.getElementById("manGradoMedio");
    let tarGradoMedio = document.getElementById("tarGradoMedio");
    let tarGradoSuperior = document.getElementById("tarGradoSuperior");
    let ul = document.getElementById("lista");
    let ul2 = document.getElementById("lista2");
    let ul3 = document.getElementById("lista3");
    let ul4 = document.getElementById("lista4");
    ul.style.display = "none";
    ul2.style.display = "none";
    ul3.style.display = "none";
    ul4.style.display = "none";
    
    manGradoSuperior.addEventListener("click", menuDesplegable);
    manGradoMedio.addEventListener("click", menuDesplegable2);
    tarGradoMedio.addEventListener("click", menuDesplegable3);
    tarGradoSuperior.addEventListener("click", menuDesplegable4);

    function menuDesplegable() 
    {
        if (ul.style.display === "block") 
        {
            ul.style.display = "none";
        }
        else
        {
            ul.style.display = "block";
        }
    }

    function menuDesplegable2() 
    {
        if (ul2.style.display === "block") 
        {
            ul2.style.display = "none";
        }
        else
        {
            ul2.style.display = "block";
        }
    }

    function menuDesplegable3() 
    {
        if (ul3.style.display === "block") 
        {
            ul3.style.display = "none";
        }
        else
        {
            ul3.style.display = "block";
        }
    }

    function menuDesplegable4() 
    {
        if (ul4.style.display === "block") 
        {
            ul4.style.display = "none";
        }
        else
        {
            ul4.style.display = "block";
        }
    }
}