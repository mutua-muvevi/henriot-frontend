import {
	Box,
	Grid,
	Typography,
} from "@mui/material";
import { styled } from "@mui/system";


import SelectField from "../../../../components/forms/select/select";

import TextfieldWrapper from "../../../../components/forms/textfield/textfield";
import { countries } from "src/content/countries";

const StyledFormContainer = styled(Box)(({ theme }) => ({}));

const SecondaryInfo = (props) => {

	return (
		<StyledFormContainer>
			<Typography variant="h6" color="primary" sx={{ mb: "20px" }}>
				Identity information
			</Typography>

			<Grid container spacing={3}>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper
						name="given_name"
						label="Given Name"
						fullWidth
						size="small"
					/>
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper
						name="middle_name"
						label="Middle Name"
						fullWidth
						size="small"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper
						name="family_name"
						label="Family Name"
						fullWidth
						size="small"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper
						name="date_of_birth"
						label="Date of Birth"
						fullWidth
						size="small"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper
						name="tax_id"
						label="Tax ID"
						fullWidth
						size="small"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper
						name="tax_id_type"
						label="Tax ID type"
						fullWidth
						size="small"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper
						name="funding_source"
						label="Funding Source"
						fullWidth
						size="small"
					/>
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<SelectField
						name="country_of_citizenship"
						label="Country of citizenship" 
						options={countries} 
						fullWidth 
						size="small" 
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<SelectField
						name="country_of_birth"
						label="Country of birth" 
						options={countries} 
						fullWidth 
						size="small" 
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<SelectField
						name="country_of_tax_residence"
						label="Country of tax residence" 
						options={countries}
						fullWidth 
						size="small" 
					/>
				</Grid>
			</Grid>
		</StyledFormContainer>
	);
};

export default SecondaryInfo;