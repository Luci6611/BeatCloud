function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

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
                modallogin();
                bandera = true;
            } else {
                contador2++;
            }
        });
        if (contador1 == contador2) {
            modalloginmal();
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
    let newUser = newObjUser();
    let passwordconf = newpasswordconf.value;
    console.debug(newUser.password);
    console.debug(passwordconf);
    if (newUser.password != passwordconf) {
        modalregistromal();
    } else {
        postUser(newUser).then(() => {});
        modalregistro();
    }
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
