import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ClearButton() {
	return (
		<Stack spacing={2} direction="row">
			<Button variant="contained">Clear</Button>
		</Stack>
	);
}
