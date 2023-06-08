import {
	Box,
	Grid,
	Typography,
} from "@mui/material";
import { styled } from "@mui/system";


import SelectField from "../../../../components/forms/select/select";

import TextfieldWrapper from "../../../../components/forms/textfield/textfield";
import DateTimePicker from "src/components/forms/datepicker/datepicker";

const StyledFormContainer = styled(Box)(({ theme }) => ({}));

const SecondaryInfo = (props) => {
	const {
		formField: { 
			street,
			city,
			state,
			postcode,
			dateOfBirth,
			passportNumber,
			occupation,
			annualIncome,
			valueOfAsset,
		},
	} = props;

	return (
		<StyledFormContainer>
			<Typography variant="h6" color="primary" sx={{ mb: "20px" }}>
				Secondary information
			</Typography>

			<Grid container spacing={3}>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper
						name={street.name}
						label={street.label}
						fullWidth
						size="small"
					/>
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper
						name={city.name}
						label={city.label}
						fullWidth
						size="small"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper
						name={state.name}
						label={state.label}
						fullWidth
						size="small"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper
						name={postcode.name}
						label={postcode.label}
						fullWidth
						size="small"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<DateTimePicker
						name={dateOfBirth.name}
						label={dateOfBirth.label}
						fullWidth
						size="small"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper
						name={passportNumber.name}
						label={passportNumber.label}
						fullWidth
						size="small"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper
						name={occupation.name}
						label={occupation.label}
						fullWidth
						size="small"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper
						name={annualIncome.name}
						label={annualIncome.label}
						fullWidth
						size="small"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper
						name={valueOfAsset.name}
						label={valueOfAsset.label}
						fullWidth
						size="small"
					/>
				</Grid>

				
			</Grid>
		</StyledFormContainer>
	);
};

export default SecondaryInfo;