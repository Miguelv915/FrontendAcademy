import React, { useMemo, useEffect,useState } from "react";
import Select from "react-select";
// import {Box, Modal, Tooltip}from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material";
import { Button, Modal, Box, Typography, Tooltip } from '@mui/material';

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

// Selct
function ModalDetalleFila({ modalOpen, handleCloseModal }) {
    return (
      <div className={`modal fade ${modalOpen ? 'show' : ''}`} id="modalTo" tabIndex="-1" style={{ display: modalOpen ? 'block' : 'none' }}>
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel4">Modal title</h5>
            <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close" />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col mb-3">
                <label htmlFor="nameExLarge" className="form-label">Name</label>
                <input type="text" id="nameExLarge" className="form-control" placeholder="Enter Name" />
              </div>
            </div>
            <div className="row g-2">
              <div className="col mb-0">
                <label htmlFor="emailExLarge" className="form-label">Email</label>
                <input type="email" id="emailExLarge" className="form-control" placeholder="xxxx@xxx.xx" />
              </div>
              <div className="col mb-0">
                <label htmlFor="dobExLarge" className="form-label">DOB</label>
                <input type="date" id="dobExLarge" className="form-control" />
              </div>
            </div>
          </div>
            <div className="modal-footer">
              {/* <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cerrar</button> */}
              <button type="button" className="btn btn-label-secondary" onClick={handleCloseModal}>Close</button>
              {/* Agrega aquí los botones u opciones adicionales del pie del modal si es necesario */}
            </div>
          </div>
        </div>
      </div>
    );
  }
