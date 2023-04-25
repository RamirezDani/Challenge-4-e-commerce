import {jsonServerManager} from "../service/jsonServer-Manager.js";

const crearNuevaLinea = (nombre, precio, id, rutaImg, index) => {
  const linea = document.createElement("div");
  linea.classList.add('menu__linea1__box');
  const contenido = `
  <ul class="menu__linea1__imgTxt">
  <li class="menu__linea1__img">
      <img class="imagen__menu__linea1"src="${rutaImg}">
  </li>
  <li class="menu__linea1__nombre" id="titulo${index}">${nombre}</li>
  <li class="menu__linea1__precio">${precio}</li>
  <li class="menu__linea1__id" id="id${index}">${id}</li>
  <a href="https://github.com/RamirezDani" target="_blank"><li class="menu__linea1__link">Ver Producto</li></a>
 
</ul>
      `;

  linea.innerHTML = contenido;
  return linea;
};

const bannerProductos = document.querySelector("[tira-img1]");
export var cont = 0;

jsonServerManager
.listaProductos()
  .then((data) => {    

    const productosPennys = data.filter(function(producto) {
      return producto.categoria === "Maderos";
    }).slice(0, 6); // Limita la cantidad de objetos filtrados a 5;
    
    productosPennys.forEach(({ nombre, precio, id, rutaImg }, index) => {
      cont++;
      const nuevaLinea = crearNuevaLinea(nombre, precio, id, rutaImg, index);
      bannerProductos.appendChild(nuevaLinea);      
      //console.log(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrió un error:" + error));

const bannerRopa = document.querySelector("[tira-img2]");
export var cont2 = 0;

jsonServerManager
.listaProductos()
  .then((data) => {    

    const productosRopa = data.filter(function(producto) {
      return producto.categoria === "Gorras";
    }).slice(0, 6); // Limita la cantidad de objetos filtrados a 6;
    
    productosRopa.forEach(({ nombre, precio, id, rutaImg }, index) => {
      cont2++;
      const nuevaLinea2 = crearNuevaLinea(nombre, precio, id, rutaImg, index);
      bannerRopa.appendChild(nuevaLinea2);      
      //console.log(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrió un error:" + error));

const bannerHardware = document.querySelector("[tira-img3]");
export var cont3 = 0;

jsonServerManager
.listaProductos()
  .then((data) => {    

    const productosHardware = data.filter(function(producto) {
      return producto.categoria === "Hardware";
    }).slice(0, 6); // Limita la cantidad de objetos filtrados a 6;
    
    productosHardware.forEach(({ nombre, precio, id, rutaImg }, index) => {
      cont3++;
      const nuevaLinea3 = crearNuevaLinea(nombre, precio, id, rutaImg, index);
      bannerHardware.appendChild(nuevaLinea3);      
      //console.log(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrió un error:" + error));