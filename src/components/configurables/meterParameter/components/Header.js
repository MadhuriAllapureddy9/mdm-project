import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ListSubheader from '@mui/material/ListSubheader';
import Paper from '@mui/material/Paper';
import SvgIcon from '@mui/material/SvgIcon';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};



      
      


export default function SearchAppBar() {
  return (
    <Paper elevation={15}>
    <Box sx={{ flexGrow: 20 }}>
      <AppBar position="static">
        <Toolbar>
        <HomeIcon />
      
      
        <ThemeProvider theme={theme}>
      <Typography variant="h6" >Configurables</Typography>
      
    </ThemeProvider>
  
        </Toolbar>
      </AppBar>

    
  
      <ListSubheader>
        
      <Typography variant="subtitle1" xs >MeterParameters</Typography>
     
      
    </ListSubheader>
  
    
           
          
  
    
    </Box>
    </Paper>
  );
}

