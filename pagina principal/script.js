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
botonSubir.addEventListener("click", () => {
  modalSubir.classList.toggle("form-subir-collapsed");
});

// CRUD
const mockApiURL = "https://62a8f315ec36bf40bdb0cdde.mockapi.io/";
// VARIABLES
let newNombreCancion = document.getElementById("cancionnombre");
let newAutor = document.getElementById("cancionautor");
let newCancionURL = document.getElementById("cancionportada");
let newFormSubir = document.getElementById("form-subir");
let contentedorCanciones = document.getElementById("contenedorcanciones");
newFormSubir.addEventListener("click", (e) => {
  e.preventDefault();
});
// RESETEO DE FORMULARIO
function clearForm() {
  newFormSubir.reset();
}
// CREAR CANCION NUEVA
function crearNuevaCancion() {
  let nuevaCancion = {
    nombre: newNombreCancion.value,
    autor: newAutor,
    portada: newCancionURL.value,
  };
  return nuevaCancion;
}
async function postUser(user) {
  const response = await fetch(mockApiURL, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

  return response;
}
