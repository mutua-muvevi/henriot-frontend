import React, { useState } from 'react';

import { Box, Stepper, Step, StepLabel, Button, ButtonGroup,  Typography } from '@mui/material';
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
				<ButtonGroup variant="contained" >
					<Button onClick={handleSubmit} aria-label="Account setup reset button">
						Reset
					</Button>
					<Button onClick={handleReset}  aria-label="Account setup submit button">
						Submit
					</Button>
				</ButtonGroup>
			</Box>
		</StyledCompletedStepper>
	)
}

export default CompletedStepper