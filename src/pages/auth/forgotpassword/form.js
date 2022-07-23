import React, { useState } from 'react';

import { connect } from "react-redux";

import { Alert, AlertTitle, Box, Button, Grow } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextfieldWrapper from "../../../components/forms/textfield/textfield";
import { forgotPassword } from "../../../redux/auth/actions";


const StyledForgotPasswordForm = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	textAlign: "left",

}))


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


const INITIAL_FORM_STATE = {
	email: "",
}

const FORM_VALIDATION = Yup.object().shape({
	email: Yup.string().required("Please add a username")
})

const ForgotPasswordForm = ({ forgotPassword, errMessage }) => {
	
	const [ alertSuccess, setAlertSuccess ] = useState(false);
	
	const submitHandler = (values) => {
		forgotPassword(values)

		if(errMessage ) {
			setAlertSuccess(false)
			return
		}
		
		setAlertSuccess(true)
		setTimeout(() => {
			
		}, 2000);
	}

	return (
		<StyledForgotPasswordForm>
			{ 
				alertSuccess === true ? (
					<Grow  style={{ transformOrigin: '10 20 50' }} sx={{marginBottom: "10px", width: "500px"}} in={alertSuccess} >
						<Alert style={{display: `${alertSuccess}`}} severity="success" variant="filled">
							<AlertTitle>Forgot Password Request Success!!</AlertTitle>
							Login Successful redirecting ...
						</Alert>
					</Grow>
				) : null
			}
			{
				errMessage && alertSuccess === false   ? (
					<Grow  style={{ transformOrigin: '10 20 50' }} sx={{marginBottom: "10px", width: "500px"}} in timeout={1000}>
						<Alert severity="error" variant="filled">
							<AlertTitle>Forgot Password Request Error!</AlertTitle>
							{ errMessage }
						</Alert>
					</Grow>
				) : null
			}

			<Formik
				initialValues={{
					...INITIAL_FORM_STATE
				}}
				validationSchema={ FORM_VALIDATION }
				onSubmit = { submitHandler }
			>
				<Form>
					<StyledInputArea>
						<StyledAuthInputs  >
							<TextfieldWrapper sx={styledAuthTextField} 
								type="email"
								name="email"
								label="Email"
								placeholder="Enter your email"
								size="small"
								required
							/>
						</StyledAuthInputs>
						<StyledButton variant="contained" type="submit">
							Submit
						</StyledButton>
					</StyledInputArea>
				</Form>
			</Formik>			
		</StyledForgotPasswordForm>
	)
}

const mapStateToProps = ({ auth }) => ({
	errMessage: auth.errMessage
})

const mapDispatchToProps = (dispatch) => ({
	forgotPassword: (values) => dispatch(forgotPassword(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordForm)