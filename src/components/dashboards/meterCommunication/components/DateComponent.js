import * as React from 'react';
import { TextField, Grid } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';


export default function BasicDatePicker() {
  const [value, setValue] = React.useState(null);

  return (

    <Grid container spacing={2}>
      <Grid>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="enter date"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>
    </Grid>
  );
}