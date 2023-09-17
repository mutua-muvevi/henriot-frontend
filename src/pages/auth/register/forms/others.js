import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

import SelectField from "../../../../components/forms/select/select";
import CheckBoxField from "src/components/forms/checkbox/checkbox";
import { countriesCode } from "src/content/countries";

import TextfieldWrapper from "../../../../components/forms/textfield/textfield";
import { FieldArray, useFormikContext } from "formik";
import Iconify from "src/components/iconify/iconify";
import { enabledAssetsSelectOptions } from "./info";
import SelectMultipleField from "src/components/forms/select/multiple";

const StyledFormContainer = styled(Box)(({ theme }) => ({}));

const controlledFirm = [
	{
		Name: "CONTROLLED_FIRM",
		Label: "Controlled Firm",
	},
]

const affiliatedFirm = [
	{
		Name: "AFFILIATE_FIRM",
		Label: "Affiliated Firm",
	},
]

const immidiateExposedFamily = [
	{
		Name: "IMMEDIATE_FAMILY_EXPOSED",
		Label: "Immidiate Exposed Family",
	},
]

const OtherDetails = (props) => {
	const { values } = props;

	return (
		<StyledFormContainer>
			<Typography variant="h6" color="primary" sx={{ mb: "20px" }}>
				Other details
			</Typography>

			<Grid container spacing={3} >
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<SelectMultipleField
						name="enabled_assets"
						label="Enabled Assets"
						fullWidth
						size="small"
						options={enabledAssetsSelectOptions}
					/>
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

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<CheckBoxField
						name="immediate_family_exposed"
						label="Is immidiate family exposed?"
						legend="Is immidiate family exposed?"
						fullWidth
					/>
				</Grid>
			</Grid>

			{values.is_control_person? (
				<FieldArray name="context">
					{
						(arrayHelper) => {
							const context = values.context
							console.log(values)

							return (
								<Grid container spacing={3} sx={{mt:3}}>
									<Grid item xs={12}>
										<Typography variant="body1">Context for controlled firm</Typography>
									</Grid>
									<Grid item xs={12}>
										<SelectField
											name={`context.[0].context_type`}
											label="Content type"
											type="text"
											size="small"
											options={controlledFirm}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextfieldWrapper
											name={`context.[0].company_name`}
											label="Company Name"
											type="text"
											size="small"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextfieldWrapper
											name={`context.[0].company_street_address`}
											label="Company's Street Address"
											type="text"
											size="small"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextfieldWrapper
											name={`context.[0].company_city`}
											label="Company City"
											type="text"
											size="small"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextfieldWrapper
											name={`context.[0].company_state`}
											label="Company State"
											type="text"
											size="small"
										/>
									</Grid>
									<Grid item xs={12}>
										<SelectField
											name={`context.[0].company_country`}
											label="Company Country"
											type="text"
											size="small"
											options={countriesCode}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextfieldWrapper
											name={`context.[0].company_compliance_email`}
											label="Company Compliance Email"
											type="text"
											size="small"
										/>
									</Grid>
								</Grid>
							)
						}
					}
				</FieldArray>
			) : null}
{/* {console.log("Values", values)} */}
			{values.immediate_family_exposed ? (
				<FieldArray name="context">
					{
						(arrayHelper) => {
							return (
								<Grid container spacing={3} sx={{mt:3}}>
									<Grid item xs={12}>
										<Typography variant="body1">Context for Immidiate Exposed Family</Typography>
									</Grid>
									<Grid item xs={12}>
										<SelectField
											name={`context.[1].context_type`}
											label="Content type"
											type="text"
											size="small"
											options={immidiateExposedFamily}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextfieldWrapper
											name={`context.[1].company_name`}
											label="Company Name"
											type="text"
											size="small"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextfieldWrapper
											name={`context.[1].company_street_address`}
											label="Company's Street Address"
											type="text"
											size="small"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextfieldWrapper
											name={`context.[1].company_city`}
											label="Company City"
											type="text"
											size="small"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextfieldWrapper
											name={`context.[1].company_state`}
											label="Company State"
											type="text"
											size="small"
										/>
									</Grid>
									<Grid item xs={12}>
										<SelectField
											name={`context.[1].company_country`}
											label="Company Country"
											type="text"
											size="small"
											options={countriesCode}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextfieldWrapper
											name={`context.[1].company_compliance_email`}
											label="Company Compliance Email"
											type="text"
											size="small"
										/>
									</Grid>
								</Grid>
							)
						}
					}
				</FieldArray>
			) : null}

			{values.is_affiliated_exchange_or_finra ? (
				<FieldArray name="context">
					{
						(arrayHelper) => {

							return (
								<Grid container spacing={3} sx={{mt:3}}>
									<Grid item xs={12}>
										<Typography variant="body1">Context for Affiliate echange or FINRA</Typography>
									</Grid>
									<Grid item xs={12}>
										<SelectField
											name={`context.[2].context_type`}
											label="Content type"
											type="text"
											size="small"
											options={affiliatedFirm}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextfieldWrapper
											name={`context.[2].company_name`}
											label="Company Name"
											type="text"
											size="small"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextfieldWrapper
											name={`context.[2].company_street_address`}
											label="Company's Street Address"
											type="text"
											size="small"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextfieldWrapper
											name={`context.[2].company_city`}
											label="Company City"
											type="text"
											size="small"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextfieldWrapper
											name={`context.[2].company_state`}
											label="Company State"
											type="text"
											size="small"
										/>
									</Grid>
									<Grid item xs={12}>
										<SelectField
											name={`context.[2].company_country`}
											label="Company Country"
											type="text"
											size="small"
											options={countriesCode}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextfieldWrapper
											name={`context.[2].company_compliance_email`}
											label="Company Compliance Email"
											type="text"
											size="small"
										/>
									</Grid>
								</Grid>
							)
						}
					}
				</FieldArray>
			) : null}




			{/* {values.immediate_family_exposed ||
			values.is_affiliated_exchange_or_finra ||
			values.is_control_person ||
			values.is_politically_exposed ? (
				<FieldArray name="context">
					{(arrayHelpers) => {
						const context = values.context;
						console.log("Array helpers", arrayHelpers)
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
														<SelectField
															name={`context.${index}.context_type`}
															label="Content type"
															type="text"
															size="small"
															options={contextTypeOptions}
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
															options={countriesCode}
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
														<Button
															type="button"
															onClick={() => arrayHelpers.remove(index)}
														>
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
			) : null} */}
		</StyledFormContainer>
	);
};

export default OtherDetails;
