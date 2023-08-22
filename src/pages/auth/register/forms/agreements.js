import {
	Box,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	Grid,
	Typography,
	FormLabel,
	Button,
} from "@mui/material";
import { styled } from "@mui/system";

import SelectField from "../../../../components/forms/select/select";
import { countries } from "src/content/countries";

import TextfieldWrapper from "../../../../components/forms/textfield/textfield";
import { FieldArray, useField } from "formik";
import Iconify from "src/components/iconify/iconify";
import ReusableDateTimePicker from "src/components/forms/datepicker/datetime";

const StyledFormContainer = styled(Box)(({ theme }) => ({}));

const AgreementsDetails = (props) => {
	const { values } = props;

	return (
		<StyledFormContainer>
			<Typography variant="h6" color="primary" sx={{ mb: "20px" }}>
				Agreements
			</Typography>
			<FieldArray name="agreements">
				{(arrayHelpers) => {
					const agreements = values.agreements;
					return (
						<>
							{agreements && agreements.length > 0
								? agreements.map((item, index) => (
										<Box key={index} sx={{ marginBottom: "50px" }}>
											<Grid container spacing={3}>
												<Grid item xs={12}>
													<Typography variant="body1">Agreements</Typography>
												</Grid>
												<Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
													<TextfieldWrapper
														name={`agreements.${index}.agreement`}
														label="Agreement"
														type="text"
														size="small"
													/>
												</Grid>
												<Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
													<ReusableDateTimePicker
														name={`agreements.${index}.signed_at`}
														label="Signed At"
														size="small"
													/>
												</Grid>
												<Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
													<TextfieldWrapper
														name={`agreements.${index}.ip_address`}
														label="IP Address "
														type="text"
														size="small"
													/>
												</Grid>
												<Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
													<TextfieldWrapper
														name={`agreements.${index}.revision`}
														label="Company City"
														type="text"
														size="small"
													/>
												</Grid>

												<Grid item>
													<Button type="button" onClick={() => arrayHelpers.remove(index)}>
														<Iconify icon="icon-park:close" color="primary" />
													</Button>
												</Grid>
											</Grid>
										</Box>
								  ))
								: null}
							<Button
								type="button"
								variant="outlined"
								onClick={() =>
									arrayHelpers.push({
										agreement: "",
										signed_at: "",
										ip_address: "",
										revision: "",
									})
								}
							>
								Add agreements
							</Button>
						</>
					);
				}}
			</FieldArray>

			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Typography variant="body1">Trusted Contact</Typography>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper name="trusted_given_name" label="Given Name" fullWidth size="small" />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper name="trusted_family_name" label="Family Name" fullWidth size="small" />
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper name="trusted_email_address" label="Email Address" fullWidth size="small" />
				</Grid>
			</Grid>
		</StyledFormContainer>
	);
};

export default AgreementsDetails;
