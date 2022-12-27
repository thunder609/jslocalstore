// //backticks
// import { clienteServices } from "../service/cliente-service.js";
// console.log(clienteServices)
// const crearNuevaLinea = (nombre, email) => {
//     const linea = document.createElement("tr");
   
//     const contenido = `
//   <td class="td" data-td>
//     ${nombre}
//   </td>
//   <td>${email}</td>
//   <td>
//     <ul class="table__button-control">
//       <li>
//         <a
//           href="../screens/editar_cliente.html"
//           class="simple-button simple-button--edit"
//         >
//           Editar
//         </a>
//       </li>
//       <li>
//         <button class="simple-button simple-button--delete" type="button">
//           Eliminar
//         </button>
//       </li>
//     </ul>
//   </td>
//   `;
//   linea.innerHTML = contenido;
//   return linea;
//   };
//   const table = document.querySelector("[data-table]");
  
//   // abrir http  (metodo,url)
//   //CRUD
//   // CREATE   POST
//   // READ    GET
//   // UPDATE  PUT /PATCH
//   // DELETE DELETE


// //   clienteServices.listaClientes().then((data) => {
// //     data.forEach((perfil) => {
// //         const nuevaLinea = crearNuevaLinea(perfil.nombre,perfil.email);
// //         table.appendChild(nuevaLinea);
    
// //     })
// // })    
// //     .catch((error)=> alert("error al procesar"));

// clienteServices
//   .listaClientes()
//   .then((data) => {
//     data.forEach((perfil) => {
//       const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
//       table.appendChild(nuevaLinea);
//     });
//   })
//   .catch((error) => alert("Ocurrió un error"));
import { clienteServices } from "../service/cliente-service.js";

console.log(clienteServices); 
   
//backticks
const crearNuevaLinea = (nombre, email,id) => {
    const linea = document.createElement("tr");
    console.log(id)
    const contenido = `
      <td class="td" data-td>
        ${nombre}
      </td>
      <td>${email}</td>
      <td>
        <ul class="table__button-control">
          <li>
            <a
            href="../screens/editar_cliente.html?id=${id}"
            class="simple-button simple-button--edit"
            >
              Editar
            </a>
          </li>
          <li>
            <button class="simple-button simple-button--delete" type="button" id="${id}">
              Eliminar
            </button>
          </li>
        </ul>
      </td>
    `;
    linea.innerHTML = contenido;
    const btn = linea.querySelector("button");
    btn.addEventListener("click",()=>{
        const id=btn.id;
        clienteServices.eliminarCliente(id).then((respuesta)=>{
        console.log("chicha"+respuesta);
    
    }).catch((err) => alert("Ocurrió un error"));
});

    return linea;
};

  
  const table = document.querySelector("[data-table]");
  
  clienteServices
    .listaClientes()
    .then((data) => {
      data.forEach(({nombre,email,id}) => {
        const nuevaLinea = crearNuevaLinea(nombre,email,id)
        table.appendChild(nuevaLinea)
    });
    })
    .catch((error) => alert("Ocurrió un error"))