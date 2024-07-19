import React, { useMemo, useEffect, useState } from "react";
// import Select from "react-select";
// import {Box, Modal, Tooltip}from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material";
import { Button, Modal, Box, Typography, Tooltip } from "@mui/material";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
// import { format } from "date-fns";

// import MultipleSelectChip from "./seleEjemplo.jsx";
import { SelectCiclo } from "./ComponentesG/select.jsx";
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
    padreNombre: 'Juan del carlos ',
    padreTelefono: '',
    padreApellido: '',
    padreDireccion: '',
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
      <div className="bs-stepper wizard-numbered mt-0 p-0">
            <div className="bs-stepper-header">
              
              {/* Opcion de padre */}
              <div className={`step ${numFormularo === 2 ? "active" : ""} `}
                data-target="#personal-info"
              >
                <button  onClick={() => fun_cambiarForm(2)} type="button" className="step-trigger">
                  <span className="bs-stepper-circle">P</span>
                  <span className="bs-stepper-label mt-1">
                    <span className="bs-stepper-title">Datos del apoderado</span>
                    {/* <span className="bs-stepper-subtitle">Add personal info</span> */}
                  </span>
                </button>
              </div>
              <div className="line">
                {/* <i className="bx bx-chevron-right" /> */}
              </div>
              
            </div>
              {/* imput de la data */}
            <div className="bs-stepper-content">
              <form onSubmit={handleSubmit}>
                {/* Datos del estudiante  */}
                

                {/* Apoderado */}
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
                      <button  onClick={() => cerrarNuevo(false)} className="btn btn-sm  btn-primary btn-prev"  >
                        <i className="bx bx-chevron-left bx-sm ms-sm-n2" />
                        <span className="align-middle d-sm-inline-block d-none">
                          Cerrar
                        </span>
                      </button>
                      <button onClick={fun_guardar} className="btn btn-success  btn-sm  btn-submit">
                        Guardar
                      </button>
                      </div>
                    </div>
                  </div>

                {/* Social Links */}
              
              </form>
            </div>
      </div>
     
     </div>
  );
};




const Apoderado = () => {
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
      <h4 className="text-muted">Apoderado</h4>

      {<Nuevo visible={modalOpen} funCerar={setModalOpen} />}

      <div className="card">

        <div className="card card-action">
          <div className="card-body ">

            <div className="row mb-1">
            </div>
            <div className="row">
              <div className="row mb-2 justify-content-end ">
                <div className="col-lg-4 d-flex   justify-content-end ">
                  <Tooltip title="Consultar información" placement="top">
                    <button className="btn btn-sm btn-label-success " id="btn_procesar"  onClick={openModal}>
                      <i className="bx bxs-user-rectangle bx-tada bx-flip-horizontal"></i>
                      <span className="spinner-border d-none "  id="btn_procesar_spinner" role="status"  aria-hidden="true" ></span>
                      &nbsp;Nuevo Apoderado
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

export default Apoderado;
