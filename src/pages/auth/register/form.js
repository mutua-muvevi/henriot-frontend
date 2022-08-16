import React, { useState } from 'react';

import { connect } from "react-redux";

import { Alert, AlertTitle, Box, Button, Grid, Grow } from "@mui/material";
import { styled } from "@mui/system";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextfieldWrapper from "../../../components/forms/textfield/textfield";
import SelectField from "../../../components/forms/select/select";

import Logo from "../../../assets/logo/transparentblacklogo.png";
import { countries } from "../../../content/countries";
import { registerUser } from "../../../redux/auth/actions";
import ReusableModal from "../../../components/modal/modal";
import RegisterResponse from "./response";


const StyledRegistrationForm = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	textAlign: "left",
	width: "100%"

}))

const StyledLogoSection = styled(Box)(({ theme }) => ({
	marginBottom: "20px",
	display: "flex",
	alignItems: "center",
	justifyContent: "left",
	width: "450px"
}))

const styledLogoImage = {
	width: "450px"
}

const StyledInputArea = styled(Box)(({ theme }) => ({
	minWidth: "500px",
}))

const StyledAuthInputs = styled(Box)(({ theme }) => ({
	
}))

const styledAuthTextField = {
	margin: "15px auto",
}

const StyledButton = styled(Button)(({theme}) => ({
	width: "100%",
	marginTop: "30px"
}))

const modalStyle = {
	width: "85vw",
	margin: "10vh auto",
	border: 'none',
}


const INITIAL_FORM_STATE = {
	email_address: "",
	username: "",
	password: "",
	confirmpassword: "",
	country: ""
}

const FORM_VALIDATION = Yup.object().shape({
	email_address: Yup.string().email("Please add a valid email").required("Please add an email"),
	username: Yup.string().min(5, "Too short username").max(80, "Too long username").required("Please add a username"),
	password: Yup.string().min(8, 'Password is too short - should be 8 chars minimum.').required("Please add a password"),
	confirmpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords do not match').required("Please retype password above"),
	country: Yup.string().min(4, "Too short country name").max(56, "Too long country name").required("Please add your country"),
})

const RegisterForm = ({ registerUser, errMessage, token }) => {

	const [ passwordType, setPasswordType ] = useState("password");
	const [ showSuccess, setShowSuccess ] = useState(false);
	const [ alertSuccess, setAlertSuccess ] = useState(true);
	const [ alertSuccessDisplay, setAlertSuccessDisplay ] = useState("");
	const [ user, setUser ] = useState(undefined)

	const [ openModal, setOpenModal ] = useState(false)
	
	const registrationInputs = [
		{
			name: "email_address",
			label: "Email",
			placeholder: "Required",
			type: "email",
			required: true,
			inputprops: {}
		},
		{
			name: "username",
			label: "Username",
			placeholder: "Required",
			type: "text",
			required: true,
			inputprops: {}
		},
		{
			name: "password",
			label: "Password",
			placeholder: "Required",
			type: passwordType,
			required: true,
			inputprops: {}
		},
		{
			name: "confirmpassword",
			label: "Confirm password",
			placeholder: "Required",
			type: passwordType,
			required: true,
			inputprops: {}
		},
	]

	const submitHandler = (values) => {
		registerUser(values)

		if(token){
			setShowSuccess(true)
			setTimeout(() => {
				setOpenModal(true)
			}, 2000);

			setTimeout(() => {
				setShowSuccess(false)
			}, 8000);
		}

		if(!errMessage ) {
			setUser(values)
			return
		}
		
	}

	return (
		<StyledRegistrationForm>
			{ 
				showSuccess === true ? (
					<Grow  style={{ transformOrigin: '10 20 50' }} sx={{marginBottom: "10px", width: "500px"}} in={showSuccess} >
						<Alert style={{display: `${alertSuccessDisplay}`}} severity="success" variant="filled">
							<AlertTitle>Registration Success!!</AlertTitle>
							Email with confirmation code has been sent to you
						</Alert>
					</Grow>
				) : null
			}
			{
				errMessage && showSuccess === false   ? (
					<Grow  style={{ transformOrigin: '10 20 50' }} sx={{marginBottom: "10px", width: "500px"}} in timeout={1000}>
						<Alert severity="error" variant="filled">
							<AlertTitle>Registration Error!</AlertTitle>
							{ errMessage }
						</Alert>
					</Grow>
				) : null
			}
			<StyledLogoSection>
				<img
					src={Logo}
					alt="Henriot logo"
					style={styledLogoImage}
				/>
			</StyledLogoSection>
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
										placeholder={el.placeholder}
										size="small"
										required
									/>
								</StyledAuthInputs>
							))
						}
						<SelectField sx={styledAuthTextField}
							type="text"
							name="country"
							label="country"
							size="small"
							options={countries}
							required
						/>
						<StyledButton variant="contained" type="submit">
							Submit
						</StyledButton>
					</StyledInputArea>
				</Form>
			</Formik>
			<ReusableModal 
				modal={openModal}
				setModal={setOpenModal}
				style={modalStyle}
				arialabel="Registration success modal"
				ariadescription="You have registered successfully. Check your email and confirm your email address"
				children={<RegisterResponse data={user ? user : null} />}
				/>
		</StyledRegistrationForm>
	)
}

const mapStateToProps = ({ auth }) => ({
	errMessage: auth.errMessage,
	token: auth.token
})

const mapDispatchToProps = (dispatch) => ({
	registerUser: (values) => dispatch(registerUser(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)