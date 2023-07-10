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

const PrimaryPersonalInfo = (props) => {
	const {
		formField: { 
			investorType,
			email,
			firstname,
			lastname,
			country,
			phoneNumber,
			introducerCode, },
	} = props;

	// Get field properties and meta for 'type' field
	const [field, meta] = useField(investorType.name);

	return (
		<StyledFormContainer>
			<Typography variant="h6" color="primary" sx={{ mb: "20px" }}>
				Personal information
			</Typography>

			<Grid container spacing={3}>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<FormControl>
						<FormLabel id="demo-radio-buttons-group-label">
							Project type
						</FormLabel>
						<RadioGroup
							name={investorType.name}
							row
							{...field}
						>
							<FormControlLabel
								value="private investor"
								control={<Radio />}
								label="Private qualified Investor"
							/>
							<FormControlLabel
								value="legal entity"
								control={<Radio />}
								label="Legal entity autorized signatory"
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
						name={email.name}
						label={email.label}
						fullWidth
						size="small"
						email
					/>
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper
						name={firstname.name}
						label={firstname.label}
						fullWidth
						size="small"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper
						name={lastname.name}
						label={lastname.label}
						fullWidth
						size="small"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<SelectField
						name={country.name}
						label={country.label}
						options={countries}
						fullWidth
						size="small"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper
						name={phoneNumber.name}
						label={phoneNumber.label}
						fullWidth
						size="small"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper
						name={introducerCode.name}
						label={introducerCode.label}
						fullWidth
						size="small"
					/>
				</Grid>

				
			</Grid>
		</StyledFormContainer>
	);
};

export default PrimaryPersonalInfo;