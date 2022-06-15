const apiURL = "https:62a8f315ec36bf40bdb0cdde.mockapi.io/cancion";
// CRUD

// VARIABLES
let newNombreCancion = document.getElementById("cancionnombre");
let newAutor = document.getElementById("cancionautor");
let newCancionURL = document.getElementById("cancionportada");
let newFormSubir = document.getElementById("form-subir");
let newSeccionGenero = document.getElementById("canciongenero")
let contenedorCanciones = document.getElementById("contenedorcanciones");
newFormSubir.addEventListener("click", (e) => {
  e.preventDefault();
});
// // obtener cancion de la api
// async function getCancion() {
//   const response = await fetch(apiURL);
//   let dato = await response.json();
//   return dato;
// }
// RESETEO DE FORMULARIO
function clearForm() {
  newFormSubir.reset();
}
// CREAR OBJETO CANCION NUEVA
function crearNuevaCancion() {
  let newCancion = {
    "nombre":newNombreCancion.value,
    "autor":newAutor.value,
    "url":newCancionURL.value,
    "genero":newSeccionGenero.value,
  };
  return newCancion;
  
}
async function posteoCancion(newCancion) {
  const response = await fetch(apiURL, {
    method: "POST",
    body: JSON.stringify(newCancion.value),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
  .then((response) => response.json())
  .then((json) => console.log(json));

  return response;
}
function btnCreate(){
  let cancion = crearNuevaCancion;
  posteoCancion(cancion)
  clearForm()
}
// CARGAR CANCIONES
function cargarCanciones() {
  let canciones = getcanciones();
  canciones.then((response) => {
   response.map((cancion) => {
    cancion.nombre, cancion.autor, cancion.url,cancion.genero,cancion.id;
    });
  });
}


// TENGO QUE SEGUIR VIENDO ESTO HAY UN ERROR EN LOS NOMBRES O EN LA CARGA ALGO FALTA
//carga inicial



// ABRIR Y CERRAR NAV

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// ABRIR MODAL LOGIN
const boton = document.getElementById("btn");
const form = document.getElementById("login");
boton.addEventListener("click", () => {
  form.classList.toggle("mcollapsed");
});
// ABRIR MODAL REGISTER
const botonr = document.getElementById("btnr");
const formr = document.getElementById("register");
botonr.addEventListener("click", () => {
  formr.classList.toggle("rcollapsed");
});

// MODALES DE CRUD CONTROLS

// ANIMACION DE CARRITO

const cartButtons = document.querySelectorAll(".crud-card-btn");

cartButtons.forEach((button) => {
  button.addEventListener("click", cartClick);
});

function cartClick() {
  let button = this;
  button.classList.add("clicked");
}
// animacion de boton flotante ABRIR MODAL DE SUBIR
const botonSubir = document.getElementById("btnsubir");
const modalSubir = document.getElementById("form-subir");
botonSubir.addEventListener("click",()=>{
  modalSubir.classList.toggle("form-subir-collapsed")
})
//carga inicial
loadUsers();
