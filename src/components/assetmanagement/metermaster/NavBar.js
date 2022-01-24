import { Typography, AppBar, Box, CssBaseline, Toolbar, IconButton, } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const NavBar=()=>{
    return(
        <div>
        <CssBaseline />
        <AppBar position="static" style={{ background: '#2E3B55' }}>
				<Toolbar>
					<IconButton size="large" edge="start" color="inherit" aria-label="open drawer">
						<HomeIcon style={{ color: 'black' }} />
					</IconButton>
					<IconButton size="large" edge="start" color="inherit" aria-label="open drawer">
						<ChevronRightIcon style={{ color: 'black' }} />
					</IconButton>
					<Typography>Asset Management</Typography>
				</Toolbar>
				<Typography style={{ marginRight: 'auto', marginLeft: '20px' }}>Meter Search</Typography>
			</AppBar>
        </div>

    )
}
export default NavBar