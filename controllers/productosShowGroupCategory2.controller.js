
const crearNuevaLinea = (nombre, precio, id, rutaImg, index) => {
  const linea = document.createElement("div");
  linea.classList.add('menu__linea1__box');
  const contenido = `
  <ul class="menu__linea1__imgTxt">
  <li class="menu__linea1__img">
      <img class="imagen__menu__linea1"src="..\\${rutaImg}">
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

const bannerCategoriaEncontrados = document.querySelector("[tira-img-categoria]");
var productosEncontradosCategoriaList = JSON.parse(localStorage.getItem('productosPorCategoria')) || []; 

productosEncontradosCategoriaList.forEach(({ nombre, precio, id, rutaImg }, index) => {          
  const nuevaLinea2 = crearNuevaLinea(nombre, precio, id, rutaImg, index);  
  bannerCategoriaEncontrados.appendChild(nuevaLinea2); 
});



localStorage.clear();


