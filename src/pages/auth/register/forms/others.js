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
import CheckBoxField from "src/components/forms/checkbox/checkbox";
import { countries } from "src/content/countries";

import TextfieldWrapper from "../../../../components/forms/textfield/textfield";
import { FieldArray, useField } from "formik";
import Iconify from "src/components/iconify/iconify";

const StyledFormContainer = styled(Box)(({ theme }) => ({}));

const OtherDetails = (props) => {
	const { values } = props;

	return (
		<StyledFormContainer>
			<Typography variant="h6" color="primary" sx={{ mb: "20px" }}>
				Other details
			</Typography>

			<Grid container spacing={3} sx={{ mb: 3 }}>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper name="enabled_assets" label="Enabled Assets" fullWidth size="small" />
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<CheckBoxField
						name="is_control_person"
						label="Are you controll person?"
						legend="Are you controll person?"
						fullWidth
					/>
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<CheckBoxField
						name="is_affiliated_exchange_or_finra"
						label="Are you an affiliate exhange or finra?"
						legend="Are you an affiliate exhange or finra?"
						fullWidth
					/>
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<CheckBoxField
						name="is_politically_exposed"
						label="Are you politically Exposed?"
						legend="Are you politically Exposed?"
						fullWidth
					/>
				</Grid>
			</Grid>

			<FieldArray name="context">
				{(arrayHelpers) => {
					const context = values.context;
					return (
						<>
							{context && context.length > 0
								? context.map((item, index) => (
										<Box key={index} sx={{ marginBottom: "50px" }}>
											<Grid container spacing={3}>
												<Grid item xs={12}>
													<Typography variant="body1">Context</Typography>
												</Grid>
												<Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
													<TextfieldWrapper
														name={`context.${index}.context_type`}
														label="Content type"
														type="text"
														size="small"
													/>
												</Grid>
												<Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
													<TextfieldWrapper
														name={`context.${index}.company_name`}
														label="Company Name"
														type="text"
														size="small"
													/>
												</Grid>
												<Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
													<TextfieldWrapper
														name={`context.${index}.company_street_address`}
														label="Company Street Address "
														type="text"
														size="small"
													/>
												</Grid>
												<Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
													<TextfieldWrapper
														name={`context.${index}.company_city`}
														label="Company City"
														type="text"
														size="small"
													/>
												</Grid>
												<Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
													<TextfieldWrapper
														name={`context.${index}.company_state`}
														label="Company State"
														type="text"
														size="small"
													/>
												</Grid>
												<Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
													<SelectField
														name={`context.${index}.company_country`}
														label="Company Country"
														type="text"
														size="small"
														options={countries}
													/>
												</Grid>
												<Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
													<TextfieldWrapper
														name={`context.${index}.company_compliance_email`}
														label="Company Compliance Email"
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
										context_type: "",
										company_name: "",
										company_street_address: "",
										company_city: "",
										company_state: "",
										company_country: "",
										company_compliance_email: "",
									})
								}
							>
								Add context
							</Button>
						</>
					);
				}}
			</FieldArray>
		</StyledFormContainer>
	);
};

export default OtherDetails;
