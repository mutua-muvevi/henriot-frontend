import React from 'react'

import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";
import FileField from "../components/forms/files/files";

const BoxContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: "100%",
	height: "100vh",
}));

const INITIAL_FORM_STATE = {
	image: "",
	nestedImage: {
		social: ""
	},
	dynamicArray: [
		{dynamic: ""}
	]
}

const FORM_VALIDATION = Yup.object().shape({
	image: Yup.mixed().required().test(
		"fileSize",
		"Your video is too big :(",
		value => value && value.size <= 262144000
	),
	nestedImage: Yup.object().shape({
		social: Yup.mixed().required()
	}),
	dynamicArray: Yup.array().of(
		Yup.object().shape({
			dynamic: Yup.mixed().required("A REQUIRED FIELD")
		})
	)
})

const SandboxOne = () => {

	const submitHandler = (values) => {
		console.log("SUBMIT VALUES",values)
	}

	return (
		<BoxContainer>
			<Formik
				initialValues={{
					...INITIAL_FORM_STATE
				}}
				validationSchema={ FORM_VALIDATION }
				onSubmit = { submitHandler }
			>
				{
					({values, setFieldValue, errors, touched}) => (
						<Form autoComplete="off" autoCorrect="off" >

							<FileField
								setFieldValue={setFieldValue}
								name="image"
								errors={errors}
								/>
							<FileField
								setFieldValue={setFieldValue}
								name="nestedImage.social"
								errors={errors}
								/>
							<FieldArray
			
								name="dynamicArray"
								render={
									arrayHelpers => {
										const dynamicArray = values.dynamicArray
										return (
											<>
												{
													dynamicArray &&
													dynamicArray.length > 0 ? 
													dynamicArray.map((element, index) => (
														<div key={index}>
															<FileField
																name={`dynamicArray.${index}.dynamic`}
																setFieldValue={setFieldValue}
																size="small"
															/>
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
																		dynamic:""
																	})
																}
															>
																Add another documents
															</Button>
														</div>
														
													))	: null							
												}
											</>
										)
									}
								 }
								/>
								<br/>
							<Button type="submit" variant="contained">submit</Button>
						</Form>
					)
				}
			</Formik>
		</BoxContainer>
	)
}

export default SandboxOne