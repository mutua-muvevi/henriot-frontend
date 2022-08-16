import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";

import { Alert, AlertTitle, Box, Button, Grow } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextfieldWrapper from "../../../components/forms/textfield/textfield";
import { loginForm } from "./info";
import { loginUserWithOtp } from "../../../redux/auth/actions";


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
	code: ""
}

const FORM_VALIDATION = Yup.object().shape({
	username: Yup.string().min(5, "Too short username").max(80, "Too long username").required("Please add a username"),
	password: Yup.string().required("Please add a password"),
	code: Yup.string().min(3, "Too short OTP Code").max(20, "Too long OTP Code").required("Please input (One time password)OTP code sent to your email address")
})

const OtpLoginForm = ({ loginUserWithOtp, errMessage, error, token, info }) => {
	
	const [ alertSuccess, setAlertSuccess ] = useState(false);
	const [ errors, setErrors ] = useState(null);
	const [ data, setData ] = useState({})

	const navigate = useNavigate()

	useEffect(() => {

		if(error){
			setAlertSuccess(false)
			setErrors(error)
			return 
		}




		return () => {
			setData({})
		}
	}, [info, error])
	
	const submitHandler = (values) => {
		loginUserWithOtp(values)

		if(info.status === 200 && info.statusText === "OK" && !error){
			setData(info)
			setAlertSuccess(true)
			setTimeout(() => {
				navigate("/auth/setup")
			}, 2000);
		} else {
			navigate("/auth/login/otp")
		}

	}

	return (
		<StyledLoginForm>
			{ 
				alertSuccess === true ? (
					<Grow  style={{ transformOrigin: '10 20 50' }} sx={{marginBottom: "10px", width: "500px"}} in={alertSuccess} >
						<Alert style={{display: `${alertSuccess}`}} severity="success" variant="filled">
							<AlertTitle>Login Success!!</AlertTitle>
							Login successfull
							
						</Alert>
					</Grow>
				) : null
			}
			{
				errors ? (
					<Grow  style={{ transformOrigin: '10 20 50' }} sx={{marginBottom: "10px", width: "500px"}} in timeout={1000}>
						<Alert severity="error" variant="filled">
							<AlertTitle>Login Error!</AlertTitle>
							{/* { error.data.error } */}
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
									{console.log("ALERT STATus, alertSuccess", info)}
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
						{/* {JSON.stringify(data)} */}
					</StyledInputArea>
				</Form>
			</Formik>			
		</StyledLoginForm>
	)
}

const mapStateToProps = ({ auth }) => ({
	errMessage: auth.errMessage,
	error: auth.error,
	token: auth.token,
	info: auth.data
})

const mapDispatchToProps = (dispatch) => ({
	loginUserWithOtp: (values) => dispatch(loginUserWithOtp(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(OtpLoginForm)