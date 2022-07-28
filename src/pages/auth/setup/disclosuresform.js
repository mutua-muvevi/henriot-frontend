import React from 'react';

import { Alert, AlertTitle, Box, Button, Grid, Grow } from "@mui/material";
import { styled } from "@mui/system";

import { FieldArray } from "formik"

import CheckBoxField from "../../../components/forms/checkbox/checkbox";
import TextfieldWrapper from "../../../components/forms/textfield/textfield";
import { setupfields } from "./info";


const StyledDisclosureForm = styled(Box)(({ theme }) => ({
	
}));

const StyledDisclosureFormContentGrid = styled(Grid)(({ theme }) => ({

}));

const StyledDisclosureFormContentGridItem = styled(Grid)(({ theme }) => ({

}));

const DisclosureForm = ({values}) => {
	return (
		<StyledDisclosureForm>
			<StyledDisclosureFormContentGrid container spacing={2}>
				{
					setupfields &&
					setupfields.disclosures &&
					setupfields.disclosures.map((el, i) => (
						<StyledDisclosureFormContentGridItem key={i} item xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
							<CheckBoxField
								name={el.name}
								label={el.label}
								type={el.type}
								placeholder={el.placeholder}
								size="small"
							/>
						</StyledDisclosureFormContentGridItem>
					))
				}
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
											<Box key={index}>
												{
													setupfields &&
													setupfields.disclosuresContext &&
													setupfields.disclosuresContext.map((el, i) => (
														<StyledDisclosureFormContentGridItem key={i} item xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
															<TextfieldWrapper
																name={`disclosures.context.${index}.${el.name}`}
																label={el.label}
																type={el.type}
																placeholder={el.placeholder}
																size="small"
															/>
														</StyledDisclosureFormContentGridItem>
													))
												}
												<Button
													type="button"
													onClick={() => arrayHelpers.remove(index)}
													variant="contained"
													color="error"
													>
													Remove context
												</Button>
											</Box>
										)) : null
									}
									<Button
										type="button"
										variant="outlined"
										color="primary"
										onClick = {
											() => arrayHelpers.push({
												context_type: "",
												company_name: "",
												company_street_address: "",
												company_state: "",
												company_city: "",
												company_country: "",
												subheader: "",
												company_compliance_email: "",
											})
										}
									>
										Add context
									</Button>
								</>
							)
						}
					}
				/>
			</StyledDisclosureFormContentGrid>
		</StyledDisclosureForm>
	)
}

export default DisclosureForm