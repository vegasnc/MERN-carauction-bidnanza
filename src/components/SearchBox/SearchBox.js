import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function SearchBox() {
  return (
    <Paper
      component="form"
      sx={{ display: 'flex', alignItems: 'center' }}
      variant="outlined"
      className='mt-2 mb-5'
      style={{
        borderColor: "black"
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for make, model or anything else..."
        inputProps={{ 'aria-label': 'search for make' }}
        size="small"
      />
      <IconButton type="button" sx={{ p: '8px' }} aria-label="search" size="small">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}