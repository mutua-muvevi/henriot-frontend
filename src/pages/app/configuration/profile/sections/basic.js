import { Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextfieldWrapper from "src/components/forms/textfield/textfield";
import { connect } from "react-redux";
import { sentenceCase } from "change-case";

const StyledWrapper = styled(Stack)(({ theme }) => ({}));

const BasicInfo = ({ me }) => {
	const INITIAL_STATE = {
		email: me?.data?.data?.email? me.data.data.email : "",
		phoneNumber: me?.data?.data?.phone_number ? me.data.data.phone_number  : "",
	};

	const VALIDATION = Yup.object().shape({
		email: Yup.string().email("Please add a valid email").required("Email is required"),
		phoneNumber: Yup.string().required("Phone number is required"),
	});

	const handleSubmit = (values, actions) => {
		actions.setSubmitting(true);
		console.log(values);
	};

	const firstname = me?.data?.data?.identity?.given_name ? sentenceCase(me.data.data.identity.given_name) : "";
	const lastname = me?.data?.data?.identity?.middle_name ? sentenceCase(me.data.data.identity.middle_name) : "";
	const address = me?.data?.data?.street_address ? sentenceCase(me.data.data.street_address) : "";
	const account = `Generic 123456`;

	const details = [
		{
			key: "Account Number",
			value: account,
		},
		{
			key: "Full Name",
			value: `${firstname} ${lastname}`,
		},
		{
			key: "Address",
			value: address,
		},
	];
	return (
		<StyledWrapper direction="column" spacing={3}>
			<Stack direction="column" spacing={2}>
				<Typography variant="h6">Details</Typography>

				<Stack direction="column" spacing={1.5}>
					{details.map((el, i) => (
						<Stack direction="row" justifyContent="space-between" key={i}>
							<Typography variant="body1" color="text.primary">
								{el.key}
							</Typography>
							<Typography variant="body1" color="text.secondary">
								{el.value}
							</Typography>
						</Stack>
					))}
				</Stack>
			</Stack>

			<Stack direction="column" spacing={3}>
				<Typography variant="h6">Update Details</Typography>

				<Formik initialValues={INITIAL_STATE} validationSchema={VALIDATION} onSubmit={handleSubmit}>
					<Form id="basic info settings">
						<Stack direction="column" spacing={3}>
							<Stack direction="column" spacing={1}>
								<Typography variant="body1">Email</Typography>

								<TextfieldWrapper name="email" size="small" />
							</Stack>

							<Stack direction="column" spacing={1}>
								<Typography variant="body1">Phone Number</Typography>

								<TextfieldWrapper name="phoneNumber" size="small" />
							</Stack>

							<Button variant="contained" type="submit" sx={{ maxWidth: 300 }}>
								Save Changes
							</Button>
						</Stack>
					</Form>
				</Formik>
			</Stack>
		</StyledWrapper>
	);
};

const mapStateToProps = ({ user }) => ({
	me: user.me,
});

export default connect(mapStateToProps)(BasicInfo);
