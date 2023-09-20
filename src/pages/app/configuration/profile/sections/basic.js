import { Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup"

import { connect } from "react-redux";
import TextfieldWrapper from "src/components/forms/textfield/textfield";

const StyledWrapper = styled(Stack)(({ theme }) => ({

}))

const BasicInfo = ({me}) => {
	const INITIAL_STATE = {
		email: me ? me.email : "",
		phoneNumber: me ? me.phoneNumber : ""
	}

	const VALIDATION = Yup.object().shape({
		email: Yup.string().email("Please add a valid email").required("Email is required"),
		phoneNumber: Yup.string().required("Phone number is required")
	})

	const handleSubmit = (values, actions) => {
		actions.setSubmitting(true);
		console.log(values)
	}

	const firstname = `${me ? me.firstname : ""}`
	const lastname = `${me ? me.lastname : ""}`
	const address = `${me ? me.street : ""}`
	const account = `Generic 123456`
	
	const details = [
		{
			key: "Account Number",
			value: account
		},
		{
			key: "Full Name",
			value: `${firstname} ${lastname}`
		},
		{
			key: "Address",
			value: address
		},
	]
	return (
		<StyledWrapper direction="column" spacing={3}>
			<Stack direction="column" spacing={2}>
				<Typography variant="h6">
					Details
				</Typography>

				<Stack direction="column" spacing={1.5}>
					{
						details.map((el, i) => (
							<Stack direction="row" justifyContent="space-between" key={i}>
								<Typography variant="body1" color="text.primary">
									{el.key}
								</Typography>
								<Typography variant="body1" color="text.secondary">
									{el.value}
								</Typography>
							</Stack>
						))
					}
				</Stack>
			</Stack>

			<Stack direction="column" spacing={2}>
				<Typography variant="h6">
					Update Details
				</Typography>

				<Formik
					initialValues={INITIAL_STATE}
					validationSchema={VALIDATION}
					onSubmit={handleSubmit}
				>
					<Form id="basic info settings">
						<Stack direction="column" spacing={3}>
							<TextfieldWrapper
								name="email"
								label="Email"
								size="small"
							/>

							<TextfieldWrapper
								name="phoneNumber"
								label="Phone Number"
								size="small"
							/>

							<Button variant="contained" sx={{maxWidth: 300}}>
								Save Changes 
							</Button>
						</Stack>
					</Form>
				</Formik>
			</Stack>
		</StyledWrapper>
	)
}

const mapStateToProps = ({user}) => ({
	me: user.me.data.data
})

export default connect(mapStateToProps)(BasicInfo)