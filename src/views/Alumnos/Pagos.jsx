/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo, useEffect } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { createTheme, ThemeProvider } from '@mui/material';
const globalTheme = window.templateCustomizer.settings.style;

//import {BarChart1,BarChart2,BarChart3} from '../components/Charts/BarChart'
// import { SelectSucursal,SelectTipo } from '../../components/Selects/SelectsPrincipales'

// https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/app-ecommerce-product-list.html
// https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/app-invoice-list.html
// https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/cards-actions.html
// Menu desplegabla
// https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/ui-dropdowns.html
//  commbos par alos ingresos de alumnos 
// https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/form-wizard-numbered.html
// https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/form-wizard-icons.html
function Pagos() {

  //Guardar cookie ultima vista
  useEffect(() => {
    savePathInCookie();
  }, []);
  function savePathInCookie() {
    const path = window.location.pathname.substr(1); // Obtiene la parte después de la barra diagonal

    // Guarda el valor en una cookie con nombre "ultimapag"
    document.cookie = `ultimapag=${path}`;
  }
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name.firstName', //access nested data with dot notation
        header: 'First Name',
        size: 150,
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
        size: 150,
      },
      {
        accessorKey: 'address', //normal accessorKey
        header: 'Address',
        size: 200,
      },
      {
        accessorKey: 'city',
        header: 'City',
        size: 150,
      },
      {
        accessorKey: 'state',
        header: 'State',
        size: 150,
      },
    ],
    [],
  );
  const data = [
    {
      name: {
        firstName: 'John',
        lastName: 'Doe',
      },
      address: '261 Erdman Ford',
      city: 'East Daphne',
      state: 'Kentucky',
    },
    {
      name: {
        firstName: 'Jane',
        lastName: 'Doe',
      },
      address: '769 Dominic Grove',
      city: 'Columbus',
      state: 'Ohio',
    },
    {
      name: {
        firstName: 'Joe',
        lastName: 'Doe',
      },
      address: '566 Brakus Inlet',
      city: 'South Linda',
      state: 'West Virginia',
    },
    {
      name: {
        firstName: 'Kevin',
        lastName: 'Vandy',
      },
      address: '722 Emie Stream',
      city: 'Lincoln',
      state: 'Nebraska',
    },
    {
      name: {
        firstName: 'Joshua',
        lastName: 'Rolluffs',
      },
      address: '32188 Larkin Turnpike',
      city: 'Charleston',
      state: 'South Carolina',
    },
  ];
  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });
  const tableTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: globalTheme,
          background: {
            default:
              globalTheme === 'light'
                ? 'rgb(254,255,244)'
                : '#2B2C40',
          },
        },
        typography: {
          button: {
            textTransform: 'none',
            fontSize: '1.2rem',
          },
        },
      }),
    [globalTheme],
  );
  const mrtTheme = (theme) => ({
    // baseBackgroundColor: theme.palette.background.default, //change default background color
  });
  return (
    <div>
      <h6 className="text-muted">Pagos</h6>
      <div className="card card-action">
        <div className="card-body ">
          <div className="row ">
            <div className="col-md-1">Codigo:</div>
            <div className="col-md-3">
              <input type="text" id="txtCod" name="txtCod" className="form-control form-control-sm" autoComplete='off' disabled />
            </div>
            <div className="col-md-1">D.Bonif:</div>
            <div className="col-md-7">
              <input type="text" id="txtDBon" name="txtDBon" className="form-control form-control-sm" autoComplete='off' required={true} />
            </div>
          </div>
          <div className="row">
            <div className="row">
              <div className="col-lg-2">Sucursal:</div>
              <div className="col-lg-2">
                <SelectSucursal />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2">Doc. de Identidad:</div>
              <div className="col-lg-2">
                {/* <SelectTipo id="emp_slc_tdo" url={emp_url_tdoc} value={emp_sl_t_doc} onChange={emp_changeSl_t_doc} disabled={emp_disabled} /> */}
              </div>
              <div className="col-lg-2">Nro.Documento:</div>
              <div className="col-lg-2">
                {/* <input type="number" id="emp_txt_nroDoc" name="emp_txt_nroDoc" className="form-control form-control-sm" autoComplete='off' value={emp_txt_nroDoc} onChange={emp_changeEmp_nroDoc} disabled={emp_disabled} min="1" max="99999999" pattern="\d*" /> */}
              </div>
              <div className="col-lg-2">Nro.Licencia:</div>
              <div className="col-lg-2">
                {/* <input type="text" id="veh_txt_nplic" name="veh_txt_nplic" className="form-control form-control-sm" autoComplete='off' value={emp_txt_nplic} onChange={emp_changeEmp_txt_nplic} disabled={emp_disabled} /> */}
                <input type="text" />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-lg-2">Nombre y Apellidos:</div>
              <div className="col-lg-10">
                {/* <input type="text" id="emp_txt_nombre" name="emp_txt_nombre" className="form-control form-control-sm" autoComplete='off' value={emp_txt_nombre} onChange={emp_changeEmp_txt_nombre} disabled={emp_disabled} /> */}
                <input type="text" />
              </div>
            </div>
            <div className="card-datatable table-responsive">
              <ThemeProvider theme={tableTheme}>
                <MaterialReactTable columns={columns} data={data}
                  mrtTheme={mrtTheme}
                />
              </ThemeProvider>
            </div>
            {/* <TableUser /> */}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Pagos

export const SelectSucursal = ({ id, value, onChange, disabled }) => {
  // const cookies = new Cookies();
  // const dtUser = cookies.get('dtUser');
  //const dtgrve = dtUser.ls_gr_ven SucursalSeleccionado
  //const dtSucu = dtUser.sl_dt_suc[0].suc_nombre
  const sucursales = [
    { name: "Sucursal A", code: "A001" },
    { name: "Sucursal B", code: "B002" },
    { name: "Sucursal C", code: "C003" }
  ];
  return (
    // <select id={id} className="form-select form-select-sm" value={value} onChange={onChange} disabled={disabled}>
    //   {/* <option value='9999' >-- Seleccione --</option> */}
    //     {
    //       dtUser.sl_dt_suc?.map((item,index) => {
    //         return <option value={item?.Code} key={index} >{item?.Name}</option>
    //       })
    //     }
    // </select>
    <select id="3" className="form-select form-select-sm" >
      {/* <option value='9999' >-- Seleccione --</option> */}
      {
        sucursales.map((item, index) => {
          return <option value={item?.code} key={index} >{item?.name}</option>
        })
      }
    </select>
  )
}

