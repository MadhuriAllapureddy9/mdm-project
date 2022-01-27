import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Typography, Grid} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';

import ContentComponent from './ContentComponent';

export default function MenuAppBar() {


  return (
    <Box sx={{ flexGrow: 100 }}>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">

        <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 10 }}
              >
                <HomeTwoToneIcon />
              </IconButton>
              <Typography align='left' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Dashboard
              </Typography>
              <Typography align='right' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Meter Communication
              </Typography>
            </Toolbar>

          </AppBar>
          </Box>





          <Grid container rowSpacing={3} columnSpacing={2}>
            <Grid item xs={1}>

            </Grid>
            <Grid item xs={10}>
              <ContentComponent />
            </Grid>

          </Grid>

      

    </Box>
  );
}