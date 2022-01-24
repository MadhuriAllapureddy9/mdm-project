import React, { useState } from 'react';
import { Card, Grid } from '@mui/material';
import { TextField } from '@mui/material';
import Button from '@material-ui/core/Button';
import { Stack } from '@mui/material';
import { Box } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { SubStation } from './DropDown';

const Change = () => {
	const initialValues = {
		existingDeviceSerialNumber: '',
		dateOfFailure: '',
		newDeviceSerialNumber: '',
		dateOfInstallation: '',
		reasonForChange: '',
		status: ''
	};

	const [ values, setValues ] = useState(initialValues);
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('InputFields of Change', values);
		setValues({
			existingDeviceSerialNumber: '',
			dateOfFailure: '',
			newDeviceSerialNumber: '',
			dateOfInstallation: '',
			reasonForChange: '',
			status: ''
		});
	};
	return (
		<form action="" onSubmit={handleSubmit}>
			<Card elevation={5}>
				<Box
					component="form"
					sx={{
						'& .MuiTextField-root': { m: 2, width: '25ch' }
					}}
					noValidate
					autoComplete="off"
				>
					<CssBaseline />

					<Box sx={{ display: 'flex', p: 1, m: 1, bgcolor: 'background.paper', flexDirection: 'row' }} />

					<div>
						<Grid container direction="row" justifyContent="center" alignContent="center">
							<TextField
								name="existingDeviceSerialNumber"
								id="outlined-select-currency-native"
								required
								label="Existing Device Serial Number :"
								value={values.existingDeviceSerialNumber}
								onChange={handleInputChange}
							/>

							<TextField
								name="dateOfFailure"
								id="commisiondate"
								label="Date of Failure "
								type="date"
								value={values.dateOfFailure}
								onChange={handleInputChange}
								sx={{ width: 220 }}
								InputLabelProps={{
									shrink: true
								}}
							/>
						</Grid>
					</div>
					<Grid container direction="row" justifyContent="center" alignContent="center">
						<TextField
							name="newDeviceSerialNumber"
							id="outlined-select-currency-native"
							required
							label="New Device Serial Number :"
							value={values.newDeviceSerialNumber}
							onChange={handleInputChange}
						/>

						<TextField
							name="dateOfInstallation"
							label="Date of Installation "
							type="date"
							value={values.dateOfInstallation}
							onChange={handleInputChange}
							sx={{ width: 220 }}
							InputLabelProps={{
								shrink: true
							}}
						/>
					</Grid>

					<Grid container direction="row" justifyContent="center" alignContent="center">
						<TextField
							name="reasonForChange"
							id="outlined-select-currency-native"
							required
							label="Reason For Change :"
							value={values.reasonForChange}
							onChange={handleInputChange}
							SelectProps={{
								native: true
							}}
						/>
						<TextField
							name="status"
							id="outlined-select-currency-native"
							select
							required
							label="Status :"
							value={values.status}
							onChange={handleInputChange}
							SelectProps={{
								native: true
							}}
						>
							{SubStation.map((option) => (
								<option key={option.label} value={option.label}>
									{option.label}
								</option>
							))}
						</TextField>
					</Grid>
				</Box>
				<Stack spacing={2} direction="row" justifyContent="center">
					<Button variant="contained" color="primary" type="submit" onClick={handleSubmit}>
						Submit
					</Button>
					<Button variant="outlined" color="error">
						Clear
					</Button>
				</Stack>
				<br />
			</Card>
		</form>
	);
};
export default Change;
