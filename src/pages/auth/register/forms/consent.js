import {
	Box,
	Grid,
	Typography,
} from "@mui/material";
import { styled } from "@mui/system";

import CheckBoxField from "src/components/forms/checkbox/checkbox";

const StyledFormContainer = styled(Box)(({ theme }) => ({}));

const legend = `I consent to the processing of my personal data, as described in the Consent to Personal Data and Processing document`

const ConsentInfo = (props) => {
	const {
		formField: { 
			consent
		},
	} = props;

	return (
		<StyledFormContainer>
			<Typography variant="h6" color="primary" sx={{ mb: "20px" }}>
				Consent
			</Typography>

			<Grid container spacing={3}>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<CheckBoxField
						name={consent.name}
						label={consent.label}
						legend={legend}
						fullWidth
					/>
				</Grid>

			</Grid>
		</StyledFormContainer>
	);
};

export default ConsentInfo;
