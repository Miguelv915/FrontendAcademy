import React, { useMemo, useEffect, useState } from "react";
// import Select from "react-select";
// import {Box, Modal, Tooltip}from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material";
import { Button, Modal, Box, Typography, Tooltip } from "@mui/material";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import AsyncSelect from 'react-select/async';
// import { format } from "date-fns";

// import MultipleSelectChip from "./seleEjemplo.jsx";
import { SelectApoderado, SelectCiclo } from "./ComponentesG/select.jsx";
const globalTheme = window.templateCustomizer.settings.style;

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
      ? "#696CFF"
      : globalTheme === "light"
        ? "#2B2C40"
        : "#FEFFF4",
    "&:hover": {
      backgroundColor: "#696CFF",
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

function ModalDetalleFila({ modalOpen, handleCloseModal }) {
  return (
    <div
      className={`modal fade ${modalOpen ? "show" : ""}`}
      id="modalToggle1"
      tabIndex="-1"
      style={{ display: modalOpen ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title ">Detalle de sincronización</h5>
            {/* btn-xs btn-primary rounded-pill  */}
            <button
              type="button"
              className=" btn-close btn  "
              onClick={handleCloseModal}
              aria-label="Close"
            >
              <i className="bx bx-x"></i>
            </button>
          </div>
          <div className="modal-body">
            <div>
              <div className="row mb-1">
                <div className="col mb-0">
                  <label className="form-label">ID PLAN:</label>
                </div>
                <div className="col mb-0">
                  <label className="form-label">ESTADO:</label>
                </div>
              </div>
              <label className="form-label">MENSAJE:</label>
              {/* <div className="form-control" aria-readonly="true" style={{ whiteSpace: 'pre-wrap' }}> */}
              <div
                className="form-control"
                aria-readonly="true"
                style={{
                  whiteSpace: "pre-wrap",
                  overflowY: "auto",
                  maxHeight: "200px",
                }}
              ></div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCloseModal}
            >
              Cerrar
            </button>
            {/* Agrega aquí los botones u opciones adicionales del pie del modal si es necesario */}
          </div>
        </div>
      </div>
    </div>
  );
}

export const Nuevo = (props) => {
  const visible = props.visible;
  const cerrarNuevo = props.funCerar;
  const [formData, setFormData] = useState({
    alumNombre: 'felipe',
    alumTelefono: '',
    alumApellido: '',
    alumDireccion: '',
    padreNombre: 'Juan del carlos ',
    padreTelefono: '',
    padreApellido: '',
    padreDireccion: '',
    ciloID: '',
    facebook: '',
    google: '',
    linkedin: '',
    polo:'N'
  });
  const fun_guardar = () =>{
    // alert (formData)
    console.log(formData);
  }
  const handleChange = (event, fieldName) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      [fieldName]: value.toUpperCase()
    });
  };
  const [numFormularo, set_numFormualrio] = useState(1);
  const fun_cambiarForm = (num) => {
    set_numFormualrio(num);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };


 
  return (
    <div className="card mb-4" style={{ display: visible ? "block" : "none" }} >
        <div className="row p-0 m-0 ">
          <div className="col d-flex justify-content-end p-0 m-0"> {/* Utiliza la clase 'd-flex' para mostrar como flexbox y 'justify-content-end' para alinear al final */}
              <button type="button" onClick={() => cerrarNuevo(false)} className="btn btn-icon btn-label-primary btn-sm">
                <i className="bx bx-x"></i> 
              
              </button>
          </div>
      </div>
      
    <div className="card card-action">
      <div className="card-body "> 
      <div className="col-12  " >
      {/* <small className="text-light fw-medium">Basic</small> */}
      {/* <button type="button" className="btn-close" aria-label="Close"></button>
      <button type="button" class="btn btn-sm rounded-pill btn-outline-danger">
      </button> */}
      {/* <button type="button" className="btn btn-icon btn-primary btn-sm">
                <span className="tf-icons bx bx-pie-chart-alt"></span>
              </button>
      <button type="button" className="btn btn-icon btn-primary btn-sm"  aria-label="Close"><i className='bx bx-x'></i></button>
      <button type="button" className="btn btn-icon btn-facebook btn-sm"><i className="tf-icons bx bxl-facebook"></i></button> */}

      {/* <div className="p-0 m-0 "> 
        <div className="row p-0 m-0 ">
          <div className="col d-flex justify-content-end p-0 m-0">
            <button type="button" onClick={() => cerrarNuevo(false)} className="btn btn-icon btn-label-primary btn-sm">
              <i className="bx bx-x"></i> 
             
            </button>
          </div>
        </div>
      </div> */}


      <div className="row">
      
        <div className="bs-stepper wizard-numbered mt-0 p-0">
          
          <div className="bs-stepper-header">
            
            {/* Opcion de alumno */}
            <div  className={`step ${numFormularo === 1 ? "active" : ""} `}  data-target="#account-details" >
              <button  onClick={() => fun_cambiarForm(1)}  type="button" className=" btn btn-sm step-trigger">
                <span className="bs-stepper-circle small">1</span>
                <span className="bs-stepper-label mt-1 small">
                  <span className="bs-stepper-title">Datos del Alumo</span>
                  <span className="bs-stepper-subtitle">
                    Setup Account Details
                  </span>
                </span>
              </button>
            </div>
            <div className="line">
              <i className="bx bx-chevron-right" />
            </div>
             {/* Opcion de padre */}
            <div className={`step ${numFormularo === 2 ? "active" : ""} `}
              data-target="#personal-info"
            >
              <button  onClick={() => fun_cambiarForm(2)} type="button" className="step-trigger">
                <span className="bs-stepper-circle">2</span>
                <span className="bs-stepper-label mt-1">
                  <span className="bs-stepper-title">Datos del apoderado</span>
                  <span className="bs-stepper-subtitle">Add personal info</span>
                </span>
              </button>
            </div>
            <div className="line">
              <i className="bx bx-chevron-right" />
            </div>
             {/* Opcion de ciclo */}
            <div  className={`step ${numFormularo === 3 ? "active" : ""} `} data-target="#social-links" >
              <button  onClick={() => fun_cambiarForm(3)} type="button" className="step-trigger">
                <span className="bs-stepper-circle">3</span>
                <span className="bs-stepper-label mt-1">
                  <span className="bs-stepper-title">Datos del ciclo</span>
                  <span className="bs-stepper-subtitle">Add social links</span>
                </span>
              </button>
            </div>
            
          </div>
            {/* imput de la data */}
          <div className="bs-stepper-content">
            <form onSubmit={handleSubmit}>
              {/* Datos del estudiante  */}
              {numFormularo === 1 && (
                <div id="account-details" className="content active dstepper-block">
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="username"> Username </label>
                      <input
                        type="text"
                        id="alumNombre"
                        className="form-control"
                        name="alumNombre"
                        value={formData.alumNombre}
                        onChange={(event) => handleChange(event, "alumNombre")}
                        placeholder="johndoe"
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="email">
                        Apellido
                      </label>
                      <input
                        type="text"
                        id="alumApellido"
                        className="form-control"
                        name="alumApellido"
                        value={formData.alumApellido}
                        onChange={(event) => handleChange(event, "  ")}
                        placeholder="johndoe"
                      />
                    </div>
                    <div className="col-sm-6 form-password-toggle">
                      <label className="form-label" htmlFor="password">
                        Direccion
                      </label>
                      <div className="input-group input-group-merge">
                      <input
                        type="text"
                        id="alumDireccion"
                        className="form-control"
                        name="alumDireccion"
                        value={formData.alumDireccion}
                        onChange={(event) => handleChange(event, "alumDireccion")}
                        placeholder="johndoe"
                      />
                        {/* <span
                          className="input-group-text cursor-pointer"
                          id="password2"
                        >
                          <i className="bx bx-hide" />
                        </span> */}
                      </div>
                    </div>
                    <div className="col-sm-6 form-password-toggle">
                      <label className="form-label" htmlFor="confirm-password">
                        Telefono
                      </label>
                      <div className="input-group input-group-merge">
                      <input
                        type="number"
                        id="alumTelefono"
                        className="form-control"
                        name="alumTelefono"
                        value={formData.alumTelefono}
                        onChange={(event) => handleChange(event, "alumTelefono")}
                        placeholder="johndoe"
                      />
                        {/* <span
                          className="input-group-text cursor-pointer"
                          id="confirm-password2"
                        >
                          <i className="bx bx-hide" />
                        </span> */}
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-between">
                      <button
                        onClick={() => fun_cambiarForm(1)}
                        className="btn btn-sm  btn-label-secondary btn-prev"
                        disabled
                      >
                        <i className="bx bx-chevron-left bx-sm ms-sm-n2" />
                        <span className="align-middle d-sm-inline-block d-none">
                          Atras
                        </span>
                      </button>
                      <button
                        onClick={() => fun_cambiarForm(2)}
                        className="btn btn-sm btn-primary  btn-next-sm"
                      >
                        <span className="align-middle d-sm-inline-block d-none me-sm-1">
                          Next
                        </span>
                        <i className="bx bx-chevron-right bx-sm me-sm-n2" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Apoderado */}
              {numFormularo === 2 && (
                <div
                  id="personal-info"
                  className="content active dstepper-block"
                >
                  {/* <div className="content-header mb-3">
                    <h6 className="mb-0">Datos Apoderado</h6>
                    <small>Enter Your Personal Info.</small>
                  </div> */}
                <div className="row">
                  <div className="d-flex align-items-center justify-content-between app-academy-md-80">
                    <input type="search" placeholder="Find your course" className="form-control me-2" />
                    <button type="submit" className="btn btn-primary btn-icon"><i className="bx bx-search" /></button>
                  </div>
                </div>
                {/* <SelectApoderado /> */}
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="first-name">
                        Nomnbre
                      </label>
                      <input
                        type="text"
                        id="padreNombre"
                        className="form-control custom-input"
                        name="padreNombre"
                        value={formData.padreNombre}
                        onChange={(event) => handleChange(event, "padreNombre")}
                        placeholder="johndoe"
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="last-name">
                        Apellido
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
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="country">
                        Direccion
                      </label>
                      <div className="position-relative">
                        <div className="position-relative">
                        <input
                        type="text"
                        id="padreDireccion"
                        className="form-control"
                        name="padreDireccion"
                        value={formData.padreDireccion}
                        onChange={(event) => handleChange(event, "padreDireccion")}
                        placeholder="johndoe"
                      />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="country">
                        Telefono
                      </label>
                      <div className="position-relative">
                        <div className="position-relative">
                        <input
                        type="number"
                        id="padreTelefono"
                        className="form-control"
                        name="padreTelefono"
                        value={formData.padreTelefono}
                        onChange={(event) => handleChange(event, "padreTelefono")}
                        placeholder="johndoe"
                      />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-between">
                      <button
                        onClick={() => fun_cambiarForm(1)}
                        className="btn btn-sm  btn-primary btn-prev"
                      >
                        <i className="bx bx-chevron-left bx-sm ms-sm-n2" />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button
                        onClick={() => fun_cambiarForm(3)}
                        className="btn btn-sm  btn-primary btn-next"
                      >
                        <span className="align-middle d-sm-inline-block d-none me-sm-1">
                          Next
                        </span>
                        <i className="bx bx-chevron-right bx-sm me-sm-n2" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Social Links */}
              {numFormularo === 3 && (
                <div
                  id="social-links"
                  className="content active dstepper-block"
                >
                  {/* <div className="content-header mb-3">
                    <h6 className="mb-0">Social Links</h6>
                    <small>Enter Your Social Links.</small>
                  </div> */}
                  <div className="row g-3">
                    <div className="col-sm-3">
                      <label className="form-label" htmlFor="twitter">
                        Ciclo
                      </label>
                      <SelectCiclo />
                    </div>
                    <div className="col-sm-3">
                      <label className="form-label" htmlFor="twitter">
                        Monto
                      </label>
                      {/* <SelectCiclo /> */}
                      <label   className="form-control form-control-sm"> ccssc</label>
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="facebook"> Entrega de polo</label>
                      <select id="yes-no-select" value={formData.polo} onChange={(event) => handleChange(event, "polo")} className="form-select form-select-sm">
                          {/* Opción vacía inicial (puedes elegir quitarla si quieres) */}
                          <option value="">Selecciona una opción</option>
                          <option value="Y">Sí</option>
                          <option value="N">No</option>
                      </select>
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="google">  Descuento</label>
                      <input
                        type="number"
                        id="google"
                        className="form-control"
                        placeholder="https://plus.google.com/abc"
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="linkedin">LinkedIn </label>
                      <input type="text" id="linkedin" className="form-control"  placeholder="https://linkedin.com/abc" />
                    </div>
                    <div className="col-12 d-flex justify-content-between">
                      <button onClick={() => fun_cambiarForm(2)} className="btn btn-sm  btn-primary btn-prev"  >
                        <i className="bx bx-chevron-left bx-sm ms-sm-n2" />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button onClick={fun_guardar} className="btn btn-success  btn-sm  btn-submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
      </div>
    
    </div>
     </div>
  );
};




const ListAlumnos = () => {
  const tableTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: globalTheme,
          background: {
            default: globalTheme === "light" ? "rgb(255,255,255)" : "#2B2C40",
          },
        },
        typography: {
          button: {
            textTransform: "none",
            fontSize: "1.2rem",
          },
        },
      }),
    [globalTheme]
  );
  /** Funciones para lel modal */
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    // alert("hola")
  };

  const closeModal = () => {
    // setModalOpen(false);
  };
  const [dataapi, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    // setIsLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/alumnos");
      if (!response.ok) {
        throw new Error("Error al cargar los datos");
      }
      const jsonData = await response.json();
      console.log("jsonData: ", jsonData);
      setData(jsonData.data);
    } catch (error) {
      // setError(error.message);
    } finally {
      // setIsLoading(false);
    }
  };
  useEffect(() => {
    // fetchData(); 
  }, []);
  const columns = useMemo(
    () => [
      {
        accessorKey: "id", //access nested data with dot notation
        header: "First Name",
        size: 50,
      },
      {
        accessorKey: "nombre",
        header: " Name",
        size: 150,
      },
      {
        accessorKey: "categoria.name",
        header: " Categoria",
        size: 150,
      },
      {
        accessorKey: "dni",
        header: "DNI",
        size: 150,
      },
      {
        accessorKey: "apellido",
        header: "apellido",
        size: 50,
      },
    ],
    []
  );
  const data = [
    {
      name: {
        firstName: "John",
        lastName: "Doe",
      },
      address: "261 Erdman Ford",
      city: "East Daphne",
      state: "Kentucky",
    },
    {
      name: {
        firstName: "Jane",
        lastName: "Doe",
      },
      address: "769 Dominic Grove",
      city: "Columbus",
      state: "Ohio",
    },
    {
      name: {
        firstName: "Joe",
        lastName: "Doe",
      },
      address: "566 Brakus Inlet",
      city: "South Linda",
      state: "West Virginia",
    },
    {
      name: {
        firstName: "Kevin",
        lastName: "Vandy",
      },
      address: "722 Emie Stream",
      city: "Lincoln",
      state: "Nebraska",
    },
    {
      name: {
        firstName: "Joshua",
        lastName: "Rolluffs",
      },
      address: "32188 Larkin Turnpike",
      city: "Charleston",
      state: "South Carolina",
    },
  ];
  const [modalOpen_2, setModalOpen_2] = useState(false);
  const handleCloseModal_2 = () => {
    setModalOpen_2(false);
  };
 
  function funListarAlumnos (){
      fetchData ()

  }
  return (
    <div>
      <h4 className="text-muted">Alumnos</h4>

      {<Nuevo visible={modalOpen} funCerar={setModalOpen} />}

      <div className="card">

        <div className="card card-action">
          <div className="card-body ">

            <div className="row mb-1">
            </div>
            <div className="row">
              {/* <div className="row mb-1">
                <div className="col-md-1">
                  <label className="form-label" htmlFor="username">
                    Username
                  </label>
                </div>

                <div className="col-md-3">
                  <input
                    type="text"
                    id="txtCod"
                    name="txtCod"
                    className="form-control form-control-sm"
                    autoComplete="off"
                  />
                </div>
                <div className="col-md-1">Apellido:</div>
                <div className="col-md-3">
                  <input type="text" id="txtDBon" name="txtDBon" className="form-control form-control-sm" required={true} />
                </div>
                <div className="col-md-1">DNI:</div>
                <div className="col-md-3">
                  <input
                    type="text"
                    id="txtDBo"
                    name="txtDBon"
                    className="form-control form-control-sm"
                    autoComplete="off"
                    required={true}
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-1">Sucursal:</div>
                <div className="col-md-3">
                  <SelectSucursal />
                </div>
                <div className="col-md-1">D.Bonif:</div>
                <div className="col-md-3">
                  <input
                    type="text"
                    id="txtDBon"
                    name="txtDBon"
                    className="form-control form-control-sm"
                    autoComplete="off"
                    required={true}
                  />
                </div>
                <div className="col-md-1">D.Bonif:</div>
                <div className="col-md-3">
                  <input
                    type="text"
                    id="txtDBo"
                    name="txtDBon"
                    className="form-control form-control-sm"
                    autoComplete="off"
                    required={true}
                  />
                </div>
              </div> */}
              <div className="row mb-2 justify-content-end ">
                <div className="col-lg-4 d-flex   justify-content-end ">
                  <Tooltip title="Consultar información" placement="top">
                    <button className="btn btn-sm btn-label-success " id="btn_procesar"  onClick={openModal}>
                      <i className="bx bxs-user-rectangle bx-tada bx-flip-horizontal"></i>
                      <span className="spinner-border d-none "  id="btn_procesar_spinner" role="status"  aria-hidden="true" ></span>
                      &nbsp;Nuevo Alumno
                    </button>
                  </Tooltip>
                  <Tooltip title="Nuevo estudiante" placement="top">
                    <button className="btn btn-sm btn-primary ms-1" onClick={funListarAlumnos}>
                      <i className="bx bx-cloud-download bx-ms"  id="btn_procesar_icon" ></i>
                      <span  className="spinner-border d-none" id="btn_procesar_spinner" role="status"  aria-hidden="true" ></span>
                      &nbsp;Consultar
                    </button>
                  </Tooltip>
                </div>
              </div>
              {/* Tabla de listart alumno */}
              <div className="card-datatable table-responsive">
                <ThemeProvider theme={tableTheme}>
                  <MaterialReactTable
                    columns={columns}
                    data={dataapi}
                  // mrtTheme={mrtTheme}
                  />
                </ThemeProvider>
              </div>
            </div>

            {/* PAra sua r en al vista de deudas y pagos  */}
            {/* <TablasGenerales />
            <Usuarios></Usuarios> */}
            {/* <Catalogo></Catalogo> */}
          </div>
        </div>
      </div>
      <ModalDetalleFila
        modalOpen={modalOpen_2}
        handleCloseModal={handleCloseModal_2}
      />

      {/* <ModalDetalleFila modalOpen={modalOpen} handleCloseModal={closeModal} /> */}
    </div>
  );
};

