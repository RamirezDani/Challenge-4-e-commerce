import { jsonServerManager } from "../service/jsonServer-Manager.js";
//Carga los valores del JSON para mostrea una descripcion de los productos
const id_product = localStorage.getItem('id_product') || [];
localStorage.clear();

const crearNuevaDescripcion = (nombre, precio, descripcion, categoria) => {
    const linea = document.createElement("div");
    //linea.classList.add('menu__descripcion__producto');
    linea.classList.add('menu__grupo__detalle');
    const contenido = `
                        <ul class="info__producto">
                            <li class="nombre__producto">${nombre}</li>
                            <li class="precio__producto">${precio}</li>
                            <li class="descripcion__producto__encabezado"> Descripción</li>
                            <li class="descripcion__producto">${descripcion}</li>
                            <li class="descripcion__producto__encabezado"> Categorías:</li>
                            <li class="categoria__producto">${categoria}</li>
                        </ul>

                        <div class="formulario__desplegable" >
                           
                            <div class="menu__desplegable">

                                <H1 class="talla__titulo">Talla/Medida:</H1>
                                <select class="popup__medida" id="popup__medida">
                                    <option disabled selected>Selecciona una opción</option>
                                    <option value="opcion2">Opción 1</option>
                                    <option value="opcion3">Opción 2</option>
                                </select>
                            </div>

                            <div class="menu__desplegable">
                                <H1 class="cantidad__titulo">Cantidad:</H1>
                                <select class="popup__cantidad" id="popup__cantidad">
                                    <option disabled selected>Selecciona una opción</option>
                                    <option value="opcion2">1 Unidad</option>
                                    <option value="opcion3">2 Unidades</option>
                                </select>
                            </div>
                            <input class="boton__agregarCarrito" type="submit" value="Agregar al carrito">

                        </div>
        `;

    linea.innerHTML = contenido;
    return linea;
};

const CargaImagen = (rutaImg) => {
    //console.log(rutaImg);
    const linea = document.createElement("img");
    linea.classList.add('imagen__producto');
    linea.src = rutaImg    
    return linea;
}
//para imprimir dinamicamente desde JS se debe usar querySelector con el atributo externo de la etiqueta
//const menuDescripcionProductos = document.querySelector("[menu_grupo_detalle]");
const menuDescripcionProductos = document.querySelector("[menu-detalle-producto]");
const marcoImagen = document.querySelector("[marco_imagen]");
window.addEventListener("load", (evento) => {
    evento.preventDefault();

    jsonServerManager
        .listarUnProducto(id_product)
        .then((data) => {
            const nuevaLinea = crearNuevaDescripcion(data.nombre, data.precio, data.descripcion, data.categoria);
            menuDescripcionProductos.appendChild(nuevaLinea);
            const cargaImg = CargaImagen(data.rutaImg);
            marcoImagen.appendChild(cargaImg)

        })
        .catch((error) => alert(error));
}
);


