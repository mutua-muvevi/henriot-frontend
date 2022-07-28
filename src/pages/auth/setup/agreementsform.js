import React from 'react';

import { Alert, AlertTitle, Box, Button, ButtonGroup, Grid, Grow } from "@mui/material";
import { styled } from "@mui/system";

import { FieldArray } from "formik"

import TextfieldWrapper from "../../../components/forms/textfield/textfield";
import { setupfields } from "./info";


const StyledAgreementForm = styled(Box)(({ theme }) => ({
	
}));

const StyledAgreementFormContentGrid = styled(Grid)(({ theme }) => ({

}));

const StyledAgreementFormContentGridItem = styled(Grid)(({ theme }) => ({

}));

const StyledSetupDocumentsFormContentGridItem = styled(Grid)(({ theme }) => ({

}));

const StyledDisclosureFormContentGridFieldArrayWrapper = styled(Box)(({ theme }) => ({
	margin: "10px auto",
}));

const StyledDisclosureFormContentGridFieldArray = styled(Grid)(({ theme }) => ({
	margin: "10px auto"
}));

const AgreementForm = ({values}) => {
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
											<StyledDisclosureFormContentGridFieldArray container rowSpacing={3} key={index}>
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