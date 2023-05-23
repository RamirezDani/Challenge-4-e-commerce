import { jsonServerManager } from "../service/jsonServer-Manager.js";

function MakeGroupCategory(tagSelector,categoria){

    const input = document.querySelector("["+ tagSelector +"]");

  input.addEventListener('click', (event) => { 
    
    jsonServerManager
      .listaProductos()
      .then((data) => {
        //TODO 1.abrir nueva pagina con los resultados
        var productosEncontradosCategoria = data.filter(function (producto) {
          return producto.categoria.toLowerCase().includes(categoria.toLowerCase());
        })                      

        console.log("ENTRO: " + productosEncontradosCategoria);
        productosEncontradosCategoria.forEach(() => {               
          localStorage.setItem("productosPorCategoria", JSON.stringify(productosEncontradosCategoria) );
        });        
        
        window.location.href="../screens/productos-detalle-categoria.html";

      })
      .catch((error) => alert("Ocurrió un error:" + error));
    

  });

}

MakeGroupCategory("showgroup-patinetas","Maderos");
MakeGroupCategory("showgroup-gorras","Gorras");
MakeGroupCategory("showgroup-hardware","Hardware");


