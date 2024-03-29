import React, { useState } from "react";
import PropType from "prop-types";

import {
	Box,
	Button,
	CircularProgress,
	Stepper,
	Step,
	StepLabel,
	ButtonGroup,
	Paper,
	Typography,
	Stack,
} from "@mui/material";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";
import { styled } from "@mui/system";
import { alpha } from '@mui/material/styles';

import { Formik, Form } from "formik";

import Scrollbar from "../../../components/UI/Scrollbar";

import validationSchema from "./model/validation";
import serviceModel from "./model/model";
import formInitialValues from "./model/initialvalues";

import PrimaryDetails from "./forms/primary";

import { connect } from "react-redux";
import SecondaryInfo from "./forms/secondary";
import AgreementsDetails from "./forms/agreements";
import ReviewRegistration from "./review/review";
import FormSuccess from "src/components/UI/formsuccess";
import { registerUser } from "src/redux/auth/actions";
import PasswordInfo from "./forms/password";
import OtherDetails from "./forms/others";
import DocumentsSection from "./forms/documents";

const StyledParentContainer = styled(Stack)(({ theme }) => ({
	height:"100%"
}));

const StyledRegisterModal = styled(Paper)(({ theme }) => ({
	borderRadius: theme.shape.borderRadius,
	width: "80vw",
}));

const StyledStepper = styled(Stepper)(({ theme }) => ({
	backgroundColor: theme.palette.background.tabHeader,
	paddingTop: "15px",
	paddingBottom: "15px",
	borderTopLeftRadius: theme.shape.borderRadius,
	borderTopRightRadius: theme.shape.borderRadius,
	marginBottom: "20px",
}));

const StyledStepperItems = styled(Box)(({ theme }) => ({
	padding: "20px",
	height: "60vh",
}));

const StyledStepConnector = styled(StepConnector)(({ theme }) => ({
	[`&.${stepConnectorClasses.active}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundColor: theme.palette.background.paper,
		},
	},
	[`& .${stepConnectorClasses.line}`]: {
		height: 1,
		border: 0,
		backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[800] : theme.palette.grey[100],
		borderRadius: 4,
	},
}));

const StyledSteps = styled(Step)(({ theme }) => ({
	"& .MuiStepLabel-root .Mui-completed": {
		color: theme.palette.text.primary, // circle color (COMPLETED)
		fontWeight: "bold",
	},
	"& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel": {
		color: alpha(theme.palette.text.primary, 0.2), // Just text label (COMPLETED)
		fontWeight: "bold",
	},
	"& .MuiStepLabel-root .Mui-active": {
		//color: 'secondary.main', // circle color (ACTIVE)
		color: theme.palette.text.primary,
		fontWeight: "bold",
	},
	"& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel": {
		color: theme.palette.text.primary, // Just text label (ACTIVE)
	},
	"& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
		fill: theme.palette.primary.main, // circle's number (ACTIVE)
	},
}));

const StyledStepLabel = styled(StepLabel)(({ theme }) => ({
	"& .MuiStepLabel-label": {
		color: theme.palette.text.primary,
	},
}));

const StyledButtonGroup = styled(ButtonGroup)(({ theme }) => ({}));

const StyledButton = styled(Button)(({ theme }) => ({
	width: "150px",
}));

const Register = ({ open, close, user, register }) => {
	const steps = ["Contact", "User Identity", "Other", "Trust & Agreements", "Documents", "Password", "Review Registration"];
	const { formId, formField } = serviceModel;

	const [activeStep, setActiveStep] = useState(0);
	const currentValidationSchema = validationSchema[activeStep];
	const isLastStep = activeStep === steps.length - 1;

	function submitForm(values, actions) {
		//changed from false to true
		actions.setSubmitting(true);
		
		register(values);

		setActiveStep(activeStep + 1);
	}

	function handleSubmit(values, actions) {
		console.log("Values from submit", values)
		if (isLastStep) {
			submitForm(values, actions);
		} else {
			setActiveStep(activeStep + 1);
			actions.setTouched({});
			actions.setSubmitting(false);
		}
	}

	function handleBack() {
		setActiveStep(activeStep - 1);
	}

	return (
		<StyledParentContainer justifyContent="center" alignItems="center">
			<Stack direction="column" spacing={5}>
				<Stack direction="column" spacing={1.5}>
					<Typography variant="h2" color="text.primary">
						Register
					</Typography>
					<Typography variant="h6" color="text.primary">
						Please fill the form below to register
					</Typography>
				</Stack>
				<StyledRegisterModal>
					<StyledStepper activeStep={activeStep} connector={<StyledStepConnector />}>
						{steps.map((label) => (
							<StyledSteps key={label}>
								<StyledStepLabel>{label}</StyledStepLabel>
							</StyledSteps>
						))}
					</StyledStepper>

					<Scrollbar sx={{height:"63vh"}}>{console.log("Active Step", activeStep)}
						<StyledStepperItems>
							{activeStep === steps.length ? (
								<FormSuccess title="SUCCESS!!" text="You have registered Successfully" />
							) : (
								<Formik
									initialValues={formInitialValues}
									validationSchema={currentValidationSchema}
									onSubmit={handleSubmit}
								>
									{({ isSubmitting, setFieldValue, values }) => (
										<Form id={formId}>
											{activeStep === 0 ? (
												<PrimaryDetails
													formField={formField}
													setFieldValue={setFieldValue}
													values={values}
												/>
											) : activeStep === 1 ? (
												<SecondaryInfo
													values={values}
													formField={formField}
													setFieldValue={setFieldValue}
												/>
											) : activeStep === 2 ? (
												<OtherDetails
													values={values}
													formField={formField}
													setFieldValue={setFieldValue}
												/>
											) : activeStep === 3 ? (
												<AgreementsDetails
													values={values}
													formField={formField}
													setFieldValue={setFieldValue}
												/>
											) : activeStep === 4 ? (
												<DocumentsSection
													values={values}
													formField={formField}
													setFieldValue={setFieldValue}
													activeStep={activeStep}
												/>
											) : activeStep === 5 ? (
												<PasswordInfo
													values={values}
													formField={formField}
													setFieldValue={setFieldValue}
												/>
											) : activeStep === 6 ? (
												<ReviewRegistration values={values} />
											) : (
												<div>notfound</div>
											)}

											<ButtonGroup sx={{ mt: 3, mb: 3 }}>
												{activeStep !== 0 && (
													<StyledButton onClick={handleBack} variant="contained" color="error">
														Back
													</StyledButton>
												)}
												<StyledButtonGroup>
													<StyledButton
														disabled={isSubmitting}
														type="submit"
														variant="contained"
														color="primary"
													>
														{isLastStep ? "Confirm" : "Next"}
													</StyledButton>

													{isSubmitting && <CircularProgress size={24} />}
												</StyledButtonGroup>
											</ButtonGroup>
										</Form>
									)}
								</Formik>
							)}
						</StyledStepperItems>
					</Scrollbar>
				</StyledRegisterModal>
			</Stack>
		</StyledParentContainer>
	);
};

Register.proptype = {
	close: PropType.func,
	open: PropType.bool,
};

const mapStateToProps = ({ auth, user }) => ({});

const mapDispatchToProps = (dispatch) => ({
	register: (values) => dispatch(registerUser(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
