import React from 'react';

import { Alert, AlertTitle, Box, Button, ButtonGroup, Grid, Grow, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { BsPlusLg } from "react-icons/bs";

import { FieldArray } from "formik"

import TextfieldWrapper from "../../../../components/forms/textfield/textfield";
import SelectField from "../../../../components/forms/select/select";
import { setupfields, MIMETYPE } from "../info";
import FilesField from "../../../../components/forms/files/files";
import FileField from "../../../../components/forms/files/files";



const StyledSetupDocumentsForm = styled(Box)(({ theme }) => ({
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


const SetupDocumentsForm = ({values, setFieldValue}) => {
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
												<StyledDisclosureFormContentGridFieldArray container spacing={3} key={index}>
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

													<StyledSetupDocumentsFormContentGridItem item xl={4} lg={4} md={12} sm={12} xs={12}>
														<FileField
															name={`documents.${index}.content`}
															setFieldValue={setFieldValue}
															style={{width: "100%"}}
															// value={undefined}
														/>
													</StyledSetupDocumentsFormContentGridItem>

													<StyledSetupDocumentsFormContentGridItem item xl={4} lg={4} md={12} sm={12} xs={12}>
														<SelectField
															type="text"
															name={`documents.${index}.mime_type`}
															label="MIME Type"
															size="small"
															options={MIMETYPE}
															required
														/>
													</StyledSetupDocumentsFormContentGridItem>

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