import { Button, Stack, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextfieldWrapper from "src/components/forms/textfield/textfield";
import { connect } from "react-redux";
import { fundsSourceSelectOptions } from "src/pages/auth/register/forms/info";
import MultipleSelectCheckmarks from "src/components/forms/select/multiple";
import SelectField from "src/components/forms/select/select";

const selectOptions = [
	{ Name: "$0 - $24,999"},
	{ Name: "$25,000 - $99,999"},
	{ Name: "$100,000 - $499,999"},
	{ Name: "$500,000 - $999,999"},
	{ Name: "$1,000,000 +"},
];

const StyledWrapper = styled(Stack)(({ theme }) => ({}));

const AdditionalInfo = () => {
	const INITIAL_STATE = {
		annualIncome: "",
		netWorth: "",
		liquidAssets: "",
		fundingSources: [],
	};

	const VALIDATION = Yup.object().shape({
		annualIncome: Yup.string().required("Annual Income is required"),
		netWorth: Yup.string().required("Networth is required"),
		liquidAssets: Yup.string().required("Liquid Assets is required"),
		fundingSources: Yup.array().required("Networth is required"),
	});

	const handleSubmit = (values, actions) => {
		actions.setSubmitting(true);
		console.log(values);
	};
	return (
		<StyledWrapper direction="column" spacing={3}>
			<Typography variant="h6">Financial Profile</Typography>

			<Formik initialValues={INITIAL_STATE} validationSchema={VALIDATION} onSubmit={handleSubmit}>
				<Form id="additional info">
					<Stack direction="column" spacing={2}>
						<Stack direction="column" spacing={1}>
							<Typography variant="body1">
								Annual Income
							</Typography>
							
							<SelectField
								name="annualIncome"
								fullwidth
								size="small"
								options={selectOptions}
								defaultValue={"$0 - $24,999"}
								/>
						</Stack>

						<Stack direction="column" spacing={1}>
							<Typography variant="body1">
								Net Worth
							</Typography>

							<SelectField
								name="netWorth"
								fullwidth
								options={selectOptions}
								size="small"
								defaultValue={"$0 - $24,999"}
								/>
						</Stack>

						<Stack direction="column" spacing={1}>
							<Typography variant="body1">
								Invest-able / Liquid Assets
							</Typography>

							<SelectField
								name="liquidAssets"
								fullwidth
								options={selectOptions}
								size="small"
								defaultValue={"$0 - $24,999"}
								/>
						</Stack>

						<Stack direction="column" spacing={1}>
							<Typography variant="body1">
								Funding Source
							</Typography>

							<MultipleSelectCheckmarks
								name="funding_source"
								fullWidth
								size="small"
								options={fundsSourceSelectOptions}
							/>
						</Stack>

						<Button variant="contained" type="subtmit" sx={{ maxWidth: 300 }}>
							Save Changes
						</Button>
					</Stack>
				</Form>
			</Formik>
		</StyledWrapper>
	);
};

const mapStateToProps = ({ user }) => ({
	me: user.me.data.data,
});

export default connect(mapStateToProps)(AdditionalInfo);
