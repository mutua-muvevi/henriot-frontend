import React, { useState } from 'react';

import { Box, Stepper, Step, StepLabel, Button, Typography } from '@mui/material';
import { styled } from "@mui/system";

import SetupAbout from "../../pages/auth/setup/about";
import SetupIdentity from "../../pages/auth/setup/identity";
import SetupOthers from "../../pages/auth/setup/others";

const StyledStepper = styled(Stepper)(({ theme }) => ({
	marginBottom: "50px",
	minHeight: "70px",
}))

const StepperComponent = ({ steps }) => {

	const [activeStep, setActiveStep] = useState(0);
	const [skipped, setSkipped] = useState(new Set());

	const renderStepperBody = (activeStep) => {
		switch (activeStep) {
			case 0:
				return <SetupAbout/>;

			case 1:
				return <SetupIdentity/>;

			case 2: 
				return <SetupOthers/>;
		
			default:
				<div>Invalid</div>;
		}
	}

	const isStepOptional = (step) => {
		return step === 1;
	};

	const isStepSkipped = (step) => {
		return skipped.has(step);
	};

	const handleNext = () => {
		let newSkipped = skipped;

		if (isStepSkipped(activeStep)) {
			newSkipped = new Set(newSkipped.values());
			newSkipped.delete(activeStep);
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped(newSkipped);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleSkip = () => {
		if (!isStepOptional(activeStep)) {
			throw new Error("You can't skip a step that isn't optional.");
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);

		setSkipped((prevSkipped) => {
			const newSkipped = new Set(prevSkipped.values());
			newSkipped.add(activeStep);
			return newSkipped;
		});
	};
	
	const handleReset = () => {
		setActiveStep(0);
	};
	

	return (
		<Box sx={{ width: '100%' }}>
			<StyledStepper activeStep={activeStep}>
				{
					steps.map((label, index) => {
						const stepProps = {};
						const labelProps = {};

						if (isStepOptional(index)) {
							labelProps.optional = (
								<></>
							);
						}
						if (isStepSkipped(index)) {
							stepProps.completed = false;
						}
						return (
							<Step key={label} {...stepProps}>
								<StepLabel {...labelProps}>{label}</StepLabel>
							</Step>
						);
					})
				}
			</StyledStepper>

			{
				activeStep === steps.length ? (
					<>
						<Typography sx={{ mt: 2, mb: 1 }}>
							All steps completed - youre finished
						</Typography>
						<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
							<Box sx={{ flex: '1 1 auto' }} />
							<Button onClick={handleReset}>Reset</Button>
						</Box>
					</>
				) : (
					<>
						{renderStepperBody(activeStep)}
						<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
							<Button
								color="inherit"
								disabled={activeStep === 0}
								onClick={handleBack}
								variant="contained"
								sx={{ mr: 1 }}
							>
								Back
							</Button>
							<Box sx={{ flex: '1 1 auto' }} />
							{
								isStepOptional(activeStep) && (
								<Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
									Skip
								</Button>
								)
							}

							<Button onClick={handleNext} variant="contained">
								{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
							</Button>
						</Box>
					</>
				)
			}
		</Box>
	);
}

export default StepperComponent
