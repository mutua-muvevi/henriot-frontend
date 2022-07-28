import React, { useState } from 'react';

import { Box, Container, Card, Stepper, Step, StepLabel, Button, ButtonGroup,  Typography } from '@mui/material';
import { styled } from "@mui/system";

const StyledCompletedSetupWrapper = styled(Container)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	justifyContent: "center",
	textAlign: "center"
}))

const headerFont = {
	marginTop: 2,
	marginBottom: 1,
	fontWeight: "700"
}

const subHeaderFont = {
	fontWeight: "700",
	marginBottom: "10px"
}

const StyledCompletedSetupUnit = styled(Box)(({ theme }) => ({
	padding: "10px",
	borderRadius: theme.shape.default,
	backgroundColor: "white",
	filter: "drop-shadow(2px 2px 10px #ccc)",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "flex-start",
	textAlign: "center",
	width: "100%",
	margin: "10px auto"
}))

const StyledButtonSection = styled(Box)(({ theme }) => ({
	backroundColor: "green",
	margin: "20px auto",
	width: "200px !important"
}))

const CompletedStepper = ({children, handleReset, submitHandler, style, values}) => {
	const StyledCompletedStepper = styled(Box)(({ theme }) => ({
		backgroundColor: ""
	}))

	return (
		<StyledCompletedStepper style={style}>
			<StyledCompletedSetupWrapper maxWidth="xl">
				<Typography variant="h5" gutterBottom sx={headerFont}>
					Account setup summary
				</Typography>

				<StyledCompletedSetupUnit>
					<Typography variant="h6" gutterBottom sx={subHeaderFont}>
						About summary
					</Typography>
					{
						JSON.stringify(values)
					}
				</StyledCompletedSetupUnit>

				<StyledCompletedSetupUnit>
					<Typography variant="h6" gutterBottom sx={subHeaderFont}>
						Identity summary
					</Typography>
					{
						JSON.stringify(values)
					}
				</StyledCompletedSetupUnit>

				<StyledCompletedSetupUnit>
					<Typography variant="h6" gutterBottom sx={subHeaderFont}>
						Other fiels summary
					</Typography>
					{
						JSON.stringify(values)
					}
				</StyledCompletedSetupUnit>

				<StyledButtonSection>
					<Box sx={{ flex: '1 1 auto' }} />
					<ButtonGroup variant="contained" >
						<Button onClick={handleReset} aria-label="Account setup reset button">
							Reset
						</Button>
						<Button type="submit" aria-label="Account setup submit button">
							Confirm
						</Button>
					</ButtonGroup>
				</StyledButtonSection>
			</StyledCompletedSetupWrapper>
		</StyledCompletedStepper>
	)
}

export default CompletedStepper