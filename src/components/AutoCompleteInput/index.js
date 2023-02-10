import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      size="small"
      renderInput={(params) => <TextField {...params} label="Good Brands" />}
      style={{ background: "white", borderRight: "0px" }}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'Ford' },
  { label: 'Chevrolet' },
  { label: 'Mercedes-Benz' },
  { label: 'BMW' },
  { label: 'Porsche' },
  { label: "Dodge" },
  { label: 'Jeep' },
  { label: 'Plymouth' },
  { label: 'Lamborghini' },
  { label: 'Cadillac' },
  {
    label: 'Toyota'
  },
  {
    label: 'Bentley'
  },
  { label: 'Land Rover' },
  { label: 'Ferrari' },
  {
    label: 'Volkswagen'
  },
  { label: 'Jaguar' },
  { label: 'Pontiac' },
  { label: 'GMC' },
  { label: 'Ram' },
  {
    label: 'Rolls-Royce'
  },
  { label: 'Tesla' },
  { label: 'Honda' },
  { label: 'Oldsmobile' },
  { label: 'Buick' },
  { label: 'Lexus' },
  { label: 'Lincoln' },
  { label: 'Maserati' },
  { label: 'Mini' },
  { label: 'Chrysler' },
  { label: 'McLaren' },
  { label: 'MG' },
  { label: 'Audi' }
];