import React, { useState } from 'react';

import { Box, Container, Stepper, Step, StepLabel, Typography } from '@mui/material';
import { styled } from "@mui/system";

import SetupAbout from "../../pages/auth/setup/about";
import SetupIdentity from "../../pages/auth/setup/identity";
import SetupOthers from "../../pages/auth/setup/others";
import SimpleCard from "../../components/card/simple";
import CompletedStepper from "./completed";

const StyledStepper = styled(Stepper)(({ theme }) => ({
	marginBottom: "10px",
	minHeight: "70px",
	padding: "0px",
	backgroundColor: theme.palette.background.dark,
	display: "flex",
	flexDirectin: "column",
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center",
	width: "100%",

	".MuiStepLabel-label": {
		color: "grey",
	},
	".Mui-completed": {
		color: "white",
	}
}))

const StyledStepperContent = styled(Container)(({theme}) => ({

}))

const StepperComponent = ({ steps, styles }) => {

	const [activeStep, setActiveStep] = useState(0);
	const [skipped, setSkipped] = useState(new Set());

	const [stepError, setStepError] = useState(false)

	const isStepFailed = (step) => {
		setStepError(true)
		return step === 1;
	};


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

	// const handleSkip = () => {
	// 	if (!isStepOptional(activeStep)) {
	// 		throw new Error("You can't skip a step that isn't optional.");
	// 	}

	// 	setActiveStep((prevActiveStep) => prevActiveStep + 1);

	// 	setSkipped((prevSkipped) => {
	// 		const newSkipped = new Set(prevSkipped.values());
	// 		newSkipped.add(activeStep);
	// 		return newSkipped;
	// 	});
	// };
	
	const handleReset = () => {
		setActiveStep(0);
	};
	
	const handleSubmit = () => {
		setActiveStep(0);
	};
	
	
	const renderStepperBody = (activeStep) => {
		switch (activeStep) {
			case 0:
				return (
					<SetupAbout 
						activeStep={activeStep}
						handleBack={handleBack}
						handleNext={handleNext}
						steps={steps}
						/>
				);

			case 1:
				return(
					<SetupIdentity
						activeStep={activeStep}
						handleBack={handleBack}
						handleNext={handleNext}
						steps={steps}
						/>
					);

			case 2: 
				return (
					<SetupOthers
						activeStep={activeStep}
						handleBack={handleBack}
						handleNext={handleNext}
						steps={steps}
					/>
				);
		
			default:
				<div>Invalid Choice</div>;
		}
	}

	return (
		<SimpleCard>
			<Box sx={{ width: '100%' }}>
				<StyledStepper activeStep={activeStep} >
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

							// with error here

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
						<CompletedStepper handleSubmit={handleSubmit} handleReset={handleReset} style={styles}/>
					) : (
						<StyledStepperContent maxWidth="xl" style={styles}>
							{renderStepperBody(activeStep)}
						</StyledStepperContent>
					)
				}
			</Box>
		</SimpleCard>
	);
}

export default StepperComponent
