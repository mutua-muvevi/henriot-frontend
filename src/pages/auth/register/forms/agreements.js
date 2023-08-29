import { Box, Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

import TextfieldWrapper from "../../../../components/forms/textfield/textfield";
import { FieldArray } from "formik";
import Iconify from "src/components/iconify/iconify";
import ReusableDateTimePicker from "src/components/forms/datepicker/datetime";
import SelectField from "src/components/forms/select/select";

const StyledFormContainer = styled(Box)(({ theme }) => ({}));

const agreementsOption = [
	{
		Name: "margin_agreement",
		Label: "Margin Agreement"
	},
	{
		Name: "account_agreement",
		Label: "Account Agreement"
	},
	{
		Name: "customer_agreement",
		Label: "Customer Agreement"
	},
]

const AgreementsDetails = (props) => {
	const { values } = props;

	return (
		<StyledFormContainer>
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

			<Typography variant="h6" color="primary" sx={{ mt: 3 }}>
				Agreements
			</Typography>

			<FieldArray name="agreements">
				{(arrayHelpers) => {
					const agreements = values.agreements;
					return (
						<>
							{agreements && agreements.length > 0
								? agreements.map((item, index) => (
										<Box key={index} sx={{mt:3}} >
											<Grid container spacing={3}>
												<Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
													<SelectField
														name={`agreements.${index}.agreement`}
														label="Agreement"
														type="text"
														size="small"
														options={agreementsOption}
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
														label="IP Address"
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
									arrayHelpers.push(
										{
											agreement: "",
											signed_at: "",
											ip_address: "",
										},
									)
								}
							>
								Add agreements
							</Button>
						</>
					);
				}}
			</FieldArray>
		</StyledFormContainer>
	);
};

export default AgreementsDetails;