export default ListAlumnos;


export const Nuevo_1 = (props) => {
  const visible = props.visible;
  const cerrarNuevo = props.funCerar;
  const [formData, setFormData] = useState({
    alumNombre: 'felipe',
    alumTelefono: '',
    alumApellido: '',
    alumDireccion: '',
    padreNombre: 'Juan del carlos ',
    padreTelefono: '',
    padreApellido: '',
    padreDireccion: '',
    ciloID: '',
    facebook: '',
    google: '',
    linkedin: '',
    polo:'N'
  });
  const fun_guardar = () =>{
    // alert (formData)
    console.log(formData);
  }
  const handleChange = (event, fieldName) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      [fieldName]: value.toUpperCase()
    });
  };
  const [numFormularo, set_numFormualrio] = useState(1);
  const fun_cambiarForm = (num) => {
    set_numFormualrio(num);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="card mb-4" style={{ display: visible ? "block" : "none" }} >
        <div className="row p-0 m-0 ">
          <div className="col d-flex justify-content-end p-0 m-0"> {/* Utiliza la clase 'd-flex' para mostrar como flexbox y 'justify-content-end' para alinear al final */}
              <button type="button" onClick={() => cerrarNuevo(false)} className="btn btn-icon btn-label-primary btn-sm">
                <i className="bx bx-x"></i> 
              
              </button>
          </div>
      </div>
    <div className="card card-action">
      <div className="card-body "> 
      <div className="col-12  " >
      {/* <small className="text-light fw-medium">Basic</small> */}
      {/* <button type="button" className="btn-close" aria-label="Close"></button>
      <button type="button" class="btn btn-sm rounded-pill btn-outline-danger">
      </button> */}
      {/* <button type="button" className="btn btn-icon btn-primary btn-sm">
                <span className="tf-icons bx bx-pie-chart-alt"></span>
              </button>
      <button type="button" className="btn btn-icon btn-primary btn-sm"  aria-label="Close"><i className='bx bx-x'></i></button>
      <button type="button" className="btn btn-icon btn-facebook btn-sm"><i className="tf-icons bx bxl-facebook"></i></button> */}

      {/* <div className="p-0 m-0 "> 
        <div className="row p-0 m-0 ">
          <div className="col d-flex justify-content-end p-0 m-0">
            <button type="button" onClick={() => cerrarNuevo(false)} className="btn btn-icon btn-label-primary btn-sm">
              <i className="bx bx-x"></i> 
             
            </button>
          </div>
        </div>
      </div> */}


      <div className="row">
      
        <div className="bs-stepper wizard-numbered mt-0 p-0">
          
          <div className="bs-stepper-header">
            
            {/* Opcion de alumno */}
            <div  className={`step ${numFormularo === 1 ? "active" : ""} `}  data-target="#account-details" >
              <button  onClick={() => fun_cambiarForm(1)}  type="button" className=" btn btn-sm step-trigger">
                <span className="bs-stepper-circle small">1</span>
                <span className="bs-stepper-label mt-1 small">
                  <span className="bs-stepper-title">Datos del Alumo</span>
                  <span className="bs-stepper-subtitle">
                    Setup Account Details
                  </span>
                </span>
              </button>
            </div>
            <div className="line">
              <i className="bx bx-chevron-right" />
            </div>
             {/* Opcion de padre */}
            <div className={`step ${numFormularo === 2 ? "active" : ""} `}
              data-target="#personal-info"
            >
              <button  onClick={() => fun_cambiarForm(2)} type="button" className="step-trigger">
                <span className="bs-stepper-circle">2</span>
                <span className="bs-stepper-label mt-1">
                  <span className="bs-stepper-title">Datos del apoderado</span>
                  <span className="bs-stepper-subtitle">Add personal info</span>
                </span>
              </button>
            </div>
            <div className="line">
              <i className="bx bx-chevron-right" />
            </div>
             {/* Opcion de ciclo */}
            <div  className={`step ${numFormularo === 3 ? "active" : ""} `} data-target="#social-links" >
              <button  onClick={() => fun_cambiarForm(3)} type="button" className="step-trigger">
                <span className="bs-stepper-circle">3</span>
                <span className="bs-stepper-label mt-1">
                  <span className="bs-stepper-title">Datos del ciclo</span>
                  <span className="bs-stepper-subtitle">Add social links</span>
                </span>
              </button>
            </div>
            
          </div>
            {/* imput de la data */}
          <div className="bs-stepper-content">
            <form onSubmit={handleSubmit}>
              {/* Datos del estudiante  */}
              {numFormularo === 1 && (
                <div id="account-details" className="content active dstepper-block">
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="username"> Username </label>
                      <input
                        type="text"
                        id="alumNombre"
                        className="form-control"
                        name="alumNombre"
                        value={formData.alumNombre}
                        onChange={(event) => handleChange(event, "alumNombre")}
                        placeholder="johndoe"
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="email">
                        Apellido
                      </label>
                      <input
                        type="text"
                        id="alumApellido"
                        className="form-control"
                        name="alumApellido"
                        value={formData.alumApellido}
                        onChange={(event) => handleChange(event, "  ")}
                        placeholder="johndoe"
                      />
                    </div>
                    <div className="col-sm-6 form-password-toggle">
                      <label className="form-label" htmlFor="password">
                        Direccion
                      </label>
                      <div className="input-group input-group-merge">
                      <input
                        type="text"
                        id="alumDireccion"
                        className="form-control"
                        name="alumDireccion"
                        value={formData.alumDireccion}
                        onChange={(event) => handleChange(event, "alumDireccion")}
                        placeholder="johndoe"
                      />
                        {/* <span
                          className="input-group-text cursor-pointer"
                          id="password2"
                        >
                          <i className="bx bx-hide" />
                        </span> */}
                      </div>
                    </div>
                    <div className="col-sm-6 form-password-toggle">
                      <label className="form-label" htmlFor="confirm-password">
                        Telefono
                      </label>
                      <div className="input-group input-group-merge">
                      <input
                        type="number"
                        id="alumTelefono"
                        className="form-control"
                        name="alumTelefono"
                        value={formData.alumTelefono}
                        onChange={(event) => handleChange(event, "alumTelefono")}
                        placeholder="johndoe"
                      />
                        {/* <span
                          className="input-group-text cursor-pointer"
                          id="confirm-password2"
                        >
                          <i className="bx bx-hide" />
                        </span> */}
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-between">
                      <button
                        onClick={() => fun_cambiarForm(1)}
                        className="btn btn-sm  btn-label-secondary btn-prev"
                        disabled
                      >
                        <i className="bx bx-chevron-left bx-sm ms-sm-n2" />
                        <span className="align-middle d-sm-inline-block d-none">
                          Atras
                        </span>
                      </button>
                      <button
                        onClick={() => fun_cambiarForm(2)}
                        className="btn btn-sm btn-primary  btn-next-sm"
                      >
                        <span className="align-middle d-sm-inline-block d-none me-sm-1">
                          Next
                        </span>
                        <i className="bx bx-chevron-right bx-sm me-sm-n2" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Apoderado */}
              {numFormularo === 2 && (
                <div
                  id="personal-info"
                  className="content active dstepper-block"
                >
                  {/* <div className="content-header mb-3">
                    <h6 className="mb-0">Datos Apoderado</h6>
                    <small>Enter Your Personal Info.</small>
                  </div> */}
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="first-name">
                        Nomnbre
                      </label>
                      <input
                        type="text"
                        id="padreNombre"
                        className="form-control custom-input"
                        name="padreNombre"
                        value={formData.padreNombre}
                        onChange={(event) => handleChange(event, "padreNombre")}
                        placeholder="johndoe"
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="last-name">
                        Apellido
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
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="country">
                        Direccion
                      </label>
                      <div className="position-relative">
                        <div className="position-relative">
                        <input
                        type="text"
                        id="padreDireccion"
                        className="form-control"
                        name="padreDireccion"
                        value={formData.padreDireccion}
                        onChange={(event) => handleChange(event, "padreDireccion")}
                        placeholder="johndoe"
                      />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="country">
                        Telefono
                      </label>
                      <div className="position-relative">
                        <div className="position-relative">
                        <input
                        type="number"
                        id="padreTelefono"
                        className="form-control"
                        name="padreTelefono"
                        value={formData.padreTelefono}
                        onChange={(event) => handleChange(event, "padreTelefono")}
                        placeholder="johndoe"
                      />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-between">
                      <button
                        onClick={() => fun_cambiarForm(1)}
                        className="btn btn-sm  btn-primary btn-prev"
                      >
                        <i className="bx bx-chevron-left bx-sm ms-sm-n2" />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button
                        onClick={() => fun_cambiarForm(3)}
                        className="btn btn-sm  btn-primary btn-next"
                      >
                        <span className="align-middle d-sm-inline-block d-none me-sm-1">
                          Next
                        </span>
                        <i className="bx bx-chevron-right bx-sm me-sm-n2" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Social Links */}
              {numFormularo === 3 && (
                <div
                  id="social-links"
                  className="content active dstepper-block"
                >
                  {/* <div className="content-header mb-3">
                    <h6 className="mb-0">Social Links</h6>
                    <small>Enter Your Social Links.</small>
                  </div> */}
                  <div className="row g-3">
                    <div className="col-sm-3">
                      <label className="form-label" htmlFor="twitter">
                        Ciclo
                      </label>
                      <SelectCiclo />
                    </div>
                    <div className="col-sm-3">
                      <label className="form-label" htmlFor="twitter">
                        Monto
                      </label>
                      {/* <SelectCiclo /> */}
                      <label   className="form-control form-control-sm"> ccssc</label>
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="facebook"> Entrega de polo</label>
                      <select id="yes-no-select" value={formData.polo} onChange={(event) => handleChange(event, "polo")} className="form-select form-select-sm">
                          {/* Opción vacía inicial (puedes elegir quitarla si quieres) */}
                          <option value="">Selecciona una opción</option>
                          <option value="Y">Sí</option>
                          <option value="N">No</option>
                      </select>
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="google">  Descuento</label>
                      <input
                        type="number"
                        id="google"
                        className="form-control"
                        placeholder="https://plus.google.com/abc"
                      />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="linkedin">LinkedIn </label>
                      <input type="text" id="linkedin" className="form-control"  placeholder="https://linkedin.com/abc" />
                    </div>
                    <div className="col-12 d-flex justify-content-between">
                      <button onClick={() => fun_cambiarForm(2)} className="btn btn-sm  btn-primary btn-prev"  >
                        <i className="bx bx-chevron-left bx-sm ms-sm-n2" />
                        <span className="align-middle d-sm-inline-block d-none">
                          Previous
                        </span>
                      </button>
                      <button onClick={fun_guardar} className="btn btn-success  btn-sm  btn-submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
      </div>
    
    </div>
     </div>
  );
};
