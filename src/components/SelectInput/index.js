import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectLabels(props) {
  const [age, setAge] = React.useState('');

  let selectLabel = props.label;
  let selectOptionArr = props.options;

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth size="small">
        <InputLabel id="search-select-label">{ selectLabel }</InputLabel>
        <Select
          labelId="search-select-label"
          // value={ selectLabel }
          onChange={handleChange}
          label={selectLabel}
        >
          <MenuItem value={-1}>None</MenuItem>
          {
            selectOptionArr.map((option) => (
              <MenuItem value={ option.value }>{option.label}</MenuItem>
            ))

          }
        </Select>
      </FormControl>
    </div>
  );
}