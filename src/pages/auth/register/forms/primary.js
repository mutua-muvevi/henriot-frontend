import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Grid, Typography, FormLabel } from "@mui/material";
import { styled } from "@mui/system";

import SelectField from "../../../../components/forms/select/select";
import { countries } from "src/content/countries";

import TextfieldWrapper from "../../../../components/forms/textfield/textfield";
import { useField } from "formik";

const StyledFormContainer = styled(Box)(({ theme }) => ({}));

const PrimaryPersonalInfo = (props) => {
	const {
		formField: {
			contact: { email_address, phone_number, street_address, unit, city, state, postal_code, country },
		},
	} = props;

	return (
		<StyledFormContainer>
			<Typography variant="h6" color="primary" sx={{ mb: "20px" }}>
				Contact information
			</Typography>

			<Grid container spacing={3}>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper name="email_address" label="Email Address" fullWidth size="small" email />
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper name="phone_number" label="Phone Number" fullWidth size="small" />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper name="street_address" label="Street Address" fullWidth size="small" />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper name="unit" label="Unit" fullWidth size="small" />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper name="city" label="City" fullWidth size="small" />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper name="state" label="State" fullWidth size="small" />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper name="postal_code" label="Postal Code" fullWidth size="small" />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<SelectField name="country" label="Country" options={countries} fullWidth size="small" />
				</Grid>
			</Grid>
		</StyledFormContainer>
	);
};

export default PrimaryPersonalInfo;
