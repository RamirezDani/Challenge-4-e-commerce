//Lista vista de edicion
import { jsonServerManager } from "../service/jsonServer-Manager.js";

const crearNuevaLinea = (nombre, precio, id, rutaImg, index) => {
  const linea = document.createElement("div");
  linea.classList.add('menu__linea1__box');
  const contenido = `
  <ul class="menu__linea1__imgTxt">
  <li class="menu__linea1__img">
      <img class="imagen__menu__linea1"src="../${rutaImg}">
  </li>
  <li class="menu__linea1__nombre" id="titulo${index}">${nombre}</li>
  <li class="menu__linea1__precio">${precio}</li>
  <li class="menu__linea1__id" id="id${index}">${id}</li>

  <div class="groupProductEdit">
      
          <button class="btn__editar1"  id="btn_edit_prod${index}">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                  fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path
                      d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
              </svg>
          </button>
                               

      <button class="btn__eliminar1" id="btn_del_prod${index}">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-trash3" viewBox="0 0 16 16">
              <path
                  d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
          </svg>
      </button>

  </div>
</ul>
      `;

  linea.innerHTML = contenido;
  return linea;
};

//console.log("cont:" + cont);
function addNewCard(nombre, precio, id, rutaImg, index){

  const bannerProductos = document.querySelector("[tira-img1]");
  const nuevaLinea = crearNuevaLinea(nombre, precio, id, rutaImg, index);
  bannerProductos.appendChild(nuevaLinea);

}

function listenerBtnEdit(index,id) {

  //console.log("cont:" + cont);
  let btn_position = "btn_edit_prod" + index;  
  const btnEdit = document.getElementById(btn_position);

  btnEdit.addEventListener("click", (evento) => {    
    
    localStorage.setItem("id_product", id);
    //console.log(id_product);
    window.location.href = "../screens/productos-editar.html";
  }
  );

}

function listenerBtnDelete(index,id) {

  let btn_position = "btn_del_prod" + index;  
  const btnEdit = document.getElementById(btn_position);

  btnEdit.addEventListener("click", (evento) => {        
    jsonServerManager.eliminarProducto(id);
  }
  );

}

jsonServerManager
  .listaProductos()
  .then((data) => {
    data.forEach(({ nombre, precio, id, rutaImg }, index) => {      
      addNewCard(nombre, precio, id, rutaImg, index);
      listenerBtnEdit(index,id);
      listenerBtnDelete(index,id);
      
    });

  })
  .catch((error) => alert("Ocurrió un error:" + error));