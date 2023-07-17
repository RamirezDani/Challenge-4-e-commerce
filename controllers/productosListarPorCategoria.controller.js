//Lista version general/comprador
import { jsonServerManager } from "../service/jsonServer-Manager.js";

const crearNuevaLinea = (nombre, precio, id, rutaImg, index, index2) => {
  const linea = document.createElement("div");
  linea.classList.add('menu__linea1__box');
  const contenido = `
  <ul class="menu__linea1__imgTxt">
  <li class="menu__linea1__img">
      <img class="imagen__menu__linea1"src="${rutaImg}">
  </li>
  <li class="menu__linea1__nombre" id="titulo${index}">${nombre}</li>
  <li class="menu__linea1__precio">${precio}</li>
  <li class="menu__linea1__id" id="id${index2}">${id}</li>
  <a class="menu_link_a"><li class="menu__linea__link${index}" id="link_detail${index2}">Ver Producto</li></a>
 
</ul>
      `;

  linea.innerHTML = contenido;
  return linea;
};

const divMaderos = document.querySelector("[tira-img1]");
const divGorras = document.querySelector("[tira-img2]");
const divHardware = document.querySelector("[tira-img3]");
const numeroElementos = 6;

var newPosition = (factor, indice, grupo) => {
  const result = ((factor * grupo) + indice);
  return result;
};

function listenerHiperlink(link_detail, id) {
  
  link_detail.addEventListener('click', () => {
    localStorage.setItem("id_product", id);
    window.location.href = "screens/productos-detalle.html";
  })
}

function addNeweCard(cantidadElementos, numeroGrupo, categoriaElementos, grupoProd) {

  jsonServerManager
    .listaProductos()
    .then((data) => {

      const productosFiltrados = data.filter(function (producto) {
        return producto.categoria === categoriaElementos;
      }).slice(0, cantidadElementos); // Limita la cantidad de objetos filtrados a 5;

      productosFiltrados.forEach(({ nombre, precio, id, rutaImg }, index) => {
        const nuevaLinea = crearNuevaLinea(nombre, precio, id, rutaImg, index, newPosition(cantidadElementos * (numeroGrupo + 1), index, numeroGrupo));
        grupoProd.appendChild(nuevaLinea);
        const link_detail = document.getElementById(`link_detail${newPosition(cantidadElementos * (numeroGrupo + 1), index, numeroGrupo)}`);
        listenerHiperlink(link_detail,id);
      });
    })
    .catch((error) => alert("Ocurrió un error:" + error));

}


addNeweCard(numeroElementos, 0, "Maderos", divMaderos);
addNeweCard(numeroElementos, 1, "Gorras", divGorras);
addNeweCard(numeroElementos, 2, "Hardware", divHardware);
