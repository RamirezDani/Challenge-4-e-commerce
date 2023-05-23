import { jsonServerManager } from "../service/jsonServer-Manager.js";

//const  input = document.getElementsByClassName("search");
const input = document.querySelector("[in-search]");

input.addEventListener('keydown', (event) => {

  if (event.keyCode === 13) {

    const valor = input.value;

    jsonServerManager
      .listaProductos()
      .then((data) => {
        //TODO 1.abrir nueva pagina con los resultados
        var productosEncontradosNombre = data.filter(function (producto) {
          return producto.nombre.toLowerCase().includes(valor.toLowerCase());
        })

        var productosEncontradosCategoria = data.filter(function (producto) {
          return producto.categoria.toLowerCase().includes(valor.toLowerCase());
        })                      

        productosEncontradosNombre.forEach(() => {                  
          localStorage.setItem("productosEncontradosNombre", JSON.stringify(productosEncontradosNombre) );
        });

        productosEncontradosCategoria.forEach(() => {               
          localStorage.setItem("productosEncontradosCategoria", JSON.stringify(productosEncontradosCategoria) );
        });        
        
        window.location.href="../screens/search-products.html";

      })
      .catch((error) => alert("Ocurrió un error:" + error));
  }

});



