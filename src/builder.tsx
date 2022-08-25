import { Autocomplete, Button, Input, TextField } from '@mui/material';
import React from 'react';
import commandList from './helpers/commandList';

function Builder() {
  return (
    <>
        <Autocomplete 
        id="grouped-demo" 
        options={commandList}
        groupBy={ (option) => option.type }
        getOptionLabel={(option) => option.name}
        sx={{ width: 200 }}
        renderInput={(params) => <TextField {...params} label="Select input" />}
        /> <Button>Add</Button>
    </>
  );
}

export default Builder;