const Ciclos = () => {
    const fetchData = async () => {
        // setIsLoading(true);
        try {
          const response = await fetch('http://127.0.0.1:8000/api/clientes');
          if (!response.ok) {
            throw new Error('Error al cargar los datos');
          }
          const jsonData = await response.json();
          console.log("jsonData: ", jsonData);
        //   setData(jsonData);
        } catch (error) {
        //   setError(error.message);
        } finally {
          // setIsLoading(false);
        }
      };
      useEffect(() => {
        fetchData();
      }, []);
    const options = [
        { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
        { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
        { value: "purple", label: "Purple", color: "#5243AA" },
        { value: "red", label: "Red", color: "#FF5630", isFixed: true },
        { value: "orange", label: "Orange", color: "#FF8B00" },
        { value: "yellow", label: "Yellow", color: "#FFC400" },
        { value: "green", label: "Green", color: "#36B37E" },
        { value: "forest", label: "Forest", color: "#00875A" },
        { value: "slate", label: "Slate", color: "#253858" },
        { value: "silver", label: "Silver", color: "#666666" },
    ];

    const tableTheme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: globalTheme,
                    background: {
                        default: globalTheme === "light" ? "rgb(254,255,244)" : "#2B2C40",
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
    const [modalOpen, setModalOpen] = useState(true);

    const openModal = () => {
      setModalOpen(true);
      // alert("hola")
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  
    return (
        <div>
            <div className="card">
            <h5 className="card-header">Ciclo</h5>

                <div className="card card-action">
                    <div className="card-body ">
                        <div className="row mb-1">
                            <div className="col-md-1">Nombre:</div>
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
                                <input
                                    type="text"
                                    id="txtDBon"
                                    name="txtDBon"
                                    className="form-control form-control-sm"
                                    autoComplete="off"
                                    required={true}
                                />
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
                        <div className="row ">
                            <div className="col-md-1">:</div>
                            <div className="col-md-3">
                                <input
                                    type="text"
                                    id="txtCod"
                                    name="txtCod"
                                    className="form-control form-control-sm"
                                    autoComplete="off"
                                />
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
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mt-1">
                <h5 className="card-header">Table Basic</h5>
                <div className="table-responsive text-nowrap">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th>Client</th>
                                <th>Users</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                            <tr>
                                <td>
                                    <i className="fab fa-angular fa-lg text-danger me-3" />{" "}
                                    <span className="fw-medium">Angular Project</span>
                                </td>
                                <td>Albert Cook</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            aria-label="Lilian Fuller"
                                            data-bs-original-title="Lilian Fuller"
                                        >
                                            <img
                                                src="../../assets/img/avatars/5.png"
                                                alt="Avatar"
                                                className="rounded-circle"
                                            />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            aria-label="Sophia Wilkerson"
                                            data-bs-original-title="Sophia Wilkerson"
                                        >
                                            <img
                                                src="../../assets/img/avatars/6.png"
                                                alt="Avatar"
                                                className="rounded-circle"
                                            />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            aria-label="Christina Parker"
                                            data-bs-original-title="Christina Parker"
                                        >
                                            <img
                                                src="../../assets/img/avatars/7.png"
                                                alt="Avatar"
                                                className="rounded-circle"
                                            />
                                        </li>
                                    </ul>
                                </td>
                                <td>
                                    <span className="badge bg-label-primary me-1">Active</span>
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
                                            <a className="dropdown-item" href="">
                                                <i className="bx bx-edit-alt me-1" /> Edit
                                            </a>
                                            <a className="dropdown-item" href="">
                                                <i className="bx bx-trash me-1" /> Delete
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="fab fa-react fa-lg text-info me-3" />{" "}
                                    <span className="fw-medium">React Project</span>
                                </td>
                                <td>Barry Hunter</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            aria-label="Lilian Fuller"
                                            data-bs-original-title="Lilian Fuller"
                                        >
                                            <img
                                                src="../../assets/img/avatars/5.png"
                                                alt="Avatar"
                                                className="rounded-circle"
                                            />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            aria-label="Sophia Wilkerson"
                                            data-bs-original-title="Sophia Wilkerson"
                                        >
                                            <img
                                                src="../../assets/img/avatars/6.png"
                                                alt="Avatar"
                                                className="rounded-circle"
                                            />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            aria-label="Christina Parker"
                                            data-bs-original-title="Christina Parker"
                                        >
                                            <img
                                                src="../../assets/img/avatars/7.png"
                                                alt="Avatar"
                                                className="rounded-circle"
                                            />
                                        </li>
                                    </ul>
                                </td>
                                <td>
                                    <span className="badge bg-label-success me-1">Completed</span>
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
                                            <a className="dropdown-item" href="">
                                                <i className="bx bx-edit-alt me-2" /> Edit
                                            </a>
                                            <a className="dropdown-item" href="">
                                                <i className="bx bx-trash me-2" /> Delete
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="fab fa-vuejs fa-lg text-success me-3" />{" "}
                                    <span className="fw-medium">VueJs Project</span>
                                </td>
                                <td>Trevor Baker</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            aria-label="Lilian Fuller"
                                            data-bs-original-title="Lilian Fuller"
                                        >
                                            <img
                                                src="../../assets/img/avatars/5.png"
                                                alt="Avatar"
                                                className="rounded-circle"
                                            />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            aria-label="Sophia Wilkerson"
                                            data-bs-original-title="Sophia Wilkerson"
                                        >
                                            <img
                                                src="../../assets/img/avatars/6.png"
                                                alt="Avatar"
                                                className="rounded-circle"
                                            />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            aria-label="Christina Parker"
                                            data-bs-original-title="Christina Parker"
                                        >
                                            <img
                                                src="../../assets/img/avatars/7.png"
                                                alt="Avatar"
                                                className="rounded-circle"
                                            />
                                        </li>
                                    </ul>
                                </td>
                                <td>
                                    <span className="badge bg-label-info me-1">Scheduled</span>
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
                                            <a className="dropdown-item" href="">
                                                <i className="bx bx-edit-alt me-2" /> Edit
                                            </a>
                                            <a className="dropdown-item" href="">
                                                <i className="bx bx-trash me-2" /> Delete
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="fab fa-bootstrap fa-lg text-primary me-3" />{" "}
                                    <span className="fw-medium">Bootstrap Project</span>
                                </td>
                                <td>Jerry Milton</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            aria-label="Lilian Fuller"
                                            data-bs-original-title="Lilian Fuller"
                                        >
                                            <img
                                                src="../../assets/img/avatars/5.png"
                                                alt="Avatar"
                                                className="rounded-circle"
                                            />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            aria-label="Sophia Wilkerson"
                                            data-bs-original-title="Sophia Wilkerson"
                                        >
                                            <img
                                                src="../../assets/img/avatars/6.png"
                                                alt="Avatar"
                                                className="rounded-circle"
                                            />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            aria-label="Christina Parker"
                                            data-bs-original-title="Christina Parker"
                                        >
                                            <img
                                                src="/assets/img/avatars/7.png"
                                                alt="Avatar"
                                                className="rounded-circle"
                                            />
                                        </li>
                                    </ul>
                                </td>
                                <td>
                                    <span className="badge bg-label-warning me-1">Pending</span>
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
                                            <a className="dropdown-item" href="">
                                                <i className="bx bx-edit-alt me-2" /> Edit
                                            </a>
                                            <a className="dropdown-item" href="">
                                                <i className="bx bx-trash me-2" /> Delete
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-lg-2">
              <Tooltip title="Consultar información" placement="top">
                  <button className="btn btn-sm btn-primary" id="btn_procesar" onClick={openModal} >
                    <i className='bx bx-cloud-download bx-ms' id="btn_procesar_icon"></i>
                    <span className="spinner-border d-none" id="btn_procesar_spinner" role="status" aria-hidden="true"></span>
                    &nbsp;Nuevo Alumno
                  </button>
                </Tooltip>
            </div>
            <ModalDetalleFila modalOpen={modalOpen} handleCloseModal={closeModal} />
        </div>
    );
};

export default Ciclos;



  