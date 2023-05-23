//Imprime en search-products.html
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

//Imprime en search-products.html
const crearNuevaLineaNoSeEncuentra = () => {
  const linea = document.createElement("div");
  linea.classList.add('menu__linea1__No_Se_Encuentra');
  const contenido = `<h2>Nada encontrado</h2>`;
  linea.innerHTML = contenido;
  return linea;
};

const bannerProductosEncontrados = document.querySelector("[tira-img-nombre]");
var productosEncontradosNombreList = JSON.parse(localStorage.getItem('productosEncontradosNombre')) || []; 
//console.log(productosEncontradosNombreList);
const bannerCategoriaEncontrados = document.querySelector("[tira-img-categoria]");
var productosEncontradosCategoriaList = JSON.parse(localStorage.getItem('productosEncontradosCategoria')) || []; 
//console.log(productosEncontradosNombreList);

if(productosEncontradosNombreList.length){

  productosEncontradosNombreList.forEach(({ nombre, precio, id, rutaImg }, index) => {                 
    const nuevaLinea = crearNuevaLinea(nombre, precio, id, rutaImg, index);
    bannerProductosEncontrados.appendChild(nuevaLinea); 
  });

}else{
  const lineaNoSeEncontraron = crearNuevaLineaNoSeEncuentra();
  bannerProductosEncontrados.appendChild(lineaNoSeEncontraron); 
}


if(productosEncontradosCategoriaList.length){

  productosEncontradosCategoriaList.forEach(({ nombre, precio, id, rutaImg }, index) => {          

    const nuevaLinea2 = crearNuevaLinea(nombre, precio, id, rutaImg, index);  
    bannerCategoriaEncontrados.appendChild(nuevaLinea2); 
  });

}else{
  const lineaNoSeEncontraron = crearNuevaLineaNoSeEncuentra();
  bannerCategoriaEncontrados.appendChild(lineaNoSeEncontraron); 
}

//localStorage.clear();


