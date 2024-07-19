import { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";
import { notify_valido, notify_warning, notify_warning_fijo } from "./Alertas";
import { toast } from "react-toastify";


// modal se usa en gestion ciclo para las tres tablas
// como sede, categoria  y area
const ModalNuevaSAC = ({ modalOpen, handleCloseModal, tabla }) => {

    const [ nombre, setnombre]=useState('');
    const handleChange = (event) => {
      setnombre(event.target.value);
    };
    const  url_sedes="/sede";
    const  url_categoria="";
    const url_area="/area";

    function retornarUrl(url){
      if(url === "sede"){
        return "sede"
      }
      if(url === "area"){
        return "area"
      }
      if(url === "sede"){
        return "sede"
      }
    }
   async function fun_Guardar() {
     if (nombre.length === 0) {
      notify_warning("Campos vacios ")
      return ;
      // notify_warning_fijo("eror fijo");
     }

     let url= retornarUrl(tabla);
     try {
       const response = await fetch("http://127.0.0.1:8000/api/"+url, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({ nombre: nombre }),
       });
       console.log(response);
       if (response.ok) {
         const data = await response.json();
         console.log(data);

         // Verificamos si el StatusCode es 200
         if (data.StatusCode === 200) {
           toast.success("¡La acción se completó con éxito!");
           notify_valido("Se resgitro la informacion correctamente")
           // La solicitud fue exitosa y el servidor devolvió los datos correctamente
           // Aquí puedes hacer lo que necesites con los datos recibidos, por ejemplo:
           // Actualizar el estado del componente con los datos recibidos
         } else {
          notify_warning("Ocurrio un error en el proceso")
           console.error("Error en la respuesta del servidor:", data.message);
           // Aquí puedes manejar cualquier error que el servidor haya devuelto
         }
       } else {
         console.error(
           "Error en la respuesta del servidor:",
           response.statusText
         );
         // Aquí puedes manejar cualquier error de red o de la solicitud
       }
       // Aquí puedes manejar la respuesta, redireccionar, mostrar mensajes, etc.
     } catch (error) {
      notify_warning("Ocurrio un error en el proceso")
       console.error("Error:", error);

       // Aquí puedes manejar los errores, mostrar mensajes, etc.
     }

     // notify_valido("hso")
   }
    useEffect(()=>{
      
    })
    return (
      // modal-top sirve para qeu el boton no este arriba 
      <div className={`modal   fade ${modalOpen ? 'show' : ''}`} id="modalTo" tabIndex="-1" style={{ display: modalOpen ? 'block' : 'none' }}>
        {/* Esta clase  centra el modal x  y  modal-dialog-centered    */}
        <div className="modal-dialog    border-bottom  border-3 border-primary rounded-bottom ">
          <div className="modal-content">
          <div className="modal-header ">
            <h5 className="modal-title" id="exampleModalLabel4">Nuevo  Registro </h5>
            {/* <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close" /> */}
            <button type="button"  className="btn btn-icon btn-label-primary btn-sm" onClick={handleCloseModal} aria-label="Close" >
            <i className='bx bx-x'></i>
            </button>
            {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /> */}
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col mb-3">
                <label htmlFor="nameExLarge" className="form-label">Name</label>
                <input type="text"   value={nombre}    onChange={handleChange} id="nameExLarge" className="form-control" placeholder="Enter Name" />
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-label-secondary" onClick={handleCloseModal} data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={fun_Guardar}>Save changes</button>
          </div>
          </div>
        </div>
      </div>
    );
}


export default ModalNuevaSAC;