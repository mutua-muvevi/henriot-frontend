import React, { useState } from 'react';

import { Box, CircularProgress, Container, Card, Stepper, Step, StepLabel, Button, ButtonGroup,  Typography } from '@mui/material';
import { styled } from "@mui/system";


const StyledCompletedStepper = styled(Box)(({ theme }) => ({
	maxWidth: "90vw",
	margin: "auto"
}))

const StyledCompletedSetupWrapper = styled(Container)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	justifyContent: "center",
	textAlign: "center",
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

const StyledCompletedSetupUnitContent = styled(Box)(({ theme }) => ({

}))

const StyledButtonSection = styled(Box)(({ theme }) => ({
	// backroundColor: "green",
	margin: "20px auto",
	width: "200px !important"
}))

const CompletedStepper = ({children, handleReset, submitHandler, style, values, handleBack, isSubmitting, errors}) => {

	const val = Object.values(values.contact)

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
						JSON.stringify(values.contact)
					}
					<Typography variant="h6" gutterBottom sx={subHeaderFont}>
						Trusted contact
					</Typography>
					<StyledCompletedSetupUnitContent>
						{console.log("VALUES", val)}
					</StyledCompletedSetupUnitContent>
					{
						JSON.stringify(values.trusted_contact)
					}
				</StyledCompletedSetupUnit>

				<StyledCompletedSetupUnit>
					<Typography variant="h6" gutterBottom sx={subHeaderFont}>
						Identity summary
					</Typography>
					{
						JSON.stringify(values.identity)
					}
					{
						JSON.stringify(values.documents)
					}
				</StyledCompletedSetupUnit>

				<StyledCompletedSetupUnit>
					<Typography variant="h6" gutterBottom sx={subHeaderFont}>
						Other fiels summary
					</Typography>
					{
						JSON.stringify(values.disclosures)
					}
					{
						JSON.stringify(values.agreements)
					}
				</StyledCompletedSetupUnit>

				<StyledButtonSection>
					<Box sx={{ flex: '1 1 auto' }} />
					<ButtonGroup variant="contained" >
						<Button
							type="button"
							disabled={isSubmitting}
							onClick={handleBack}
							aria-label="Account setup reset button"
							>
								Back
						</Button>
						{console.log("SUB", errors)}
						<Button
							startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
							disabled={errors}
							type="submit" 
							aria-label="Account setup submit button"
							>
								Confirm
						</Button>
					</ButtonGroup>
				</StyledButtonSection>
			</StyledCompletedSetupWrapper>
		</StyledCompletedStepper>
	)
}

export default CompletedStepper