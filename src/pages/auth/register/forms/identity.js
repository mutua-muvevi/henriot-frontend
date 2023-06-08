import {
	Box,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	Grid,
	Typography,
	FormLabel,
} from "@mui/material";
import { styled } from "@mui/system";


import SelectField from "../../../../components/forms/select/select";
import { countries } from "src/content/countries";

import TextfieldWrapper from "../../../../components/forms/textfield/textfield";
import { useField } from "formik";

const StyledFormContainer = styled(Box)(({ theme }) => ({}));

const IdentityDetails = (props) => {
	const {
		formField: { 
			issuingCountry,
			identificationType,
			phoneVerification,
			emailVerification
		},
	} = props;

	// Get field properties and meta for 'type' field
	const [field, meta] = useField(identificationType.name);

	return (
		<StyledFormContainer>
			<Typography variant="h6" color="primary" sx={{ mb: "20px" }}>
				Identity verification
			</Typography>

			<Grid container spacing={3}>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<SelectField
						name={issuingCountry.name}
						label={issuingCountry.label}
						options={countries}
						fullWidth
						size="small"
					/>
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<FormControl>
						<FormLabel id="demo-radio-buttons-group-label">
							Choose your document type
						</FormLabel>
						<RadioGroup
							name={identificationType.name}
							row
							{...field}
						>
							<FormControlLabel
								value="id card"
								control={<Radio />}
								label="ID Card"
							/>
							<FormControlLabel
								value="passport"
								control={<Radio />}
								label="Passport"
							/>
							<FormControlLabel
								value="driver licence"
								control={<Radio />}
								label="Driver's Licence"
							/>
						</RadioGroup>
						
						{meta.touched && meta.error && (
							<Typography variant="caption" color="error">
								{meta.error}
							</Typography>
						)}
					</FormControl>
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper
						name={phoneVerification.name}
						label={phoneVerification.label}
						fullWidth
						size="small"
					/>
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper
						name={emailVerification.name}
						label={emailVerification.label}
						fullWidth
						size="small"
					/>
				</Grid>

			</Grid>
		</StyledFormContainer>
	);
};

export default IdentityDetails;
