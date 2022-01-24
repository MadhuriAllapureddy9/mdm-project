import { Paper, Typography, Grid, TextField, MenuItem, CssBaseline } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import Buttons from '../components/Buttons';
//import { circles, divisions, regions } from '../utils/data';
import ResponsiveAppBar from '../components/Header';
import divisions from '../utils/divisions.json';
import subdivisions from '../utils/subDivisions.json';

const AMSummary = () => {
	const [ startDate, setStartDate ] = useState('');
	const [ endDate, setEndDate ] = useState('');

	const [ division, setDivision ] = useState([]);
	const [ subDivision, setSubDivision ] = useState([]);
	const [ newSubdiv, setNewSubdiv ] = useState('');

	const onDivision = (e) => {
		console.log(e.target.value);
		const subdivs = subdivisions.filter((div) => {
			return div.div_name === e.target.value;
		});
		console.log(subdivs);
		setDivision(e.target.value);
		setSubDivision(subdivs);
	};
	const onSubDivision = (e) => {
		console.log(e.target.value);
		setNewSubdiv(e.target.value);
	};

	const fromDate = (event) => {
		setStartDate(event.target.value);
		console.log(event.target.value);
	};

	const toDate = (event) => {
		setEndDate(event.target.value);
		console.log(event.target.value);
	};
	return (
		<div>
			<CssBaseline />
			<Box sx={{ flexGrow: 1 }}>
				<ResponsiveAppBar />
			</Box>
			<div style={{ padding: '20px' }} />
			<Box sx={{ width: '90%', marginLeft: '20px' }}>
				<Grid container direction={'row'} columnSpacing={5}>
					<Grid item xl={6} md={3} xs={12} sm={6}>
						<Typography variant="overline">Discom :</Typography>
					</Grid>
					<Grid item xl={6} md={3} xs={12} sm={6}>
						<Typography style={{ fontSize: '15px' }} variant="overline">
							TSSPDCL
						</Typography>
					</Grid>
					<Grid item xl={6} md={3} xs={12} sm={6}>
						<Typography variant="overline">Region : </Typography>
					</Grid>
					<Grid item xl={6} md={3} xs={12} sm={6}>
						<TextField select fullWidth variant="standard" color="primary" label="select region" />
					</Grid>
					<Grid item xl={6} md={3} xs={12} sm={6}>
						<Typography variant="overline">Circles : </Typography>
					</Grid>
					<Grid item xl={6} md={3} xs={12} sm={6}>
						<TextField select fullWidth variant="standard" color="primary" label="select circle" />
					</Grid>
					<Grid item xl={6} md={3} xs={12} sm={6}>
						<Typography variant="overline">Division : </Typography>
					</Grid>
					<Grid item xl={6} md={3} xs={12} sm={6}>
						<TextField
							name="division"
							select
							fullWidth
							variant="standard"
							color="primary"
							label="select division"
							onChange={onDivision}
							value={division}
						>
							{divisions.map((division) => (
								<MenuItem value={division.name} key={division.div_id}>
									{division.name}
								</MenuItem>
							))}
						</TextField>
					</Grid>
					<Grid item xl={6} md={3} xs={12} sm={6}>
						<Typography variant="overline">Sub Division : </Typography>
					</Grid>
					<Grid item xl={6} md={3} xs={12} sm={6}>
						<TextField
							select
							fullWidth
							variant="standard"
							color="primary"
							label="select subdivision"
							onChange={onSubDivision}
							value={newSubdiv}
						>
							{subDivision.map((subdiv) => (
								<MenuItem value={subdiv.name} key={subdiv.name}>
									{subdiv.name}
								</MenuItem>
							))}
						</TextField>
					</Grid>
					<Grid item xl={6} md={3} xs={12} sm={6}>
						<Typography variant="overline">Sections : </Typography>
					</Grid>
					<Grid item xl={6} md={3} xs={12} sm={6}>
						<TextField select fullWidth variant="standard" color="primary" label="select section" />
					</Grid>
					<Grid item xl={6} md={3} xs={6} sm={6}>
						<Typography variant="overline">From</Typography>
					</Grid>
					<Grid item xl={6} md={3} xs={6} sm={6}>
						<TextField
							name="fromDate"
							label="Enter Date"
							type="date"
							variant="standard"
							value={startDate}
							onChange={fromDate}
							sx={{ width: 190 }}
							InputLabelProps={{
								shrink: true
							}}
						/>
					</Grid>
					<Grid item xl={6} md={3} xs={6} sm={6}>
						<Typography variant="overline">To</Typography>
					</Grid>
					<Grid item xl={6} md={3} xs={6} sm={6}>
						<TextField
							name="toDate"
							label="Enter Date"
							type="date"
							variant="standard"
							value={endDate}
							onChange={toDate}
							sx={{ width: 190 }}
							InputLabelProps={{
								shrink: true
							}}
						/>
					</Grid>
				</Grid>
				<div style={{ minHeight: '30px' }} />
				<Buttons />
			</Box>
		</div>
	);
};

export default AMSummary;
