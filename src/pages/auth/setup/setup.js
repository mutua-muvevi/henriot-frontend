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
	},
	enabled_assets: ""
}

const FORM_VALIDATION = Yup.object().shape({
	contact: Yup.object().shape({
		email_address: Yup.string().min(5, "Too short email").max(80, "Too long email").email("Please add a valid email").required("Please add an email"),
		phone_number: Yup.string().min(10, "Too short phone number").max(19, "Too long phone number").required("Please add a phone number"),
		street_address: Yup.string().min(2, "Too short street address").max(63, "Too long street address").required("Please add a street address"),
		unit: Yup.string().min(2, "Too short unit").max(80, "Too long unit").required("Please add a unit"),
		postal_code: Yup.string().min(5, "Too short postal code").max(11, "Too long postal code").required("Please add a postal code"),
		state: Yup.string().min(4, "Too short state name").max(15, "Too long state name").required("Please add a state name"),
		city: Yup.string().min(2, "Too short city name").max(85, "Too long city name").required("Please add a city name"),
		country: Yup.string().min(4, "Too short country name").max(56, "Too long country name").required("Please add a country name"),
	}),
	identity: Yup.object().shape({
		given_name: Yup.string().min(3, "Too short first name").max(50, "Too long first name").required("Please add a first name"),
		middle_name: Yup.string().min(3, "Too short middle name").max(50, "Too long middle name").required("Please add a middle name"),
		family_name: Yup.string().min(3, "Too short family name").max(50, "Too long family name").required("Please add a family name"),
		date_of_birth: Yup.string().min(4, "Too short date of birth").max(10, "Too long date of birth").required("Please add a date of birth"),
		tax_id: Yup.string().min(4, "Too short tax ID").max(19, "Too long tax ID").required("Please add a tax ID"),
		tax_id_type: Yup.string().min(4, "Too short tax ID type").max(19, "Too long tax ID type").required("Please add a Tax ID Type"),
		country_of_citizenship: Yup.string().min(4, "Too short country name").max(56, "Too long country name").required("Please add a country name"),
		country_of_birth: Yup.string().min(4, "Too short country name").max(56, "Too long country name").required("Please add a country name"),
		country_of_tax_residence: Yup.string().min(4, "Too short country name").max(56, "Too long country name").required("Please add a country name"),
		funding_source: Yup.string().min(4, "Too short funding name characters").max(19, "Too long funding name characters").required("Please add a funding name"),
		
	}),
	enabled_assets: Yup.string().required("Please add all enabled assets"),
})

const Setup = () => {

	const steps = ['About', 'Regulatory', 'Account'];

		
	const submitHandler = (values) => {
		console.log(values)
	}

	return (
		<StyledSetup>
			<Formik
				initialValues={{
					...INITIAL_FORM_STATE
				}}
				validationSchema={ FORM_VALIDATION }
				onSubmit = { submitHandler }
			>
				<Form>
					<StepperComponent steps={steps}/>
				</Form>
			</Formik>


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