import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	'&:not(:last-child)': {
		borderBottom: 0
	},
	'&:before': {
		display: 'none'
	}
}));

const AccordionSummary = styled((props) => (
	<MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
	flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(90deg)'
	},
	'& .MuiAccordionSummary-content': {
		marginLeft: theme.spacing(1)
	}
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: '1px solid rgba(0, 0, 0, .125)'
}));

export default function CustomizedAccordions() {
	const [ expanded, setExpanded ] = useState('panel0');
	const dispatch = useDispatch();

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	return (
		<div>
			<Accordion expanded={expanded === 'panel0'} onChange={handleChange('panel0')}>
				<AccordionSummary aria-controls="panel0d-content" id="panel0d-header">
					<Typography>Dashboards</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography
						onClick={() => {
							dispatch({ type: 'meter-communication' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Meter Communication
					</Typography>
				</AccordionDetails>
				<AccordionDetails>
					<Typography
						onClick={() => {
							dispatch({ type: 'tampers-events' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Tampers and Events
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
				<AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
					<Typography>Asset Management</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography
						gutterBottom
						onClick={() => {
							dispatch({ type: 'meter-master' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Meter Master
					</Typography>
					<Typography
						gutterBottom
						onClick={() => {
							dispatch({ type: 'dcu-master' });
						}}
						style={{ cursor: 'pointer' }}
					>
						DCU Master
					</Typography>
					<Typography
						onClick={() => {
							dispatch({ type: 'sim-master' });
						}}
						style={{ cursor: 'pointer' }}
					>
						SIM Master
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
				<AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
					<Typography>Master Data Management</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography
						gutterBottom
						onClick={() => {
							dispatch({ type: 'billing-determinants' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Billing Determinants
					</Typography>
					<Typography
						onClick={() => {
							dispatch({ type: 'pt-master' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Parameter Threshold Master
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
				<AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
					<Typography>Reports</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography
						gutterBottom
						onClick={() => {
							dispatch({ type: 'am-summary' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Asset Mgmt-Summary
					</Typography>
					<Typography
						gutterBottom
						onClick={() => {
							dispatch({ type: 'am-installed' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Asset Mgmt-Installed
					</Typography>
					<Typography
						gutterBottom
						onClick={() => {
							dispatch({ type: 'am-communicated' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Asset Mgmt-Communicated
					</Typography>
					<Typography
						gutterBottom
						onClick={() => {
							dispatch({ type: 'am-commissioned' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Asset Mgmt-Commissioned
					</Typography>
					<Typography
						gutterBottom
						onClick={() => {
							dispatch({ type: 'load-profile-report' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Load Profile Report
					</Typography>
					<Typography
						gutterBottom
						onClick={() => {
							dispatch({ type: 'power-factor-report' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Power Factor Report
					</Typography>
					<Typography
						gutterBottom
						onClick={() => {
							dispatch({ type: 'billing-demand-report' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Billing Demand Report
					</Typography>
					<Typography
						gutterBottom
						onClick={() => {
							dispatch({ type: 'billing-energy-report' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Billing Energy Report
					</Typography>
					<Typography
						gutterBottom
						onClick={() => {
							dispatch({ type: 'billing-consumption-report' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Billing Consumption Report
					</Typography>
					<Typography
						gutterBottom
						onClick={() => {
							dispatch({ type: 'event-summary-report' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Event Summary Report
					</Typography>
					<Typography
						onClick={() => {
							dispatch({ type: 'event-individual-report' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Event Individual Report
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
				<AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
					<Typography>Configurables</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography
						onClick={() => {
							dispatch({ type: 'meter-parameter' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Meter Parameter
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
