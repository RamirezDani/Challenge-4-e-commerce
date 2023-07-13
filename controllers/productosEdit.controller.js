import {cont} from "../controllers/productosListar.controller.js"
//Es el listener de los botones de editar y abre la pagina de editar producto

window.addEventListener("load", (evento) => {
    
    //console.log("cont: " + cont)

   /*  if (cont == 0) {
        location.reload();
    }else{ */

        for(var i=0;i<cont;i++){
        
            let btn_position = "btn_edit_prod" + i;
            let id_position = "#id"+i+".menu__linea1__id";
            const btnEdit = document.getElementById(btn_position);
    
            btnEdit.addEventListener("click", (evento) => {    
                evento.preventDefault();                       
                const id_product = document.querySelector(id_position);                  
                localStorage.setItem("id_product",id_product.innerHTML);
                console.log(id_product);
                window.location.href="../screens/productos-editar.html";
            }
            );
        }
    /* } */

    
}
);


