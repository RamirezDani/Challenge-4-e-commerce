//Lista version general/comprador
import {jsonServerManager} from "../service/jsonServer-Manager.js";

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

const bannerProductos = document.querySelector("[tira-img1]");
export var cont = 0;
//factor es el numero de fotos que se venpor categori
const factor = 6;

jsonServerManager
.listaProductos()
  .then((data) => {    

    const productosPennys = data.filter(function(producto) {
      return producto.categoria === "Maderos";
    }).slice(0, 6); // Limita la cantidad de objetos filtrados a 5;
    
    productosPennys.forEach(({ nombre, precio, id, rutaImg }, index) => {
      cont++;
      const nuevaLinea = crearNuevaLinea(nombre, precio, id, rutaImg, index,newPosition(factor,index,0));
      bannerProductos.appendChild(nuevaLinea);      
      //console.log(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrió un error:" + error));

const bannerRopa = document.querySelector("[tira-img2]");
export var cont2 = 0;

var newPosition = (factor,indice,grupo)=>{
  const result = ((factor*grupo)+indice);
  return result;
};


jsonServerManager
.listaProductos()
  .then((data) => {    

    const productosRopa = data.filter(function(producto) {
      return producto.categoria === "Gorras";
    }).slice(0, 6); // Limita la cantidad de objetos filtrados a 6;
    
    productosRopa.forEach(({ nombre, precio, id, rutaImg }, index) => {
      cont2++;
      const nuevaLinea2 = crearNuevaLinea(nombre, precio, id, rutaImg, index,newPosition(factor,index,1));
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
      const nuevaLinea3 = crearNuevaLinea(nombre, precio, id, rutaImg, index,newPosition(factor,index,2));
      bannerHardware.appendChild(nuevaLinea3);      
      //console.log(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrió un error:" + error));