import { v4 as uuidv4 } from 'uuid';

let myuuid = uuidv4();
//se usan llaves en la función cuando hay returns 
const crearUsuario = (nombre, email) => {
  return fetch("http://localhost:3000/usuarios", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, id: myuuid }),
  });
};

const listaUsuarios = async () => {
  const respuesta = await fetch(`http://localhost:3000/usuarios`);
  return await respuesta.json();
};

const crearProduco = (nombre, precio, categoria, descripcion, rutaImg) => {
  return fetch("http://localhost:3000/productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, precio, categoria, descripcion, rutaImg, id: myuuid }),
  });
};

const eliminarProducto = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`, {
    method: "DELETE",
  });
};

const listaProductos = () =>
  fetch(`http://localhost:3000/productos/`).then((respuesta) => respuesta.json());
 
const listarUnProducto = (id) => 
  fetch(`http://localhost:3000/productos/${id}`).then((respuesta) => respuesta.json());

const actualizarProducto = async (nombre,precio,categoria,descripcion,rutaImg,id) => {
  try {
    const respuesta = await fetch(`http://localhost:3000/productos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, precio, categoria, descripcion, rutaImg }),
    });
    return respuesta;
  } catch (err) {
    return console.log(err);
  }
};
  
  export const jsonServerManager = {
    crearUsuario,
    listaUsuarios,
    crearProduco,
    eliminarProducto,
    listaProductos,
    listarUnProducto,
    actualizarProducto
  };
  