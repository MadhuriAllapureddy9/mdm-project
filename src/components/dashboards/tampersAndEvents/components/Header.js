import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
//import { makeStyles } from '@mui/styles';


const ResponsiveAppBar = () => {
    // const classes  = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: '#2E3B55' }}>
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="open drawer">
                        <HomeIcon style={{ color: 'black' }} />
                    </IconButton>
                    <IconButton size="large" edge="start" color="inherit" aria-label="open drawer">
                        <ChevronRightIcon style={{ color: 'black' }} />
                    </IconButton>
                    <Typography>Dashboards</Typography>
                </Toolbar>
                <Typography style={{ marginRight: 'auto' }}>Tampers And Events</Typography>
            </AppBar>
        </Box>
    );
};
export default ResponsiveAppBar;

