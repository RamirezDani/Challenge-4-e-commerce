import { jsonServerManager } from "../service/jsonServer-Manager.js";
 //Carga los valores del JSON en el form de editar
const id_product = localStorage.getItem('id_product') || []; 
var imagenRutaProducto = ""; 
localStorage.clear();

window.addEventListener("load", (evento) => {
  evento.preventDefault();

  const nombreProducto = document.querySelector("[data-nombreProducto]");
  const precioProducto = document.querySelector("[data-precioProducto]");
  const categoriaProducto = document.querySelector("[data-categoriaProducto]");
  const descripcionProducto = document.querySelector("[data-descripcionProducto]");  
  
  
jsonServerManager
    .listarUnProducto(id_product)
    .then((data) => {
      nombreProducto.value = data.nombre;
      precioProducto.value = data.precio;
      categoriaProducto.value = data.categoria;
      descripcionProducto.value = data.descripcion;
      imagenRutaProducto = data.rutaImg;      
    })
    .catch((error) => alert(error));
}
);


const btnEditOk = document.querySelector("[form-prodedit]");

btnEditOk.addEventListener("submit", (evento) => {    
  evento.preventDefault();
  const nombre = document.querySelector("[data-nombreProducto]").value;
  const precio = document.querySelector("[data-precioProducto]").value;
  const categoria = document.querySelector("[data-categoriaProducto]").value;
  const descripcion = document.querySelector("[data-descripcionProducto]").value;
  var rutaImg = imagenRutaProducto; 
  const imagenProducto = document.querySelector("[data-imagen]").value;

  if(imagenProducto!=""){    
    const nombreImg = imagenProducto.split("\\");
    rutaImg ="..\\assets\\"  +  nombreImg[2];
  }
  
jsonServerManager
    .actualizarProducto(nombre,precio,categoria,descripcion,rutaImg,id_product)
    .then(() => {    
      //localStorage.clear();
       window.location.href = "../screens/index-admin.html";
    })
    .catch((error) => alert(error));

})
