let tablaCuerpo = document.getElementById("tablaCuerpo");


const CapturarDatos = (titulo, portada) => {
  const titulo1 = document.getElementById(titulo);
  const cardPortada = document.getElementById(portada);
  let autor = titulo1.nextElementSibling.innerHTML;
  let imagenPortada = cardPortada.src;
  let tituloCancion = titulo1.innerText;
  let datos = { titulo: tituloCancion, autor: autor, Portada: imagenPortada };
  /*   JSON.stringify(localStorage.getItem("datos",datos)); */
  LlenarCarrito(datos);
};

const LlenarCarrito = (datos) => {
  tablaCuerpo.innerHTML = `
        <tr>
        <th><img src="${datos.Portada}" alt="portada" ></th>
        <th>${datos.autor}</th>
        <th>${datos.titulo}</th>
      </tr>`;

};

const VaciarCarrito = () => {
    tablaCuerpo.innerHTML ='';
};