// eslint-disable-next-line no-unused-vars
import React, { useState, useMemo, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import Select from "react-select";
import { createTheme, ThemeProvider } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import {RowRadioButtonsGroup ,FormControlLabelPosition, RadioButtonSucursal}  from "./ComponentesG/Radio.jsx";
const globalTheme = window.templateCustomizer.settings.style;
import { SelectTipoUser } from "./ComponentesG/select";
import { notify_valido, notify_warning, notify_warning_fijo } from "./ComponentesG/Alertas.jsx";
// eslint-disable-next-line no-unused-vars
const styles = {
    control: (provided, state) => ({
        ...provided,
        boxShadow: state.isFocused ? null : null,
        backgroundColor: globalTheme === "light" ? "#FEFFF4" : "#2B2C40",
        color: globalTheme === "light" ? "#2B2C40" : "#FEFFF4",
        minHeight: `29px`,
        height: `29px`,
    }),

    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected
            ? globalTheme === "light"
                ? "#FEFFF4"
                : "#2B2C40"
            : globalTheme === "light"
                ? "#FEFFF4"
                : "#2B2C40",
        color: state.isSelected
            ? "#FF3E1D"
            : globalTheme === "light"
                ? "#2B2C40"
                : "#FEFFF4",
        "&:hover": {
            backgroundColor: "#FF3E1D",
            color: "white",
        },
    }),
    noOptionsMessage: (provided, state) => ({
        ...provided,
        backgroundColor: globalTheme === "light" ? "#fefff4" : "#2B2C40",
        color: globalTheme === "light" ? "#2B2C40" : "#fefff4",
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        height: `29px`,
        padding: `0 6px`,
        color: globalTheme === "light" ? "#2B2C40" : "#FEFFF4",
    }),
    input: (provided, state) => ({
        ...provided,
        color: globalTheme === "light" ? "#2B2C40" : "#FEFFF4",
        fontSize: `0.75rem`,
    }),
    indicatorSeparator: (state) => ({
        display: "none",
    }),
    indicatorsContainer: (provided, state) => ({
        ...provided,
        height: `29px`,
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: globalTheme === "light" ? "#2B2C40" : "#FEFFF4",
    }),
};
const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif', // Cambia "Roboto, sans-serif" por la fuente que prefieras
  },
});
const Usuarios = () => {

  /** Datos Principales */
    const [formData, setFormData] = useState({
      usuarioNombre: "FELIE",
      usuarioApellido: "valdivie",
      usuarioDNI: "1472",
      usuarioDireccion: "chuclcuans",
      usuarioTipo:"1",
      usuarioEstado: "N",
      usuarioSedes:[]
    });
    
    // actualizar valores 
    const handleChange = (event, fieldName) => {
      const { value } = event.target;
      // if( (fieldName === 'usuarioDNI') && (isNaN(value) || value.length > 8 || value.length === 0 ) ){
        if( (fieldName === 'usuarioDNI') && (!/^[0-9]*$/.test(value)  || value.length > 8 ) ){
        // alert("ingrese valores correctos") 
        notify_warning("solo son 8 carateres ")
        return
      }
      setFormData({
        ...formData,
        [fieldName]: value.toUpperCase().trim(),
      });
    };

  /** funciones del select para el tipo user */
    // const [TipoUser, setTipoUser]=useState("")
    const handleChangeTipoUser = ( event) => {
      const { value } = event.target;
      // setTipoUser(value);
      console.log("valor de usuario ", value);
      setFormData({
        ...formData,
        ["usuarioTipo"]: value.trim()
      });
    };

      
    // const tableTheme = useMemo(
    //   () =>
    //     createTheme({
    //       palette: {
    //         mode: globalTheme,
    //         background: {
    //           default: globalTheme === "light" ? "rgb(254,255,244)" : "#2B2C40",
    //         },
    //       },
    //       typography: {
    //         button: {
    //           textTransform: "none",
    //           fontSize: "1.2rem",
    //         },
    //       },
    //     }),
    //   [globalTheme]
    // );
  //   <i class='bx bxs-user'></i>
    const projects = [
      { 
        id: 1,
        nombre: "Miguel del",
        apellido:" Paz paz" ,
        estado:"N",
        iconClass: 'bx bxs-user fa-lg text-primary me-3',
        projectName: 'Angular Project',
        client: 'Albert Cook',
        users: [
          { name: 'Lilian Fuller', avatar: '../../assets/img/avatars/5.png' },
          { name: 'Sophia Wilkerson', avatar: '../../assets/img/avatars/6.png' },
          { name: 'Christina Parker', avatar: '../../assets/img/avatars/7.png' },
        ],
        status: 'Active',
        statusClass: 'badge bg-label-primary me-1',
      },
      {
        id: 2,
        nombre: "Miguel del",
        apellido:" Paz paz" ,
        estado:"N",
        iconClass: 'fab fa-react fa-lg text-info me-3',
        projectName: 'React Project',
        client: 'Barry Hunter',
        users: [
          { name: 'Lilian Fuller', avatar: '../../assets/img/avatars/5.png' },
          { name: 'Sophia Wilkerson', avatar: '../../assets/img/avatars/6.png' },
          { name: 'Christina Parker', avatar: '../../assets/img/avatars/7.png' },
        ],
        status: 'Completed',
        statusClass: 'badge bg-label-success me-1',
      },
      {
        id: 3,
        nombre: "Miguel del",
        apellido:" Paz paz" ,
        estado:"A",
        iconClass: 'fab fa-vuejs fa-lg text-success me-3',
        projectName: 'VueJs Project',
        client: 'Trevor Baker',
        users: [
          { name: 'Lilian Fuller', avatar: '../../assets/img/avatars/5.png' },
          { name: 'Sophia Wilkerson', avatar: '../../assets/img/avatars/6.png' },
          { name: 'Christina Parker', avatar: '../../assets/img/avatars/7.png' },
        ],
        status: 'Scheduled',
        statusClass: 'badge bg-label-info me-1',
      },
      {
          id: 4,
          nombre: "Miguel del",
          apellido:" Paz paz" ,
          estado:"A",
          iconClass: 'fab fa-bootstrap fa-lg text-primary me-3',
          projectName: 'Bootstrap Project',
          client: 'Jerry Milton',
          users: [
            { name: 'Lilian Fuller', avatar: '../../assets/img/avatars/5.png' },
            { name: 'Sophia Wilkerson', avatar: '../../assets/img/avatars/6.png' },
            { name: 'Christina Parker', avatar: '../../assets/img/avatars/7.png' },
          ],
          status: 'Pending',
          statusClass: 'badge bg-label-warning me-1',
        },
        {
          id: 5,
          nombre: "Miguel del",
          apellido:" Paz paz" ,
          estado:"A",
          iconClass: 'fab fa-bootstrap fa-lg text-primary me-3',
          projectName: 'Bootstrap Project',
          client: 'Jerry Milton',
          users: [
            { name: 'Lilian Fuller', avatar: '../../assets/img/avatars/5.png' },
            { name: 'Sophia Wilkerson', avatar: '../../assets/img/avatars/6.png' },
            { name: 'Christina Parker', avatar: '../../assets/img/avatars/7.png' },
          ],
          status: 'Pending',
          statusClass: 'badge bg-label-warning me-1',
        },
        {
          id: 6,
          nombre: "Miguel del",
          apellido:" Paz paz" ,
          estado:"A",
          iconClass: 'fab fa-bootstrap fa-lg text-primary me-3',
          projectName: 'Bootstrap Project',
          client: 'Jerry Milton',
          users: [
            { name: 'Lilian Fuller', avatar: '../../assets/img/avatars/5.png' },
            { name: 'Sophia Wilkerson', avatar: '../../assets/img/avatars/6.png' },
            { name: 'Christina Parker', avatar: '../../assets/img/avatars/7.png' },
          ],
          status: 'Pending',
          statusClass: 'badge bg-label-warning me-1',
        },
    ];
    const containerStyle = {
      height: '400px', // Cambia la altura según sea necesario
      overflowY: 'auto', // Habilita el desplazamiento vertical
    };
  
  
/** funciones para selecioanr las sedes */
  const [selectedOptions, setSelectedOptions] = useState([]);
  //  Controlador de eventos para actualizar las opciones seleccionadas
   const handleChangeSedes = (event) => {
     const { value, checked } = event.target;
    //  const sedeSeleciondas = 
     setSelectedOptions((prevSelectedOptions) => {
      let   sedesSelec = [];
       if (checked) {
         // Si la opción está marcada, agréguela a la lista de opciones seleccionadas
         sedesSelec = [...prevSelectedOptions, value];
         formData["usuarioSedes"]=sedesSelec;
         return  sedesSelec;
       } else {
         // Si la opción no está marcada, elimínela de la lista de opciones seleccionadas
         sedesSelec = prevSelectedOptions.filter((option) => option !== value);
         formData["usuarioSedes"]=sedesSelec;
         return sedesSelec;
       }
     });
    //  formData["usuarioSedes"]=selectedOptions;
   };
/**  Clases para estilar la tabla de usuario */ 
  const clasesEstadoUsuario = {
      classActivo:"badge bg-label-success me-1" ,
      classInactivo:"badge  bg-label-danger me-1"
  }

  /** adad
  *  Funciones para  validar antes de guardar 
  */

  const isFormDataEmpty = Object.values(formData).some(value => value === "");
  function  Guardar(){
    if(formData.usuarioTipo ==="-1" ){
      notify_warning(" selecione el tipo de usuario ") ;return;
    }
    if(formData.usuarioEstado ==="-1"){
      notify_warning(" selecione el estado  de usuario "); return;
    }
    
     
      

    
    console.log(formData);
  }
    return (
      <div>
        <h4 className="text-muted">Usuarios</h4>
  
        <div className="card">
          <div className="card card-action">
            <div className="card-body ">
              <div className="row mb-1">
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="last-name">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="usuarioNombre"
                    className="form-control"
                    name="usuarioNombre"
                    value={formData.usuarioNombre}
                    onChange={(event) => handleChange(event, "usuarioNombre")}
                    placeholder="johndoe"
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="last-name">
                  Apellido
                  </label>
                  <input
                    type="text"
                    id="usuarioApellido"
                    className="form-control"
                    name="usuarioApellido"
                    value={formData.usuarioApellido}
                    onChange={(event) => handleChange(event, "usuarioApellido")}
                    placeholder="johndoe"
                  />
                </div>
              </div>
              <div className="row mb-1">
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="last-name">
                    DNI
                  </label>
                  <input
                    type="number"
                    id="usuarioDNI"
                    className="form-control"
                    name="usuarioDNI"
                    value={formData.usuarioDNI}
                    onChange={(event) => handleChange(event, "usuarioDNI")}
                    placeholder="147895"
                    maxLength={8} 
                  />
                </div>
                {/* <div className="col-sm-6">
                  <label className="form-label" htmlFor="last-name">
                  Vacio
                  </label>
                  <input
                    type="text"
                    id="padreApellido"
                    className="form-control"
                    name="padreApellido"
                    value={formData.padreApellido}
                    onChange={(event) => handleChange(event, "padreApellido")}
                    placeholder="johndoe"
                  />
                </div> */}
                <div className="col-md-3">
                <label className="form-label" htmlFor="last-name">
                  Tipo de usuario
                  </label>
                  {/* <select id="" onChange={(event) => handleChange(event, "usuarioTipo")} value={formData.usuarioTipo} className="form-select form-select m-0">
                      <option value="9999">-- Seleccione --</option>
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                  </select> */}
                  <SelectTipoUser selectedValue={formData.usuarioTipo} onSelect={handleChangeTipoUser} > </SelectTipoUser>
              </div> 
              <div className="col-md-3">
                <label className="form-label" htmlFor="last-name">
                  Activo
                  </label>
                  <select id=""  onChange={(event) => handleChange(event, "usuarioEstado")}  value={formData.usuarioEstado} className="form-select form-select m-0">
                      <option value="-1">-- Seleccione --</option>
                      <option value="Y">Si</option>
                      <option value="N">No</option>
                  </select>
              </div>
              </div>
              <div className="row">
              
                <div className="col-md-6">
                <label className="form-label " htmlFor="last-name">
                  Sucursal
                  </label>
                  <div className="row ">
                  <ThemeProvider theme={theme}>
                    {/* Aquí va el contenido de tu componente */}
                    <RadioButtonSucursal selectedOptions={selectedOptions}  handleChange={handleChangeSedes}/>

                  </ThemeProvider>
                  </div>
                </div>
              </div>
              <div className="row mb-2 justify-content-end ">
                  <div className="col-lg-4 d-flex   justify-content-end ">
                    {/* <Tooltip title="Consultar información" placement="top"> */}
                      <button className="btn btn-sm btn-label-success " id="btn_procesar" disabled={isFormDataEmpty} onClick={Guardar} >
                        <i className="bx bxs-user-rectangle bx-tada bx-flip-horizontal"></i>
                        <span className="spinner-border d-none "  id="btn_procesar_spinner" role="status"  aria-hidden="true" ></span>
                        &nbsp;Gurarda
                      </button>
                    {/* </Tooltip> */}
                    {/* <Tooltip title="Nuevo estudiante" placement="top"> */}
                      <button className="btn btn-sm btn-primary ms-1">
                        <i className="bx bx-cloud-download bx-ms"  id="btn_procesar_icon" ></i>
                        <span  className="spinner-border d-none" id="btn_procesar_spinner" role="status"  aria-hidden="true" ></span>
                        &nbsp; Limpiar 
                      </button>
                    {/* </Tooltip> */}
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="card mt-3">
          <h5 className="card-header"> Usuario </h5>
          <div className="table-responsive text-nowrap " style={containerStyle}>
          <table className="table">
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Estado</th>
            <th>Sucursales</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody className="table-border-bottom-0">
          {projects.map((project) => (
            <tr key={project.id}>
              <td>
                <i className={project.iconClass} />{' '}
                <span className="fw-medium">{project.projectName}</span>
              </td>
              <td>{project.client}</td>
              {/* <td>
                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                  {project.users.map((user, index) => (
                    <li
                      key={index}
                      data-bs-toggle="tooltip"
                      data-popup="tooltip-custom"
                      data-bs-placement="top"
                      className="avatar avatar-xs pull-up"
                      aria-label={user.name}
                      data-bs-original-title={user.name}
                    >
                      <img
                        src={user.avatar}
                        alt="Avatar"
                        className="rounded-circle"
                      />
                    </li>
                  ))}
                </ul>
              </td> */}
               <td>{project.apellido}</td>
              <td>
                {/* <span className={project.statusClass}>{project.status}</span> */}
                <span className={ project.estado=== 'A'? clasesEstadoUsuario.classActivo: clasesEstadoUsuario.classInactivo }>{ project.estado=== 'A'?'Activo': 'Desactivo' }</span>      
  
              </td>
              <td>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn p-0 dropdown-toggle hide-arrow"
                    data-bs-toggle="dropdown"
                  >
                    {/* <i className="bx bx-dots-vertical-rounded" /> */}
                    <span className={project.statusClass}>Sucursal</span>
                   </button>
                  <div className="dropdown-menu">
                      <ul>
                          <li> dsds</li>
                          <li> dsds</li>
                          <li> dsds</li>
                          <li> dsds</li>
                          <li> dsds</li>
                      </ul>
                    {/* <a className="dropdown-item " href="#">
                      <i className="bx bx-edit-alt me-2" /> 
                      Edit
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="bx bx-trash me-2" />
                       Delete
                    </a> */}
                  </div>
                </div>
              </td>
              <td>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn p-0 dropdown-toggle hide-arrow"
                    data-bs-toggle="dropdown"
                  >
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      <i className="bx bx-edit-alt me-2" /> Edit
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="bx bx-trash me-2" /> Delete
                    </a>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
          </div>
        </div>
        <div className="row"></div>
      </div>
    );
};


export default Usuarios;
