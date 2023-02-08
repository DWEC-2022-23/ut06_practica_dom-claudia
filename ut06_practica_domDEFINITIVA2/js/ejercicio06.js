let listDiv = "";
let listUl = "";
let lis = "";
let toggleList = "";
let descriptionInput = "";
let descriptionP = "";
let descriptionButton = "";
let addItemInput = "";
let addItemButton = "";

 window.addEventListener("load",iniciar);
 function iniciar(){
  listDiv = document.querySelector('.list');
  listUl = listDiv.querySelector('ul');
  lis = listUl.children;
  toggleList = document.getElementById('toggleList');
  descriptionInput = document.querySelector('input.description');
  descriptionP = document.querySelector('p.description');
  descriptionButton = document.querySelector('button.description');
  addItemInput = document.querySelector('input.addItemInput');
  addItemButton = document.querySelector('button.addItemButton');
  let info = document.getElementById("info"); // Cogemos la id de info
  let ul = document.getElementById("ul"); // y la de ul para usarlas más adelante

  for (let i = 0; i < lis.length; i += 1) {
     attachListItemButtons(lis[i]);
    }
  listUl.addEventListener('click', crearbotones); 
  toggleList.addEventListener('click', MostrarOcultarLista);
  descriptionButton.addEventListener('click', CambiarTextoLista); 
  addItemButton.addEventListener('click', AñadirElemento); 
}
 
 function attachListItemButtons(li) {
   let subir = document.createElement('button');
   subir.className = 'subir';
   subir.textContent = 'subir';
   li.appendChild(subir);

   let bajar = document.createElement('button');
   bajar.className = 'bajar';
   bajar.textContent = 'bajar';
   li.appendChild(bajar);  

   let borrar = document.createElement('button');
   borrar.className = 'borrar';
   borrar.textContent = 'borrar';
   li.appendChild(borrar);
 }
 
 function crearbotones(event) {
  // Realiza las acciones de los botones subir, borrar y bajar para los elementos de la lista
  var li = document.querySelectorAll("li"); // Cogemos todos los li

  if (event.target.className === "borrar") // Hacemos un bucle para ver si presionamos el botón de borrar
  {
    for (let i = 0; i <= li.length; i++) // En esta línea y la siguiente comprobamos qué li pulsamos
    {
      if (event.target.parentNode === li[i]) 
      {
        ul.removeChild(li[i]); // Borramos el li que hemos pulsado
      } 
    }
  }
  else if (event.target.className === "subir") // Hacemos un bucle para ver si presionamos el botón de subir
  {
    for (let i = 0; i <= li.length; i++) // En esta línea y la siguiente comprobamos qué li pulsamos
    {
      if (event.target.parentNode === li[i])
      {
        ul.insertBefore(li[i], li[i - 1]); // Subimos el li que hemos pulsado
      } 
    }
  }
  else if (event.target.className === "bajar") // Hacemos un bucle para ver si presionamos el botón de bajar
  {
    for (let i = 0; i <= li.length; i++) // En esta línea y la siguiente comprobamos qué li pulsamos
    {
      if (event.target.parentNode === li[i])
      {
        if (li[i + 1] === undefined) // Si se está presionando sobre el último li 
        {
          ul.insertBefore(li[i], li[0]); // Lo cambiamos al primero
        }
        else
        {
          ul.insertBefore(li[i + 1], li[i]); // Si no, bajamos el li que hemos pulsado
        }
      } 
    }
  }
}

 function MostrarOcultarLista(){
  // Muestra u oculta la información de las cosas que son violeta (listDiv)
  if (ul.style.display === "none") // Un bucle que cuando no muestre la información
    {
      ul.style.display = "block"; // Muestre la información
      toggleList.innerHTML = "Ocultar lista"; // Y que el botón ponga que oculte la lista 
    }
      else // Y cuando no
    {
      ul.style.display = "none"; // No muestre la información
      toggleList.innerHTML = "Mostrar lista"; // Y que el botón ponga que muestre la lista
    }
 }

 function CambiarTextoLista(){
  //Modifica  el texto de la lista (descriptionP) con el valor del input (descriptionInput).
  // Inicialmente COSAS QUE SON VIOLETA
  const P = document.createElement("p"); // Creamos un párrafo y le asignamos el nombre de P
  P.setAttribute("class", "description"); // Le ponemos un atributo clase description
  P.textContent = descriptionInput.value; // Retorna el contenido del texto de P, que es el que 
  listDiv.replaceChild(P, descriptionP); // Lo reemplazamos 
 }

 function AñadirElemento(){
  //Añade un nuevo elemento a la lista con el valor del input (addItemInput). 
  //Recuerda que el elemento tendrá que tener sus botones de subir, bajar y borrar.
  let li = document.createElement("li"); // Crea un elemento li
  li.textContent = input.value; // Coge el valor del input
  if (input.value === "") // Si está vacío no coge el valor del input
  {
    info.innerHTML = "No puedes dejar ese campo vacío"; // Aquí le indica que no lo puede dejar vacío en un div que he creado especialmente para ello
  }
  else // Si no está vacío coge el valor del input
  {
    ul.appendChild(li); // Unimos el li al ul
    attachListItemButtons(li); // Le añadimos los botones
    li.setAttribute("id", "li"); // Le ponemos de atributo el id de "li" para que lo podamos usar arriba
    info.innerHTML = ""; // Quitamos el texto
  }
}