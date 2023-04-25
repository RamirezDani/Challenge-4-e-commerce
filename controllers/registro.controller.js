import { jsonServerManager } from "../service/jsonServer-Manager.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const email = document.querySelector("[data-email]").value;
  const pass = document.querySelector("[data-pass]").value; 
  
    jsonServerManager
    .listaUsuarios()
    .then((listaUsuarios) => {           
      for(var usuarioCont in listaUsuarios){
        let usuario = listaUsuarios[usuarioCont];
        if(usuario.email == email){
          //console.log("Existe Usuario") ;
          if(usuario.pass == pass){
            //console.log("Clave corecta") ;
            window.location="index-admin.html";
            break;
          }
        }else{
          window.alert('Datos de autenticación incorrectos');   
          break;       
        } 
      }

    })
    .catch((err) => console.log(err));

}
);
