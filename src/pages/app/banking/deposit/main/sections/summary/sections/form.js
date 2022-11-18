import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextfieldWrapper from "src/components/forms/textfield/textfield";
import { selectFieldItems, radioOptions, balancesInfo } from "./info"
import RadioField from "src/components/forms/radio/radio";
import SelectField from "src/components/forms/select/select";
import CheckBoxField from "src/components/forms/checkbox/checkbox";
import React from "react";

const INITIAL_FORM_STATE = {
	type: "",
	from: "",
	to: "",
	currency: "",
	amount: "",
	otp:""
}

const FORM_VALIDATION = Yup.object().shape({
	type: Yup.string().required("Please add the type of deposit"),
	from: Yup.string().required("Please add to whom this transfer is from"),
	to: Yup.string().required("Please add to whom this transfer is goint to"),
	currency: Yup.string().required("Please add your currency"),
	amount: Yup.string().required("Please annd the amount"),
	otp: Yup.string().required("Please annd the OTP Code"),
});

const StyledTermDepositSummaryForm = styled(Box)(({ theme }) => ({

}));

const StyledFormGridWrapper = styled(Grid)(({ theme }) => ({

}));

const StyledFormGridItem = styled(Grid)(({ theme }) => ({

}));

const StyledInputStack = styled(Stack)(({ theme }) => ({
	
}));

const StyledRightGridItem = styled(Grid)(({ theme }) => ({

}));


const StyledRightStack = styled(Stack)(({ theme }) => ({
	backgroundColor: theme.palette.grey[300],
	minHeight: "250px",
	paddingBottom: "20px",
	borderRadius: theme.shape.borderRadius,
	padding: "10px"
}));

const radioItems = ["FIAT Currency", "Crypto Currency"]

const StyledBalancesInfoStack = styled(Stack)(({ theme }) => ({
	paddingLeft: "2px"
}));


const TermDepositSummaryForm = () => {
	
	const submitHandler = (values) => {
		alert(JSON.stringify(values))
	}

	return (
		<StyledTermDepositSummaryForm>
			<Formik
					initialValues={{
						...INITIAL_FORM_STATE
					}}
					validationSchema={ FORM_VALIDATION }
					onSubmit = { submitHandler }
			>
				{() => (
					<Form>
						<Stack
							direction="row"
							spacing={2}
						>
							<StyledFormGridWrapper container spacing={2}>
								<StyledFormGridItem item xs={12} sm={12} md={12} lg={5} xl={5}>
									<StyledInputStack direction="column" alignItems="flex-start" spacing={2}>
										{
											selectFieldItems.map((el, i) => (
														<React.Fragment key={i} >

															{
																el.inputType === "textfield" ? (
																	<TextfieldWrapper
																		type="text"
																		name={el.name}
																		label={el.label}
																		placeholder={el.placeholder}
																		size="small"
																		required={el.required}
																		multiline
																		maxRows={el.multitext ? el.multitext : 5}
																	/>
																): el.inputType === "select" ? (
																	<SelectField
																		name={el.name}
																		label={el.label}
																		placeholder={el.placeholder}
																		size="small"
																		required={el.required}
																		options={el.options? el.options : null}
																	/>
																) : el.inputType === "radio" ? (
																	<RadioField
																		name={el.name}
																		defaultValue={el.defaultValue}
																		placeholder={el.placeholder}
																		size="small"
																		required={el.required}
																		radioItems={el.radioItems}
																		label={el.label}
																	/>
																) : (
																	<CheckBoxField
																		name={el.name}
																		label={el.label}
																		size="small"
																		options={radioItems}
																		legend={el.legend ? el.legend : ""}
																	/>
																)
															}
														</React.Fragment>
											))
										}
									</StyledInputStack>
								</StyledFormGridItem>

								<StyledRightGridItem item xs={12} sm={12} md={12} lg={7} xl={7}>
									<StyledRightStack direction="column" spacing={2} justifyContent="flex-start">
										<Typography variant="h5" color="text.primary">
											Account balances
										</Typography>
										{balancesInfo.map((info, i) => (
											<StyledBalancesInfoStack
												key={i}
												direction="row"
												justifyContent="space-between"
												alignItems="center"
											>
												<Typography variant="body1" color="text.secondary">
													{info.key}
												</Typography>
												<Typography variant="body1" color="text.secondary">
													{info.value}
												</Typography>
											</StyledBalancesInfoStack>
										))}
									</StyledRightStack>
								</StyledRightGridItem>

								<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
									<Button
										type="submit"
										variant="contained"
										color="primary"
										sx={{color:"white", width: "200px"}}
									>
										Transfer
									</Button>
								</Grid>
							</StyledFormGridWrapper>
						</Stack>
					</Form>
				)}
			</Formik>
		</StyledTermDepositSummaryForm>
	)
}

export default TermDepositSummaryForm