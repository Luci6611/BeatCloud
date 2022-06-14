
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

// ABRIR MODAL LOGIN
  const boton = document.getElementById("btn");
  const form = document.getElementById("login");
  boton.addEventListener("click",() => {
       form.classList.toggle("mcollapsed");
  });
  // ABRIR MODAL REGISTER
  const botonr = document.getElementById("btnr");
  const formr = document.getElementById("register");
  botonr.addEventListener("click",() => {
    formr.classList.toggle("rcollapsed");
});

// MODALES DE CRUD CONTROLS

// ANIMACION DE CARRITO

const cartButtons = document.querySelectorAll('.crud-card-btn');

cartButtons.forEach(button => {
	button.addEventListener('click', cartClick);
});

function cartClick() {
	let button = this;
	button.classList.add('clicked');
}
// animacion de boton flotante ABRIR MODAL DE SUBIR
const botonSubir = document.getElementById("btnsubir");
const modalSubir = document.getElementById("form-subir");
botonSubir.addEventListener("click",()=>{
  modalSubir.classList.toggle("form-subir-collapsed")
})