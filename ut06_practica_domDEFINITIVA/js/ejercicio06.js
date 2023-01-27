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
  let ul = document.getElementById("ul");
  /*let ciruelas = document.getElementById("ciruelas");
  let amatista = document.getElementById("amatista");
  let lavanda = document.getElementById("lavanda");*/

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
 }

 function MostrarOcultarLista(){
  // Muestra u oculta la información de las cosas que son violeta (listDiv)
  if (ul.style.display === "block") 
    {
      ul.style.display = "none";
    }
      else
    {
      ul.style.display = "block";
    }
 }

 function CambiarTextoLista(){
  //Modifica  el texto de la lista (descriptionP) con el valor del input (descriptionInput).
  // Inicialmente COSAS QUE SON VIOLETA
  const P = document.createElement("p");
  P.setAttribute("class", "description");
  P.textContent = descriptionInput.value;
  listDiv.replaceChild(P, descriptionP);
 }

 function AñadirElemento(){
  //Añade un nuevo elemento a la lista con el valor del input (addItemInput). 
  //Recuerda que el elemento tendrá que tener sus botones de subir, bajar y borrar.
  const li = document.createElement("li");
  li.textContent = input.value;
  ul.appendChild(li);
  attachListItemButtons(li);
 }


