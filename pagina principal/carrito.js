let tablaCuerpo = document.getElementById("tablaCuerpo");
let datos = [];


/* Funcion para capturar los datos de las cards */

const CapturarDatos = (titulo, portada, precio1) => {

  const titulo1 = document.getElementById(titulo);
  const cardPortada = document.getElementById(portada);
  let autor = titulo1.nextElementSibling.innerHTML;
  let imagenPortada = cardPortada.src;
  let tituloCancion = titulo1.innerText;
  let precio = document.getElementById(precio1).innerText;
  datos.push({ portada: imagenPortada, autor: autor, titulo: tituloCancion, precios: precio });
  console.table(datos);
  LlenarCarrito();

};

/* Funcion para llenar el carrito */

const LlenarCarrito = () => {

  let row = document.createElement("tr");
  datos.map(dato => {

    let datosCarrito = `
        <th><img src="${dato.portada}" alt="portada" ></th>
        <th>${dato.autor}</th>
        <th>${dato.titulo}</th>
        <th>$ ${dato.precios}</th>
      `;
    let carrito = tablaCuerpo.appendChild(row);
    carrito.innerHTML = datosCarrito;
  });


};

/* Funcion para vaciar el carrito */

const VaciarCarrito = () => {
  tablaCuerpo.innerHTML = '';
};