const apiURL = "https:62a8f315ec36bf40bdb0cdde.mockapi.io/cancion";
// CRUD

// VARIABLES
let newNombreCancion = document.getElementById("cancionnombre");
let newCancionPrecio = document.getElementById("cancionprecio")
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
    "precio":newCancionPrecio.value,
    "genero":newSeccionGenero.value,
  };
  return newCancion;
  
}
async function posteoCancion(newCancion) {
  const response = await fetch(apiURL, {
    method: "POST",
    body: JSON.stringify(newCancion),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();

  console.log(data);
  return data;
}
function btnCreatec() {
  let cancion = crearNuevaCancion();

 
  posteoCancion(cancion).then((response) => {
    console.log(response);
  });
  clearForm();
}

// CARGAR CANCIONES
function cargarCanciones() {
  let canciones = getcanciones();
  canciones.then((response) => {
   response.map((cancion) => {
  
    let dato = `
    <!-- card -->
    <div class="crud-card-body">
        <div class="crud-img-conteiner">
            <img class="crud-card-img" id="card-portada-Helloween"
                src="${cancion.url}" alt="portada">
        </div>
        <div class="crud-card-text">
            <h4 id='card-titulo-Helloween'>${cancion.nombre}</h4>
            <p>${cancion.autor}</p>
             <p class="bi bi-currency-dollar" id="precio-Helloween"> ${cancion.precio}</p>
            <button class="crud-card-btn"
                onclick="CapturarDatos('card-titulo-Helloween' , 'card-portada-Helloween', 'precio-Helloween')">
                <span class="add-to-cart">Agregar al carrito</span>
                <span class="added">Agregado</span>
                <i class="fas fa-shopping-cart"></i>
                <i class="fas fa-box"></i></button>
        </div>
    </div>
    <!-- card  -->`
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
// funciones de usuarios
//LOGIN Y REGISTRO

const mockApiURLUser = "https://62924c39cd0c91932b7055c5.mockapi.io/login/User";
let email = document.getElementById("email");
let password = document.getElementById("password");
let newname = document.getElementById("newname");
let newlastname = document.getElementById("newlastname");
let newedad = document.getElementById("newedad");
let newemail = document.getElementById("newemail");
let newpassword = document.getElementById("newpassword");
let newpasswordconf = document.getElementById("newpasswordconf");

//Obtener Usuario

async function getusers() {
    const response = await fetch(mockApiURLUser);
    let data = await response.json();
    return data;
}

function modallogin() {
    let newmodalbody = document.createElement("h4");
    newmodalbody.className = "modalregistroh4";
    newmodalbody.innerHTML = "&#10004 - Ingreso correcto";
    document.getElementById("container2").append(newmodalbody);
    return newmodal;
}

function modalloginmal() {
    let newmodalbody = document.createElement("h4");
    newmodalbody.className = "modalregistroh4";
    newmodalbody.innerHTML = "X - Ingreso incorrecto";
    document.getElementById("container2").append(newmodalbody);
    return newmodal;
}

function getdata() {
    let usuarios = getusers();
    let contador1 = 0;
    let contador2 = 0;
    usuarios.then((response) => {
        response.map((usuario) => {
            contador1++;
            if (email.value == usuario.email && password.value == usuario.password) {
               alert("contraseña incorrecta")
                bandera = true;
            } else {
                contador2++;
            }
        });
        if (contador1 == contador2) {
           alert("ingreso exitoso")
        }
        email.value = "";
        password.value = "";
    });
}

//Crear Usuario

function modalregistro() {
    let newmodalbody = document.createElement("h4");
    newmodalbody.className = "modalregistroh4";
    newmodalbody.innerHTML = "&#10004 - Registro correcto";
    document.getElementById("container1").append(newmodalbody);
    return newmodal;
}

function modalregistromal() {
    let newmodalbody = document.createElement("h4");
    newmodalbody.className = "modalregistroh4";
    newmodalbody.innerHTML = "X - Contraseña incorrecta";
    document.getElementById("container1").append(newmodalbody);
    return newmodal;
}

function newObjUser() {
    let newUser = {
        name: newname.value,
        lastname: newlastname.value,
        email: newemail.value,
        password: newpassword.value,
    };
    return newUser;
}

async function postUser(newUser) {
    const response = await fetch(mockApiURLUser, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    }).then((response) => response.json());
    return response;
}

function btnCreate() {
  let usuarios = getusers();
  let newUser = newObjUser();
  let passwordconf = newpasswordconf.value;
  let email1 = newemail.value;
  let contador1 = 0;
  let contador2 = 0;

  usuarios.then((response) => {
      response.map((usuario) => {
          contador1++;
          if (email1 == usuario.email) {
              alert('Email ya registrado')
          } else {
              contador2++;
          }
      });
      if (contador1 == contador2) {
          if (newUser.password != passwordconf) {
              alert('Contraseña incorrecta');
          } else {
              postUser(newUser).then(() => {});
              alert("Registro exitoso");
          }
      }
  });
  newname.value = "";
  newlastname.value = "";
  newemail.value = "";
  newpassword.value = "";
  newpasswordconf.value = "";
}

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
