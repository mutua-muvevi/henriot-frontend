import {
	Box,
	Button,
	ButtonGroup,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	Card,
	CardContent,
	Grid,
	IconButton,
	Stack,
	Typography,
	FormLabel,
} from "@mui/material";
import { styled } from "@mui/system";

import DateTimePicker from "../../../../components/forms/datepicker/datepicker";

import SelectField from "../../../../components/forms/select/select";

import TextfieldWrapper from "../../../../components/forms/textfield/textfield";
import { useField } from "formik";

const StyledFormContainer = styled(Box)(({ theme }) => ({}));

const privacyOptions = [{ Name: "private" }, { Name: "public" }];

const PrimaryProjectFormDetails = (props) => {
	const {
		formField: { type, title, description, releaseDate, privacy },
	} = props;

	// Get field properties and meta for 'type' field
	const [field, meta] = useField(type.name);

	return (
		<StyledFormContainer>
			<Typography variant="h6" color="primary" sx={{ mb: "20px" }}>
				Project information
			</Typography>

			<Grid container spacing={3}>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper
						name={title.name}
						label={title.label}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<DateTimePicker
						name={releaseDate.name}
						label={releaseDate.label}
						fullWidth
						type="number"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper
						name={`description`}
						label={description.label}
						fullWidth
						multiline
						rows={4}
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<SelectField
						name={privacy.name}
						label={privacy.label}
						options={privacyOptions}
						fullWidth
					/>
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<FormControl>
						<FormLabel id="demo-radio-buttons-group-label">
							Project type
						</FormLabel>
						<RadioGroup
							name={type.name}
							row
							{...field}
						>
							<FormControlLabel
								value="personal"
								control={<Radio />}
								label="Personal"
							/>
							<FormControlLabel
								value="team"
								control={<Radio />}
								label="Team"
							/>
						</RadioGroup>
						
						{meta.touched && meta.error && (
							<Typography variant="caption" color="error">
								{meta.error}
							</Typography>
						)}
					</FormControl>
				</Grid>
			</Grid>
		</StyledFormContainer>
	);
};

export default PrimaryProjectFormDetails;
