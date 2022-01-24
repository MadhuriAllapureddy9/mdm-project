import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import AddParameterModal from './AddParameterModal-copy';
import DropDownCategory from './DropDownCategory';
import DropDownPhase from './DropDownPhase';
import ParameterThresholdTable from './ParameterThresholdTable';
import SearchField from './SearchField';
import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
import DDL from './DDL';

const PTMCard = () => {
	return (
		<Box sx={{ display: 'flex', p: 1, m: 2, bgcolor: 'background.paper', flexDirection: 'column' }}>
			<div align="left">
				<AddParameterModal />
			</div>
			<Typography variant="h6" align="left" sx={{ pt: 2, m: 0 }}>
				Please Select:
			</Typography>

			<Grid container direction="row" sx={{ flexGrow: 1, p: 1, m: 0 }} spacing={2}>
				<form>
					<Grid item xs={12}>
						<DDL />
					</Grid>
				</form>
			</Grid>
			<Grid sx={{ pt: 1, pb: 2 }}>
				<SearchField />
			</Grid>
			<ParameterThresholdTable />
		</Box>
	);
};

export default PTMCard;
