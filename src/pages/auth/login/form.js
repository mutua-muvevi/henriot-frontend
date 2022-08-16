import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";

import { Alert, AlertTitle, Box, Button, Grow } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextfieldWrapper from "../../../components/forms/textfield/textfield";
import { loginForm } from "./info";
import { loginUser } from "../../../redux/auth/actions";


const StyledLoginForm = styled(Box)(({ theme }) => ({
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
	username: "",
	password: "",
}

const FORM_VALIDATION = Yup.object().shape({
	username: Yup.string().min(5, "Too short username").max(80, "Too long username").required("Please add a username"),
	password: Yup.string().required("Please add a password"),
})

const LoginForm = ({ loginUser, errMessage, token }) => {
	
	const [ alertSuccess, setAlertSuccess ] = useState(false);
	const navigate = useNavigate()
	
	const submitHandler = (values) => {
		loginUser(values)

		// if(errMessage ) {
		// 	setAlertSuccess(false)
		// }
		
		if(token){
			setAlertSuccess(true)
	
			setTimeout(() => {
				navigate("/auth/setup")
			}, 2000);
			return 
		}

		setAlertSuccess(false)

	}

	return (
		<StyledLoginForm>
			{ 
				alertSuccess === true ? (
					<Grow  style={{ transformOrigin: '10 20 50' }} sx={{marginBottom: "10px", width: "500px"}} in={alertSuccess} >
						<Alert style={{display: `${alertSuccess}`}} severity="success" variant="filled">
							<AlertTitle>Login Success!!</AlertTitle>
							Login Successful redirecting ...
						</Alert>
					</Grow>
				) : null
			}
			{
				errMessage && alertSuccess === false   ? (
					<Grow  style={{ transformOrigin: '10 20 50' }} sx={{marginBottom: "10px", width: "500px"}} in timeout={1000}>
						<Alert severity="error" variant="filled">
							<AlertTitle>Login Error!</AlertTitle>
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
						{
							loginForm.map((el, i) => (
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
						<StyledButton variant="contained" type="submit">
							Submit
						</StyledButton>
					</StyledInputArea>
				</Form>
			</Formik>			
		</StyledLoginForm>
	)
}

const mapStateToProps = ({ auth }) => ({
	errMessage: auth.errMessage.data.error,
	token: auth.token
})

const mapDispatchToProps = (dispatch) => ({
	loginUser: (values) => dispatch(loginUser(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)