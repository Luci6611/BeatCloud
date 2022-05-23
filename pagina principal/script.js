
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  const boton = document.getElementById("btn");
  const form = document.getElementById("login");
  boton.addEventListener("click",() => {
       form.classList.toggle("mcollapsed");
  });
  
