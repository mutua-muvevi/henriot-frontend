import React, { useState } from 'react';


import { Alert, AlertTitle, Box, Button, Grid, Grow } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextfieldWrapper from "../../../components/forms/textfield/textfield";
import SelectField from "../../../components/forms/select/select";

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!
const StyledRegistrationForm = styled(Box)(({ theme }) => ({
	minHeight: "100vh",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	textAlign: "left",

}))


const StyledInputArea = styled(Box)(({ theme }) => ({
	// backgroundColor: "grey",
	margin: "10px -300px",
}))

const StyledAuthInputs = styled(Box)(({ theme }) => ({
	
}))

const styledAuthTextField = {
	margin: "10px auto",
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!

const INITIAL_FORM_STATE = {
	email: "",
	username: "",
	password: "",
	confirmpassword: "",
	country: ""
}

const FORM_VALIDATION = Yup.object().shape({
	email: Yup.string().email("Please add a valid email").required("Please add an email"),
	username: Yup.string().min(5, "Too short username").max(80, "Too long username").required("Please add a username"),
	password: Yup.string().min(8, 'Password is too short - should be 8 chars minimum.').required("Please add a password"),
	confirmpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords do not match').required("Please retype password above"),
	country: Yup.string().min(4, "Too short country name").max(56, "Too long country name").required("Please add your country"),
})

const RegisterForm = () => {

	const [passwordType, setPasswordType] = useState("password")

	
	const registrationInputs = [
		{
			name: "email",
			label: "Email",
			placeholder: "Required",
			type: "email",
			required: true,
			xs: 12,
			sm: 12,
			md: 12,
			lg: 12,
			xl: 12
		},
		{
			name: "username",
			label: "Username",
			placeholder: "Required",
			type: "",
			required: true,
			xs: 12,
			sm: 12,
			md: 12,
			lg: 12,
			xl: 12
		},
		{
			name: "password",
			label: "Password",
			placeholder: "Required",
			type: passwordType,
			required: true,
			xs: 12,
			sm: 12,
			md: 12,
			lg: 12,
			xl: 12
		},
		{
			name: "confirmpassword",
			label: "Confirm password",
			placeholder: "Required",
			type: passwordType,
			required: true,
			xs: 12,
			sm: 12,
			md: 12,
			lg: 12,
			xl: 12
		},
	]

	const registrationSelect = {
		name: "country",
		label: "Country",
		placeholder: "Required",
		type: "text",
		required: true,
		xs: 12,
		sm: 12,
		md: 12,
		lg: 12,
		xl: 12
	}

	const submitHandler = (values) => {
		console.log(values)
	}

	return (
		<StyledRegistrationForm>
			<Formik
				initialValues={{
					...INITIAL_FORM_STATE
				}}
				validationSchema={ FORM_VALIDATION }
				onSubmit = { submitHandler }
			>
				<Form>
					<StyledInputArea>
					{
						registrationInputs.map((el, i) => (
							<StyledAuthInputs key={i} >
								<TextfieldWrapper sx={styledAuthTextField} 
									type={el.type} 
									name={el.name} 
									label={el.label}
									size="small"
									required
								/>
								{/* <SelectField sx={styledAuthTextField}
									type="text"
									name="country"
									label="country"
									size="small"
									required
								/> */}
							</StyledAuthInputs>
						))
					}
					</StyledInputArea>
				</Form>
			</Formik>
		</StyledRegistrationForm>
	)
}

export default RegisterForm