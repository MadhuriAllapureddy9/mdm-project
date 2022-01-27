import * as React from 'react';
import { Box, Grid, Paper, Typography, TextField } from '@mui/material';
import ViewsDatePicker from './YearAndMonth';
import Buttons from './Buttons';


export default function TampersAndEvents() {
    return (
        <Box sx={{ width: '100%' }}>

            <Paper style={{ borderRadius: '20px' }} elevation={6}>
                <Grid container direction={'row'}>
                    <Grid item xl={6} md={3} xs={12} sm={6}>
                        <Typography variant="overline">Discom :</Typography>
                    </Grid>
                    <Grid item xl={6} md={3} xs={12} sm={6}>
                        <Typography style={{ fontSize: '15px' }} variant="overline">TSSPDCL</Typography>
                    </Grid>
                    <Grid item xl={6} md={3} xs={12} sm={6}>
                        <Typography variant="overline">Region :</Typography>
                    </Grid>
                    <Grid item xl={6} md={3} xs={12} sm={6}>
                        <TextField
                            select
                            fullWidth
                            variant="standard"
                            color="primary"
                            label="select region"
                        >
                        </TextField>

                    </Grid>

                    <Grid item xl={6} md={3} xs={12} sm={6}>
                        <Typography variant="overline">Circles :</Typography>
                    </Grid>
                    <Grid item xl={6} md={3} xs={12} sm={6}>
                        <TextField
                            select
                            fullWidth
                            variant="standard"
                            color="primary"
                            label="select circle"
                        >

                        </TextField>

                    </Grid>

                    <Grid item xl={6} md={3} xs={12} sm={6}>
                        <Typography variant="overline">Division :</Typography>
                    </Grid>
                    <Grid item xl={6} md={3} xs={12} sm={6}>
                        <TextField
                            select
                            fullWidth
                            variant="standard"
                            color="primary"
                            label="select division"
                        >
                        </TextField>
                    </Grid>

                    <Grid item xl={6} md={3} xs={12} sm={6}>
                        <Typography variant="overline">Sub Division :</Typography>
                    </Grid>
                    <Grid item xl={6} md={3} xs={12} sm={6}>
                        <TextField
                            select
                            fullWidth
                            variant="standard"
                            color="primary"
                            label="select subdivision"
                        >
                        </TextField>
                    </Grid>

                    <Grid item xl={6} md={3} xs={12} sm={6}>
                        <Typography variant="overline">Sections :</Typography>
                    </Grid>
                    <Grid item xl={6} md={3} xs={12} sm={6}>
                        <TextField
                            select
                            fullWidth
                            variant="standard"
                            color="primary"
                            label="select section"
                        >
        
                        </TextField>
                    </Grid>

                    <Grid item xl={6} md={3} xs={12} sm={6}>
                        <Typography variant="overline">Sub Stations :</Typography>
                    </Grid>
                    <Grid item xl={6} md={3} xs={12} sm={6}>
                        <TextField
                            select
                            fullWidth
                            variant="standard"
                            color="primary"
                            label="select substation"
                        >
                        </TextField>
                    </Grid>

                    <Grid item xl={6} md={3} xs={12} sm={6}>
                        <Typography variant="overline">Feeder :</Typography>
                    </Grid>
                    <Grid item xl={6} md={3} xs={12} sm={6}>
                        <TextField
                            select
                            fullWidth
                            variant="standard"
                            color="primary"
                            label="select Feeder"
                        >
                        </TextField>
                    </Grid>

                    <Grid item xl={6} md={3} xs={12} sm={6}>
                        <Typography variant="overline">DTR :</Typography>
                    </Grid>
                    <Grid item xl={6} md={3} xs={12} sm={6}>
                        <TextField
                            select
                            fullWidth
                            variant="standard"
                            color="primary"
                            label="select DTR"
                        >
                        </TextField>
                    </Grid>

                    <Grid item xl={6} md={3} xs={12} sm={6}>
                        <Typography variant="overline">Meter :</Typography>
                    </Grid>
                    <Grid item xl={6} md={3} xs={12} sm={6}>
                        <TextField
                            select
                            fullWidth
                            variant="standard"
                            color="primary"
                            label="Enter Meter"
                        >
                        </TextField>
                    </Grid>

                    <Grid item xl={6} md={3} xs={6} sm={6}>
                        <Typography variant="overline">From:</Typography>
                    </Grid>
                    <Grid item xl={6} md={3} xs={6} sm={6}>
                        <ViewsDatePicker />
                    </Grid>
                    <Grid Item xl={6} md={3} xs={6} sm={6}>
                        <Typography variant="overline">To:</Typography>
                    </Grid>
                    <Grid item xl={6} md={3} xs={6} sm={6}>
                        <ViewsDatePicker />
                    </Grid>
                </Grid>
                <div style={{ minHeight: '30px' }} />
                <Buttons />
            </Paper>
        </Box>


    );
}