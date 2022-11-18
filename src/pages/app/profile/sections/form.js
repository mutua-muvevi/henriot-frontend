import { Box, Button, Stack } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextfieldWrapper from "src/components/forms/textfield/textfield";
import SelectField from "src/components/forms/select/select";
import { textfieldItems, selectFieldItems } from "./info"

const INITIAL_FORM_STATE = {
	firstname: "",
	lastname: "",
	phone: "",
	identity: "",
	idno: "",
	occupation: "",
	code: "",
	website: "",
	postalcode: "",
	address: "",
	city: "",
	country: "",
}

const FORM_VALIDATION = Yup.object().shape({
	firstname: Yup.string().required("Your firstname is required"),
	lastname: Yup.string().required("Your lastname is required"),
	phone: Yup.string().required("Your phone is required"),
	identity: Yup.string().required("Your identity is required"),
	idno: Yup.string().required("Your idno is required"),
	occupation: Yup.string().required("Your occupation is required"),
	code: Yup.string().required("Your code is required"),
	website: Yup.string(),
	postalcode: Yup.string().required("Your postalcode is required"),
	address: Yup.string().required("Your address is required"),
	city: Yup.string().required("Your city is required"),
	country: Yup.string().required("Your country is required"),
});

const StyledInputStacks  = styled(Stack)(({ theme }) => ({

}));

const StyledButton  = styled(Button)(({ theme }) => ({
	width: "100%",
	color: "white"
}));


const ProfileForm = () => {

	const submitHandler = (values) => {
		alert(JSON.stringify(values))
	}

	return (
		<Formik
				initialValues={{
					...INITIAL_FORM_STATE
				}}
				validationSchema={ FORM_VALIDATION }
				onSubmit = { submitHandler }
		>
			{() => (
				<Form>
					<StyledInputStacks
						direction="column"
						spacing={3}
					>
						{
							textfieldItems.map((el, i) => (
								<TextfieldWrapper
									name={el.name}
									label={el.label}
									type={el.type}
									placeholder={el.placeholder ? el.placeholder: ""}
									variant="outlined"
									size="small"
									key={i}
								/>
							))
						}
						{
							selectFieldItems.map((el, i) => (
								<SelectField
									name={el.name}
									label={el.label}
									type={el.type}
									options={el.options}
									placeholder={el.placeholder ? el.placeholder: ""}
									variant="outlined"
									size="small"
									key={i}
								/>
							))
						}
						<StyledButton
							type="submit"
							variant="contained"
						>
							update
						</StyledButton>
					</StyledInputStacks>
				</Form>
			)}
		</Formik>
	)
}

export default ProfileForm