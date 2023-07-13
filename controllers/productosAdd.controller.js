import { jsonServerManager } from "../service/jsonServer-Manager.js";

const formulario = document.querySelector("[form-productos]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nombreProducto = document.querySelector("[data-nombreProducto]").value;
  const precioProducto = document.querySelector("[data-precioProducto]").value;
  const categoriaProducto = document.querySelector("[data-categoriaProducto]").value;
  const descripcionProducto = document.querySelector("[data-descripcionProducto]").value;
  const rutaImg = document.querySelector("[data-imagen]").value;
  const nombreImg = rutaImg.split("\\");
  const imagenProducto ="assets\\"  +  nombreImg[2];  
  

  jsonServerManager
    .crearProduco(nombreProducto, precioProducto, categoriaProducto, descripcionProducto,imagenProducto)
    .then(() => {
        window.location.href = "../screens/index-admin.html";
    })
    .catch((err) => console.log(err));
}
);
