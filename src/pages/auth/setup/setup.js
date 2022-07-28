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

const stepperStyles = {
	maxHeight: "80vh",
	minWidth: "60vw",
	overflowY: "scroll",
	minHeight: "40vh",
}

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
	trusted_contact: {
		given_name: "",
		middle_name: "",
		family_name: "",
	},

	enabled_assets: false,
	disclosures: {
		is_control_person: false,
		is_affiliated_exchange_or_finra: false,
		is_politically_exposed: false,
		immediate_family_exposed: false,
		context: [
			{
				context_type: "",
				company_name: "",
				company_street_address: "",
				company_city: "",
				company_state: "",
				company_country: "",
				company_compliance_email: ""
			}
		],
	},
	agreements: [
		{
			agreement: "",
			signed_at: "",
			ip_address: "",
			revision: ""
		}
	],
	documents: [
		{
			document_type: "",
			document_sub_type: "",
			content: "",
			mime_type: ""
		}
	],
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
	trusted_contact: Yup.object().shape({
		given_name: Yup.string().min(3, "Too short first name").max(50, "Too long first name"),
		middle_name: Yup.string().min(3, "Too short middle name").max(50, "Too long middle name"),
		family_name: Yup.string().min(3, "Too short family name").max(50, "Too long family name"),		
	}),
	
	enabled_assets: Yup.boolean(),
	disclosures: Yup.object().shape({
		is_control_person: Yup.boolean(),
		is_affiliated_exchange_or_finra: Yup.boolean(),
		is_politically_exposed: Yup.boolean(),
		immediate_family_exposed: Yup.boolean(),
		context: Yup.array().of(
			Yup.object().shape({
				context_type: Yup.string().min(3, "Too short context type").max(50, "Too long context type").required(true, "item req"),
				company_name: Yup.string().min(3, "Too short company name").max(50, "Too long company name"),
				company_street_address: Yup.string().min(3, "Minimum address required 1").max(50, "Maximum addresses required 5"),
				company_state: Yup.string().min(4, "Too short state name").max(15, "Too long state name"),
				company_city: Yup.string().min(2, "Too short city name").max(85, "Too long city name"),
				company_country: Yup.string().min(4, "Too short country name").max(56, "Too long country name"),
				company_compliance_email: Yup.string().min(5, "Too short email").max(80, "Too long email").email("Please add a valid email"),
			})
		)
	}),
	agreements: Yup.array().of(
		Yup.object().shape({
			agreement: Yup.string().min(3, "Agreement characters too short").max(50, "Agreement characters too long"),
			signed_at: Yup.string().min(4, "Minimum characters for signed at is 4").max(10, "Maximum characters for signed at is 10"),
			ip_address: Yup.string().min(8, "Too short IP address").max(128, "Too long IP address"),
			revision: Yup.string().min(3, "Too short Revision").max(50, "Too long Revision"),
		}),
	),
	documents: Yup.array().of(
		Yup.object().shape({
			document_type: Yup.string().min(3, "Too short Document type").max(50, "Too long Document type"),
			document_sub_type: Yup.string().min(3, "Too short document subtype").max(50, "Too long document subtype"),
			content: Yup.string().min(3, "Too short document content").max(50, "Too long document content"),
			mime_type: Yup.string().min(3, "Too short document mime type").max(50, "Too long document mime type"),
		})
	)
})

const Setup = () => {

	const steps = ['About', 'Identity', 'Others'];

		
	
	const submitHandler = (values) => {
		console.log("FORMIK VALUES ARE", values)
		alert(JSON.stringify(values))
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
				{
					({ values , setFieldValue}) => (
						<Form>
							<StepperComponent 
								steps={steps}
								styles={stepperStyles}
								submitHandler={submitHandler}
								values = {values}
								/>
						</Form>
					)
				}
			</Formik>
		</StyledSetup>
	)
}

export default Setup