import { Box, Button, Card, Radio, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { beneficiaryForm, bottomForm } from "./info";
import TextfieldWrapper from "src/components/forms/textfield/textfield";
import SelectField from "src/components/forms/select/select";
import CheckBoxField from "src/components/forms/checkbox/checkbox";
import RadioField from "src/components/forms/radio/radio";

const INITIAL_FORM_STATE = {
	existing_beneficiary:"",
	beneficiary_name:"",
	beneficiary_address:"",
	beneficiary_country:"",
	beneficiary_account_number:"",
	beneficiary_iban:"",
	beneficiary_swift_code:"",
	beneficiary_bank_name:"",
	beneficiary_bank_country:"",
	beneficiary_bank_address:"",
	from:"",
	amount:"",
	urgent:"",
	fees:"",
	message:"",
	password:"",
}

const FORM_VALIDATION = Yup.object().shape({
	existing_beneficiary: Yup.string(),
	beneficiary_name: Yup.string().required("Required"),
	beneficiary_address: Yup.string().required("Required"),
	beneficiary_country: Yup.string().required(""),
	beneficiary_account_number: Yup.string().required("Required"),
	beneficiary_iban: Yup.string().required("Required"),
	beneficiary_swift_code: Yup.string().required("Required"),
	beneficiary_bank_name: Yup.string().required("Required"),
	beneficiary_bank_country: Yup.string().required("Required"),
	beneficiary_bank_address: Yup.string().required("Required"),
	from: Yup.string().required("Required"),
	amount: Yup.number().min(0, "Te minimum amount required is any value greater than zero").required("Please the amount you wish to transfer"),
	urgent: Yup.string(),
	fees: Yup.string().required("Required"),
	message: Yup.string().required("Required"),
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
								name="existing_beneficiary"
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
													multiline
													maxRows={el.multitext ? el.multitext : 5}
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
												<RadioField
													name={el.name}
													defaultValue={el.defaultValue}
													placeholder={el.placeholder}
													size="small"
													required={el.required}
													radioItems={el.radioItems}
													label={el.label}
												/>
											) : (
												<CheckBoxField
													name={el.name}
													label={el.label}
													size="small"
													options={users}
													legend={el.legend ? el.legend : ""}
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