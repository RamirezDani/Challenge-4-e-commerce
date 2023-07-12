//Es el listener del hiperLink hacia la pagina de detail
var cont = 17;

window.addEventListener("load", (evento) => {

    evento.preventDefault();         

    for(var i=0;i<cont;i++){
               
        let btn_position = "link_detail"+i;
        let id_position = "#id"+i+".menu__linea1__id";
        const link_detail = document.getElementById(btn_position);        
               
        link_detail.addEventListener("click", (evento) => {    
            evento.preventDefault();                       
            const id_product = document.querySelector(id_position);                  
            localStorage.setItem("id_product",id_product.innerHTML);            
            console.log("PASO");
            window.location.href="screens/inicio-sesion.html";
        }
        ); 
        
        
    }
}
);


