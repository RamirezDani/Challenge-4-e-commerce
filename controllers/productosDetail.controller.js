//Es el listener del hiperLink hacia la pagina de detail
function VerProductoHiperlink(inicial,final) {

    //var cont = 5;
    window.addEventListener("load", (evento) => {

        //evento.preventDefault();

        for (var i = inicial; i < final+1; i++) {

            let btn_position = "link_detail" + i;
            let id_position = "#id" + i + ".menu__linea1__id";
            const link_detail = document.getElementById(btn_position);

          /*   if (link_detail == null) {
                location.reload();
            }else{ */
                link_detail &&
                link_detail.addEventListener("click", (evento) => {
                    //console.log("PASO");                    
                    const id_product = document.querySelector(id_position);
                    localStorage.setItem("id_product", id_product.innerHTML);
                    window.location.href = "screens/productos-detalle.html";
                }
                );
            /* } */
            
        }
    }
    );
}

VerProductoHiperlink(0,17);
//VerProductoHiperlink(6,11);