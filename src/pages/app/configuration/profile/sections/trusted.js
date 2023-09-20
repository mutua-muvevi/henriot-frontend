import { Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup"

import TextfieldWrapper from "src/components/forms/textfield/textfield";

const StyledWrapper = styled(Stack)(({ theme }) => ({

}))

const TrustedContact = () => {
	const INITIAL_STATE = {
		firstname: "Joseph",
		lastname: "Sam",
		email: "josephsam@gmail.com",
		phoneNumber: "+254 799 756 331"
	}

	const VALIDATION = Yup.object().shape({
		firstname: Yup.string().required("Firstname is required"),
		lastname: Yup.string().required("Lastname is required"),
		email: Yup.string().email("Please add a valid email").required("Email is required"),
		phoneNumber: Yup.string().required("Phone number is required")
	})

	const handleSubmit = (values, actions) => {
		actions.setSubmitting(true);
		console.log(values)
	}

	return (
		<StyledWrapper direction="column" spacing={3}>
			<Typography variant="h6">
				Update Details
			</Typography>

			<Formik
					initialValues={INITIAL_STATE}
					validationSchema={VALIDATION}
					onSubmit={handleSubmit}
				>
					<Form id="trusted contacts settings">
						<Stack direction="column" spacing={3}>
							<Stack direction="column" spacing={1}>
								<Typography variant="body1">
									Firstname
								</Typography>

								<TextfieldWrapper
									name="firstname"
									size="small"
								/>
							</Stack>

							<Stack direction="column" spacing={1}>
								<Typography variant="body1">
									Lastname
								</Typography>

								<TextfieldWrapper
									name="lastname"
									size="small"
								/>
							</Stack>

							<Stack direction="column" spacing={1}>
								<Typography variant="body1">
									Email
								</Typography>

								<TextfieldWrapper
									name="email"
									size="small"
								/>
							</Stack>

							<Stack direction="column" spacing={1}>
								<Typography variant="body1">
									Phone Number
								</Typography>
								
								<TextfieldWrapper
									name="phoneNumber"
									size="small"
								/>
							</Stack>

							<Button variant="contained" type="submit" sx={{maxWidth: 300}}>
								Save Changes 
							</Button>
						</Stack>
					</Form>
				</Formik>
		</StyledWrapper>
	)
}

export default TrustedContact