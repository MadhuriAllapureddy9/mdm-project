import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Container } from '@mui/material';
import { Tooltip } from '@mui/material';
import Menu from '@mui/material/Menu';
import { Grid } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const PTAppBar = () => {
	return (
		<AppBar position="static" style={{ background: '#2E3B55' }}>
			<Toolbar>
				<IconButton size="large" edge="start" color="inherit" aria-label="open drawer">
					<HomeIcon style={{ color: 'black' }} />
				</IconButton>
				<IconButton size="large" edge="start" color="inherit" aria-label="open drawer">
					<ChevronRightIcon style={{ color: 'black' }} />
				</IconButton>
				<Typography>Configuration</Typography>
			</Toolbar>
			<Typography style={{ marginRight: 'auto',marginLeft: '20px'  }}>Parameter Threshold Master</Typography>
		</AppBar>
	);
};
export default PTAppBar;
