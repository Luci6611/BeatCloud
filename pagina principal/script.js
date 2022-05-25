
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