import React from 'react';

import { Alert, AlertTitle, Box, Button, ButtonGroup, Grid, Grow, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { FieldArray } from "formik"

import TextfieldWrapper from "../../../components/forms/textfield/textfield";
import { setupfields } from "./info";


const StyledSetupDocumentsForm = styled(Box)(({ theme }) => ({
	marginBottom: "45px"
}));

const StyledSetupDocumentsFormContentGrid = styled(Grid)(({ theme }) => ({

}));

const StyledSetupDocumentsFormContentGridItem = styled(Grid)(({ theme }) => ({

}));

const StyledDisclosureFormContentGridFieldArrayWrapper = styled(Box)(({ theme }) => ({
	margin: "10px auto",
}));

const StyledDisclosureFormContentGridFieldArray = styled(Grid)(({ theme }) => ({
	margin: "10px auto"
}));

const StyledDisclosureFormContentGridItemFieldArray = styled(Grid)(({ theme }) => ({
	

}));

const SetupDocumentsForm = ({values}) => {
	return (
		<StyledSetupDocumentsForm>
			
			<FieldArray 
					name="documents"
					render={
						arrayHelpers => {
							const documents = values.documents
							return(
								<>
									
									{
										documents &&
										documents.length > 0 ? 
										documents.map((element, index) => (
											<StyledDisclosureFormContentGridFieldArrayWrapper key={index}>
												<StyledDisclosureFormContentGridFieldArray container rowSpacing={3} key={index}>
													{
														setupfields &&
														setupfields.documents &&
														setupfields.documents.map((el, i) => (
															<StyledSetupDocumentsFormContentGridItem key={i} item xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
																<TextfieldWrapper
																	name={`documents.${index}.${el.name}`}
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
														Remove documents
													</Button>
													
													<Button
														color="primary"
														onClick = {
															() => arrayHelpers.push({
																document_type: "",
																document_sub_type: "",
																content: "",
																mime_type: "",
															})
														}
													>
														Add another documents
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
		</StyledSetupDocumentsForm>
	)
}

export default SetupDocumentsForm