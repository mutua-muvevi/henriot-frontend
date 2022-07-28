import React from 'react';

import { Alert, AlertTitle, Box, Button, ButtonGroup, Grid, Grow } from "@mui/material";
import { styled } from "@mui/system";

import { FieldArray } from "formik"

import CheckBoxField from "../../../components/forms/checkbox/checkbox";
import TextfieldWrapper from "../../../components/forms/textfield/textfield";
import SelectField from "../../../components/forms/select/select";

import { countries } from "../../../content/countries";
import { USAstates } from "../../../content/states";
import { setupfields } from "./info";


const StyledDisclosureForm = styled(Box)(({ theme }) => ({
	
}));

const StyledDisclosureFormContent = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column"
}));

const StyledDisclosureFormContentGridCheckBox = styled(Grid)(({ theme }) => ({
	margin: "10px auto"
}));

const StyledDisclosureFormContentGridItemCheckBox = styled(Grid)(({ theme }) => ({
	
}));

const StyledDisclosureFormContentGridFieldArrayWrapper = styled(Box)(({ theme }) => ({
	margin: "10px auto",
}));

const StyledDisclosureFormContentGridFieldArray = styled(Grid)(({ theme }) => ({
	margin: "10px auto"
}));

const StyledDisclosureFormContentGridItemFieldArray = styled(Grid)(({ theme }) => ({
	

}));

const DisclosureForm = ({values}) => {
	return (
		<StyledDisclosureForm>
			<StyledDisclosureFormContent>

				<StyledDisclosureFormContentGridCheckBox container>
					{
						setupfields &&
						setupfields.disclosures &&
						setupfields.disclosures.map((el, i) => (
							<StyledDisclosureFormContentGridItemCheckBox key={i} item xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
								<CheckBoxField
									name={el.name}
									label={el.label}
									type={el.type}
									placeholder={el.placeholder}
									size="small"
								/>
							</StyledDisclosureFormContentGridItemCheckBox>
						))
					}
				</StyledDisclosureFormContentGridCheckBox>

				<FieldArray 
					name="disclosures.context"
					render={
						arrayHelpers => {
							const context = values.disclosures.context
							return(
								<>
									
									{
										context &&
										context.length > 0 ? 
										context.map((el, index) => (
											<StyledDisclosureFormContentGridFieldArrayWrapper key={index}>
												<StyledDisclosureFormContentGridFieldArray container rowSpacing={3} key={index}>
													{
														setupfields &&
														setupfields.disclosuresContext &&
														setupfields.disclosuresContext.map((el, i) => (
															<StyledDisclosureFormContentGridItemFieldArray key={i} item xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
																<TextfieldWrapper
																	name={`disclosures.context.${index}.${el.name}`}
																	label={el.label}
																	type={el.type}
																	placeholder={el.placeholder}
																	size="small"
																/>
															</StyledDisclosureFormContentGridItemFieldArray>
														))
													}
													<StyledDisclosureFormContentGridItemFieldArray item xl={6} lg={6} md={12} sm={12} xs={12}>
														<SelectField
															type="text"
															name={`disclosures.context.${index}.company_state`}
															label="Company State"
															size="small"
															options={USAstates}
															required
														/>
													</StyledDisclosureFormContentGridItemFieldArray>
													<StyledDisclosureFormContentGridItemFieldArray item  xl={6} lg={6} md={12} sm={12} xs={12}>
														<SelectField
															type="text"
															name={`disclosures.context.${index}.company_country`}
															label="Company Country"
															size="small"
															options={countries}
															required
														/>
													</StyledDisclosureFormContentGridItemFieldArray>
												</StyledDisclosureFormContentGridFieldArray>
												<ButtonGroup type="button" variant="contained">
													<Button
														color="error"
														{ ...context.length === 0 ? "disabled" : null}
														onClick={() => arrayHelpers.remove(index)}
														>
														Remove context
													</Button>
													
													<Button
														color="primary"
														onClick = {
															() => arrayHelpers.push({
																context_type: "",
																company_name: "",
																company_street_address: "",
																company_state: "",
																company_city: "",
																company_country: "",
																company_compliance_email: "",
															})
														}
													>
														Add another context
													</Button>
												</ButtonGroup>
											</StyledDisclosureFormContentGridFieldArrayWrapper>
										)) : null
									}
								</>
							)
						}
					}
				/>
			</StyledDisclosureFormContent>
		</StyledDisclosureForm>
	)
}

export default DisclosureForm