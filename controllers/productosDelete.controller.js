import {jsonServerManager} from "../service/jsonServer-Manager.js";
import {cont} from "../controllers/productosListar.controller.js"

//El evento se activa cuando un objeto HTML (como una página web o una imagen) se carga completamente.
//Trae la cantidad de productos desde la funcion de listarProductos

window.addEventListener("load", (evento) => {

    evento.preventDefault();     
    
    for(var i=0;i<cont;i++){
        
        let btn_position = "btn_del_prod" + i;
        let id_position = "#id"+i+".menu__linea1__id";
        const btnDelete = document.getElementById(btn_position);

        btnDelete.addEventListener("click", (evento) => {    
            evento.preventDefault();                       
            const id_productos = document.querySelector(id_position);          
            jsonServerManager.eliminarProducto(id_productos.innerHTML);            
            //console.log(id_productos.innerHTML);
        }
        );
    }
}
);