import React from 'react';

import { Alert, AlertTitle, Box, Button, ButtonGroup, Grid, Grow } from "@mui/material";
import { styled } from "@mui/system";

import { FieldArray } from "formik"

import TextfieldWrapper from "../../../../components/forms/textfield/textfield";
import { setupfields } from "../info";
import FileField from "../../../../components/forms/files/files";


const StyledAgreementForm = styled(Box)(({ theme }) => ({
	marginBottom: "50px"
}));

const StyledSetupDocumentsFormContentGridItem = styled(Grid)(({ theme }) => ({

}));

const StyledDisclosureFormContentGridFieldArrayWrapper = styled(Box)(({ theme }) => ({
	margin: "10px auto",
	
}));

const StyledDisclosureFormContentGridFieldArray = styled(Grid)(({ theme }) => ({
	marginBottom: "50px",
	marginTop: "20px"
}));

const AgreementForm = ({values, setFieldValue}) => {
	return (
		<StyledAgreementForm>
			<FieldArray 
				name="agreements"
				render={
					arrayHelpers => {
						const agreements = values.agreements
						return(
							<>
								
								{
									agreements &&
									agreements.length > 0 ? 
									agreements.map((element, index) => (
										<StyledDisclosureFormContentGridFieldArrayWrapper key={index}>
											<StyledDisclosureFormContentGridFieldArray container spacing={3} key={index}>
												{
													setupfields &&
													setupfields.agreements &&
													setupfields.agreements.map((el, i) => (
														<StyledSetupDocumentsFormContentGridItem key={i} item xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
															<TextfieldWrapper
																name={`agreements.${index}.${el.name}`}
																label={el.label}
																type={el.type}
																placeholder={el.placeholder}
																size="small"
															/>
														</StyledSetupDocumentsFormContentGridItem>
													))
												}

												<StyledSetupDocumentsFormContentGridItem item xl={4} lg={4} md={12} sm={12} xs={12}>
													<FileField
														name={`agreements.${index}.agreement`}
														setFieldValue={setFieldValue}
														style={{width: "100%"}}
														// value={undefined}
													/>
												</StyledSetupDocumentsFormContentGridItem>

											</StyledDisclosureFormContentGridFieldArray>
											<ButtonGroup type="button" variant="contained">
												<Button
													color="error"
													onClick={() => arrayHelpers.remove(index)}
													>
													Remove agreements
												</Button>
												
												<Button
													color="primary"
													onClick = {
														() => arrayHelpers.push({
															agreement: "",
															signed_at: "",
															ip_address: "",
															revision: "",
														})
													}
												>
													Add another agreements
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
			{/* <StyledAgreementFormContentGrid container spacing={2}>
				{
					setupfields &&
					setupfields.agreements &&
					setupfields.agreements.map((el, i) => (
						<StyledAgreementFormContentGridItem key={i} item xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
							<TextfieldWrapper
								name={el.name}
								label={el.label}
								type={el.type}
								placeholder={el.placeholder}
								size="small"
							/>
						</StyledAgreementFormContentGridItem>
					))
				}
			</StyledAgreementFormContentGrid> */}
		</StyledAgreementForm>
	)
}

export default AgreementForm