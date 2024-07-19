import PropTypes from 'prop-types';
import { useState } from 'react';
import AsyncSelect from 'react-select/async';
const globalTheme = window.templateCustomizer.settings.style;
export const SelectSucursal = ({ id, value, onChange, disabled }) => {
    // const cookies = new Cookies();
    // const dtUser = cookies.get('dtUser');
    //const dtgrve = dtUser.ls_gr_ven SucursalSeleccionado
    //const dtSucu = dtUser.sl_dt_suc[0].suc_nombre
    const sucursales = [
      { name: "Sucursal A", code: "A001" },
      { name: "Sucursal B", code: "B002" },
      { name: "Sucursal C", code: "C003" },
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
      <select id="" className="form-select form-select-sm m-0">
        <option value="9999">-- Seleccione --</option>
        {sucursales.map((item, index) => {
          return (
            <option value={item?.code} key={index}>
              {item?.name}
            </option>
          );
        })}
      </select>
    );
};


export const SelectCiclo = ({  selectedValueCiclo, onSelectCiclo }) => {
    // const cookies = new Cookies();
    // const dtUser = cookies.get('dtUser');
    //const dtgrve = dtUser.ls_gr_ven SucursalSeleccionado
    //const dtSucu = dtUser.sl_dt_suc[0].suc_nombre
    const sucursales = [
      { name: "Ciclo A", code: "C001" },
      { name: "Ciclo B", code: "C002" },
      { name: "Ciclo C", code: "C003" },
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
      <select id="" className="form-select form-select-sm m-0">
        <option value="9999">-- Seleccione --</option>
        {sucursales.map((item, index) => {
          return (
            <option value={item?.code} key={index}>
              {item?.name}
            </option>
          );
        })}
      </select>
    );
};

export const SelectArea = ({  selectedValueArea, onSelectArea }) => {
  
    // const cookies = new Cookies();
    // const dtUser = cookies.get('dtUser');
    //const dtgrve = dtUser.ls_gr_ven SucursalSeleccionado
    //const dtSucu = dtUser.sl_dt_suc[0].suc_nombre
    const sucursales = [
      { name: "Area A", code: "are001" },
      { name: "Area B", code: "are002" },
      { name: "Area C", code: "are003" },
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

      <select id="" value={selectedValueArea} className="form-select form-select-sm m-0" onChange={onSelectArea} >
        <option value="-1">-- Seleccione --</option>
        {sucursales.map((item, index) => {
          return (
            <option value={item?.code} key={index}>
              {item?.name}
            </option>
          );
        })}
      </select>
    );
};

export const SelectTipoUser = ({  selectedValue, onSelect }) => {
   
  const usuerios = [
    { code: "1", nombre: "Usuario G" },
    { code: "2", nombre: "Admin" },
    // { name: "Area C", code: "are003" },
  ];
  // const handleChange = (event) => {
  //   const selectedValue = event.target.value;
  //   // Llamar a la función de retorno pasada como prop con el valor seleccionado
  //   onSelect(selectedValue);
  // };
  return (
    
    <select  value={selectedValue} id="" className="form-select form-select m-0"  onChange={onSelect} >
      <option value="-1">-- Seleccione --</option>
      {usuerios.map((item, index) => {
        return (
          <option value={item?.code} key={index+item.nombre}>
            {item?.nombre}
          </option>
        );
      })}
    </select>
  );
};


export const SelectApoderado =  ( )=>{
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
  const [selectedOptionsMulti, setSelectedOptionsMulti] = useState([]);
  const handleChangeMulti = (selected) => {
    setSelectedOptionsMulti(selected);
  };
  const loadOptions = async (inputValue) => {
    // Aquí es donde haces la llamada a tu API para obtener las opciones
    // Por simplicidad, este ejemplo usa datos estáticos, pero puedes reemplazarlo con una llamada fetch/axios.
    const allOptions = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
      { value: 'option4', label: 'Option 4' },
    ];
    return allOptions.filter(option => option.label.toLowerCase().includes(inputValue.toLowerCase()));
  };
  return(<> 
    
    <AsyncSelect
        // isMulti
        cacheOptions
        styles={styles}
        className=" from-control "
        placeholder="Busque por Cod./Desc."
        loadOptions={loadOptions}
        defaultOptions
        onChange={handleChangeMulti}
        value={selectedOptionsMulti}
      />
    </>)

};
SelectTipoUser.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired // Agrega validación para la prop onSelect
};
SelectArea.propTypes = {
  selectedValueArea: PropTypes.string.isRequired,
  onSelectArea: PropTypes.func.isRequired // Agrega validación para la prop onSelect
};

{/* <DatePicker
            id="txtFFin"
            locale="es"
            wrapperClassName='input_date'
            className="form-control form-control-sm text-center"
            selected={listDatos.txtFFin}
            onChange={handleDateChange2}
            dateFormat="yyyy-MM-dd"
          /> */}