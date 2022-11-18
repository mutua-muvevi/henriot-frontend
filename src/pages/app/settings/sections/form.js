import { Box, Button, Stack } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextfieldWrapper from "src/components/forms/textfield/textfield";
import { textfieldItems } from "./info"

const INITIAL_FORM_STATE = {
	email: "",
	password: "",
	confirmpassword: ""
}

const FORM_VALIDATION = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Your email is required"),
	password: Yup.string().required("Your password is required"),
	confirmpassword: Yup.string().required("Your password is required").oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const StyledInputStacks  = styled(Stack)(({ theme }) => ({

}));

const StyledButton  = styled(Button)(({ theme }) => ({
	width: "100%",
	color: "white"
}));


const SettingsForm = () => {

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

export default SettingsForm