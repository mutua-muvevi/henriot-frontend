import { Button, FormControlLabel, Grid, Radio, Stack, Tooltip, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import RadioField from "src/components/forms/radio/radio";
import SelectField from "src/components/forms/select/select";
import SwitchField from "src/components/forms/switch/switch";
import Iconify from "src/components/iconify/iconify";
import * as Yup from "yup";

const options = [
	{Name: "4", Label: "4 The default Value"},
	{Name: "2", Label: "2"},
	{Name: "1", Label: "1"},
]

const INITIAL_STATE = {
	tradeSuspended: false,
	fractionalTrading: true,
	shortingEnabled: true,
	dayTradePowerCheck: "",
	maxMarginMultiplier: "",
	allowPTPEntry: false
}
const VALIDATION = Yup.object().shape({
	tradeSuspended: Yup.boolean(),
	fractionalTrading: Yup.boolean(),
	shortingEnabled: Yup.boolean(),
	dayTradePowerCheck: Yup.string(),
	maxMarginMultiplier: Yup.string(),
	allowPTPEntry: Yup.boolean(),
})

const StyledWrapper = styled(Stack)(({ theme }) => ({}));

const AccountSettings = () => {
	const handleSubmit = (values, actions) => {
		actions.setSubmitting(true);
		console.log(values)
	}
	return (
		<StyledWrapper direction="column" spacing={3}>
			<Stack direction="column">
				<Typography variant="h3">Configuration</Typography>
				<Typography variant="subtitle1" color="text.secondary">
					Manage Your Account Settings
				</Typography>
			</Stack>

			<div>
				<Formik
					initialValues={INITIAL_STATE}
					validationSchema={VALIDATION}
					onSubmit={handleSubmit}
				>
					<Form id="account configuration">
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<SwitchField
									name="tradeSuspended"
									label="Trades Suspended"
								/>
							</Grid>

							<Grid item xs={12} sm={6}>
								<SwitchField
									name="fractionalTrading"
									label="Fractional Trading"
								/>
							</Grid>

							<Grid item xs={12} sm={6}>
								<SwitchField
									name="shortingEnabled"
									label="Shorting Enabled"
								/>
							</Grid>
							<Grid item xs={6}>
								<RadioField
									name="dayTradePowerCheck"
									label="Day Trade Buying Power Check"
									radioItems={[
										<FormControlLabel
											value="Block on Entry"
											control={<Radio/>}
											label="Block on Entry"
										/>,
										<FormControlLabel
											value="Block on Exit"
											control={<Radio/>}
											label="Block on Exit"
										/>,
										<FormControlLabel
											value="Block on Both"
											control={<Radio/>}
											label="Block on Both"
										/>,
									]}
								/>
							</Grid>

							<Grid item xs={12}>
								<Typography variant="body1" gutterBottom>
									Max Margin Multiplier
								</Typography>
								<SelectField
									name="maxMarginMultiplier"
									label=""
									options={options}
									size="small"
								/>
							</Grid>

							<Grid item xs={12}>
								<Stack direction="row" spacing={3} justifyContent="left" alignItems="flex-start">
									<SwitchField
										name="allowPTPEntry"
										label="Allow PTP Entry"
									/>
									<Tooltip title="Review our PTP here">
										<Iconify icon="ep:info-filled"/>
									</Tooltip>
								</Stack>
							</Grid>

							<Grid item xs={12}>
								<Button variant="contained" type="submit">
									Update changes
								</Button>
							</Grid>
						</Grid>
					</Form>
				</Formik>
			</div>
		</StyledWrapper>
	);
};

export default AccountSettings;
