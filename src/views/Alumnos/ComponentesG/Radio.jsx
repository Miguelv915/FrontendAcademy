import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

export  function  FormControlLabelPosition( props) {

  const {selectedOptions} = props;
  const {handleChange}= props;
    const options = [
        { label: "Piura", value: "piura" },
        { label: "Sullana", value: "sullana" },
        { label: "Tumbes", value: "tumbes" },
      ];

    // Inicializa un estado para rastrear las opciones seleccionadas
    // const [selectedOptions, setSelectedOptions] = useState(["piura", "sullana", "tumbes"]);
    // // Controlador de eventos para actualizar las opciones seleccionadas
    // const handleChange = (event) => {
    //     const { value, checked } = event.target;

    //     setSelectedOptions((prevSelectedOptions) => {
    //         if (checked) {
    //             // Si la opción está marcada, agréguela a la lista de opciones seleccionadas
    //             return [...prevSelectedOptions, value];
    //         } else {
    //             // Si la opción no está marcada, elimínela de la lista de opciones seleccionadas
    //             return prevSelectedOptions.filter((option) => option !== value);
    //         }
    //     });
    // };
  return (
    <FormControl component="fieldset">
      {/* <FormLabel component="legend">Seleccione una o más opciones:</FormLabel> */}
      <FormGroup aria-label="position" row>
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option.value}
            control={<Checkbox  checked={selectedOptions.includes(option.value)}  onChange={handleChange}/>}
            label={option.label}
            labelPlacement="start"
          />
        ))}
      </FormGroup>
    </FormControl>
  );

}

export  function RowRadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
       
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        />
      </RadioGroup>
    </FormControl>
  );
}

export  function  RadioButtonSucursal(props) {

  // eslint-disable-next-line react/prop-types
  const {selectedOptions ,handleChange} = props;
    const options = [
        { label: "Piura", value: "piura" },
        { label: "Sullana", value: "sullana" },
        { label: "Tumbes", value: "tumbes" },
      ];

    // Inicializa un estado para rastrear las opciones seleccionadas
    // const [selectedOptions, setSelectedOptions] = useState(["piura", "sullana", "tumbes"]);
    // // Controlador de eventos para actualizar las opciones seleccionadas
    // const handleChange = (event) => {
    //     const { value, checked } = event.target;

    //     setSelectedOptions((prevSelectedOptions) => {
    //         if (checked) {
    //             // Si la opción está marcada, agréguela a la lista de opciones seleccionadas
    //             return [...prevSelectedOptions, value];
    //         } else {
    //             // Si la opción no está marcada, elimínela de la lista de opciones seleccionadas
    //             return prevSelectedOptions.filter((option) => option !== value);
    //         }
    //     });
    // };
  return (
    <FormControl component="fieldset">
      {/* <FormLabel component="legend">Seleccione una o más opciones:</FormLabel> */}
      <FormGroup aria-label="position" row>
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option.value}
            // eslint-disable-next-line react/prop-types
            control={<Checkbox  checked={selectedOptions.includes(option.value)}  onChange={handleChange}/>}
            label={option.label}
            labelPlacement="start"
          />
        ))}
      </FormGroup>
    </FormControl>
  );

}