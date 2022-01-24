import React, { useState } from 'react';
import { Stack, Button, Box, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';


import { Regions, Circles, Divisions, SubDivisions, Sectionss, SubStationss, Feeders, DTRS } from './Dropdowns'

export default function ContentComponent() {


  const initialValues = {
    Region: "",
    Circle: "",
    Division: "",
    SubDivision: "",
    Sections: "",
    SubStations: "",
    Feeder: "",
    DTR: "",
    METER: "",
    Fromdate: "",
    todate: "",
  };

  const [values, setValues] = useState(initialValues);
  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({
      ...values, [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", values);
    setValues({
      Region: "",
      Circle: "",
      Division: "",
      SubDivision: "",
      Sections: "",
      SubStations: "",
      Feeder: "",
      DTR: "",
      METER: "",
      Fromdate: "",
      todate: "",
    })
  }


  return (
    <>
      <Box sx={{ display: 'flex', p: 1, m: 1, bgcolor: 'background.paper', flexDirection: 'row', }}>

      </Box>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

        <Grid item xs={3}>
          <Typography >
            Discom : TSSPDCL
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-select-currency-native"
            select
            fullWidth
            label="Region"
            variant="outlined"

            name="Region"
            value={values.Region}
            onChange={handleInputChange}
          >
            {Regions.map(item => (
              <option key={item.label} value={item.label}>
                {item.label}
              </option>
            ))}

          </TextField>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-select-currency-native"
            select
            fullWidth
            required label="Circle"

            name="Circle"
            value={values.Circle}
            onChange={handleInputChange}
          >
            {Circles.map(item => (
              <option key={item.label} value={item.label}>
                {item.label}
              </option>
            ))}

          </TextField>
        </Grid>

        <Grid item xs={3}>

          <TextField
            id="outlined-select-currency-native"
            select
            fullWidth
            required label="Division"
            SelectProps={{
              native: true,
            }}
            name="Division"
            value={values.Division}
            onChange={handleInputChange}
          >
            {Divisions.map(item => (
              <option key={item.label} value={item.label}>
                {item.label}
              </option>
            ))}

          </TextField>
        </Grid>

        <Grid item xs={3}>
          <TextField
            id="outlined-select-currency-native"
            select
            fullWidth
            required label="Sub Division"
            SelectProps={{
              native: true,
            }}
            name="SubDivision"
            value={values.SubDivision}
            onChange={handleInputChange}
          >
            {SubDivisions.map(item => (
              <option key={item.label} value={item.label}>
                {item.label}
              </option>
            ))}

          </TextField>
        </Grid>

        <Grid item xs={3}>
          <TextField
            id="outlined-select-currency-native"
            select
            fullWidth
            required label="Sections"
            SelectProps={{
              native: true,
            }}
            name="Sections"
            value={values.Sections}
            onChange={handleInputChange}
          >
            {Sectionss.map(item => (
              <option key={item.label} value={item.label}>
                {item.label}
              </option>
            ))}

          </TextField>
        </Grid>

        <Grid item xs={3}>
          <TextField
            id="outlined-select-currency-native"
            select
            fullWidth
            required label="Sub station"
            SelectProps={{
              native: true,
            }}
            name="SubStations"
            value={values.SubStations}
            onChange={handleInputChange}
          >
            {SubStationss.map(item => (
              <option key={item.label} value={item.label}>
                {item.label}
              </option>
            ))}

          </TextField>
        </Grid>

        <Grid item xs={3}>
          <TextField
            id="outlined-select-currency-native"
            select
            fullWidth
            required label="Feeder"

            name="Feeder"
            value={values.Feeder}
            onChange={handleInputChange}
          >
            {Feeders.map(item => (
              <option key={item.label} value={item.label}>
                {item.label}
              </option>
            ))}

          </TextField>
        </Grid>

        <Grid item xs={3}>
          <TextField
            id="outlined-select-currency-native"
            select
            fullWidth
            required label="DTR"

            name="DTR"
            value={values.DTR}
            onChange={handleInputChange}
          >
            {DTRS.map(item => (
              <option key={item.label} value={item.label}>
                {item.label}
              </option>
            ))}

          </TextField>
        </Grid>




        <Grid item xs={3}>
          <TextField
            id="outlined-select-currency-native"
            required label="METER"
            name="METER"
            value={values.METER}

            onChange={handleInputChange}
          >

          </TextField>
        </Grid>
        <Grid item xs={6}>

        </Grid>

        <Grid item xl={6} md={3} xs={6} sm={6}>

          <TextField name='Fromdate' label="Fromdate" type="date" value={values.date} sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xl={6} md={3} xs={6} sm={6}>
          <TextField

            name='todate'

            label="Todate"

            type="date"

            value={values.date}

            sx={{ width: 220 }}

            InputLabelProps={{

              shrink: true,

            }}

            onChange={handleInputChange}

          />
        </Grid>


        <Grid item xs={12} md={12}>
          <Stack spacing={2} direction="row" justifyContent="center">
            <Button variant="contained" color="success" onClick={handleSubmit}>SUBMIT </Button>
            <Button variant="contained">CLEAR</Button>
          </Stack>
        </Grid>

      </Grid>
    </>
  );
}
