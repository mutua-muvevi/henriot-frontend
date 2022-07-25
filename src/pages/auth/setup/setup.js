import React from 'react';

import { Alert, AlertTitle, Box, Button, Grid, Grow } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextfieldWrapper from "../../../components/forms/textfield/textfield";

import StepperComponent from "../../../components/stepper/stepper";
import { setupfields } from "./info";

const StyledSetup = styled(Box)(({ theme }) => ({
	minHeight: "100vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
}))

const StyledSetupContent = styled(Grid)(({ theme }) => ({
	
}))

const StyledSetupForm = styled(Grid)(({ theme }) => ({
}))

const StyledSetupRight = styled(Grid)(({ theme }) => ({
	backgroundColor: "green",

}))


const INITIAL_FORM_STATE = {
	contact: {
		email_address: "",
		phone_number: "",
		street_address: "",
		unit: "",
		postal_code: "",
		state: "",
		city: "",
		country: ""

	},
	identity: {
		given_name: "",
		middle_name: "",
		family_name: "",
		date_of_birth: "",
		tax_id: "",
		tax_id_type: "",
		country_of_citizenship: "",
		country_of_birth: "",
		country_of_tax_residence: "",
		funding_source: "",
		enabled_assets: ""
	}
}

const FORM_VALIDATION = Yup.object().shape({
	username: Yup.string().min(5, "Too short username").max(80, "Too long username").required("Please add a username"),
	password: Yup.string().required("Please add a password"),
})

const Setup = () => {

	const steps = ['About', 'Regulatory', 'Account'];

	return (
		<StyledSetup>
			<StepperComponent steps={steps}/>


			<StyledSetupContent container columnSpacing={2}>
				<StyledSetupForm item xl={9} lg={9} md={6} sm={12} xs={12}>
				</StyledSetupForm>
				<StyledSetupRight item xl={3} lg={3} md={6} sm={12} xs={12}>

				</StyledSetupRight>
			</StyledSetupContent>
		</StyledSetup>
	)
}

export default Setup