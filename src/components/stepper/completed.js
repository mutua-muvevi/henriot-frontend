import React, { useState } from 'react';

import { Box, Stepper, Step, StepLabel, Button, Typography } from '@mui/material';
import { styled } from "@mui/system";


const CompletedStepper = ({children, handleReset, handleSubmit, style}) => {
	const StyledCompletedStepper = styled(Box)(({ theme }) => ({
		backgroundColor: ""
	}))

	return (
		<StyledCompletedStepper style={style}>
			<Typography sx={{ mt: 2, mb: 1 }}>
				All steps completed - youre finished
			</Typography>
			<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
				<Box sx={{ flex: '1 1 auto' }} />
				<Button onClick={handleSubmit}>Reset</Button>
				<Button onClick={handleReset}>Submit</Button>
			</Box>
		</StyledCompletedStepper>
	)
}

export default CompletedStepper