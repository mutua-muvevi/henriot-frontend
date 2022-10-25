import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { beneficiaryForm, bottomForm } from "./info";
import TextfieldWrapper from "src/components/forms/textfield/textfield";
import SelectField from "src/components/forms/select/select";

const INITIAL_FORM_STATE = {
	from: "",
	to: "",
	amount: 0,
	password:""
}

const FORM_VALIDATION = Yup.object().shape({
	from: Yup.string().required("Please verify who the transfer is from"),
	to: Yup.string().required("Please verify who the transfer is going to"),
	amount: Yup.number().min(0, "Te minimum amount required is any value greater than zero").required("Please the amount you wish to transfer"),
	password: Yup.string().required("Please provide the one time password sent to you")
})


const StyledSwiftTransferForm = styled(Box)(({ theme }) => ({
	marginTop: "30px"
}));


const StyledFormContainer = styled(Box)(({ theme }) => ({

}));

const users = [
	{ Name: "User One" },
	{ Name: "User Two" },
	{ Name: "User Three" },
	{ Name: "User Four" },
]

const beneficiaries = [
	{ Name: "Beneficiaries One" },
	{ Name: "Beneficiaries Two" },
	{ Name: "Beneficiaries Three" },
	{ Name: "Beneficiaries Four" },
]

const StyledTranferInputGroups = styled(Stack)(({ theme }) => ({
	width: "70%",
	marginLeft: "auto",
	marginRight: "auto",
	marginBottom: "30px"
}));


const SwiftTransferForm = () => {

	const submitHandler = (values) => {
		alert(JSON.stringify(values))
	}

	return (
		<StyledSwiftTransferForm>
			<Formik
				initialValues={{
					...INITIAL_FORM_STATE
				}}
				validationSchema={ FORM_VALIDATION }
				onSubmit = { submitHandler }
			>
				<Form>
					<StyledFormContainer>
						<StyledTranferInputGroups
							direction="column"
							alignItems="center"
							spacing={3}
						>
							<Typography variant="h6" color="text.secondary" >
								Sender and Receiver
							</Typography>
							<SelectField
								type="text"
								name="beneficiary"
								label="From"
								size="small"
								options={beneficiaries}
								required
							/>
						</StyledTranferInputGroups>

						<StyledTranferInputGroups
							direction="column"
							alignItems="center"
							spacing={3}
						>
						<Typography
							variant="body2"
							color="text.secondary"
							sx={{my:"10px"}}
						>
							or create a new one
						</Typography>
							{
								beneficiaryForm.map((el, i) => (
									<Box key={i} sx={{width:"100%"}}>
										{
											el.inputType === "textfield" ? (
												<TextfieldWrapper
													type="text"
													name={el.name}
													label={el.label}
													placeholder={el.placeholder}
													size="small"
													required={el.required}
											/>
											): (
												<SelectField
													name={el.name}
													label={el.label}
													placeholder={el.placeholder}
													size="small"
													required={el.required}
													options={users}
												/>
											)
										}
									</Box>
								))
							}
						</StyledTranferInputGroups>

						<StyledTranferInputGroups
							direction="column"
							alignItems="center"
							spacing={3}
							>

							<Typography
								variant="body2"
								color="text.secondary"
								sx={{my:"10px"}}
							>
								Payment Details
							</Typography>
							
							{
								bottomForm.map((el, i) => (
									<Box key={i} sx={{width:"100%"}}>
										{
											el.inputType === "textfield" ? (
												<TextfieldWrapper
													type="text"
													name={el.name}
													label={el.label}
													placeholder={el.placeholder}
													size="small"
													required={el.required}
												/>
											): el.inputType === "select" ? (
												<SelectField
													name={el.name}
													label={el.label}
													placeholder={el.placeholder}
													size="small"
													required={el.required}
													options={users}
												/>
											) : el.inputType === "radio" ? (
												<SelectField
													name={el.name}
													label={el.label}
													placeholder={el.placeholder}
													size="small"
													required={el.required}
													options={users}
												/>
											) : (
												<SelectField
													name={el.name}
													label={el.label}
													placeholder={el.placeholder}
													size="small"
													required={el.required}
													options={users}
												/>
											)
										}
									</Box>
								))
							}
						</StyledTranferInputGroups>

						<StyledTranferInputGroups
							direction="column"
							alignItems="center"
							spacing={3}
						>
							<Button variant="contained" type="submit" color="primary">
								Submit Request
							</Button>
						</StyledTranferInputGroups>
					</StyledFormContainer>
				</Form>
			</Formik>
		</StyledSwiftTransferForm>
	)
}

export default SwiftTransferForm