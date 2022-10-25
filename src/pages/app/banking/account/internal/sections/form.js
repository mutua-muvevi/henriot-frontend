import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { BsCheckLg } from "react-icons/bs";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextfieldWrapper from "src/components/forms/textfield/textfield";
import SelectField from "src/components/forms/select/select";

const INITIAL_FORM_STATE = {
	from: "",
	to: "",
	amount: 0,
	password:""
}

const FORM_VALIDATION = Yup.object().shape({
	from: Yup.string().required("Please verify who the transfer is from"),
	to: Yup.string().required("Please verify who the transfer is going to"),
	amount: Yup.number().min(0, "Te minimum amount required is any value greater than zero").required("Please the amount you wish to transfer"),
	password: Yup.string().required("Please provide the one time password sent to you")
})


const StyledInternalTransferForm = styled(Box)(({ theme }) => ({
	marginTop: "30px"
}));


const StyledFormContainer = styled(Box)(({ theme }) => ({

}));

const users = [
	{ Name: "User One" },
	{ Name: "User Two" },
	{ Name: "User Three" },
	{ Name: "User Four" },
]

const StyledTranferInputGroups = styled(Stack)(({ theme }) => ({
	width: "70%",
	marginLeft: "auto",
	marginRight: "auto",
	marginBottom: "30px"
}));

const StyledInformationCard = styled(Card)(({ theme }) => ({
	borderRadius: theme.shape.borderRadius,
	width: "100%",
	minHeight: "100px"
}));

const StyledInformationCardHeader = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	padding: "10px",
	borderBottom: "1px solid grey"
}));

const StyledInformationCardBody = styled(Box)(({ theme }) => ({
	padding: "10px",

}));

const iconStyles = {
	marginRight: "20px"
}

const StyledAccountBalancesInformation = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "left",
	alignItems: "center",
	textAlign: "left"
}));

const accountBalancesInformation = [
	"Current account balance is $0",
	"Trading account available balance $24,081,790 / $0.00 pending from 1 withdrawal",
	"Debit Card available balance $1,100.00"
]

const InternalTransferForm = () => {

	const submitHandler = (values) => {
		alert(JSON.stringify(values))
	}

	return (
		<StyledInternalTransferForm>
			<Formik
				initialValues={{
					...INITIAL_FORM_STATE
				}}
				validationSchema={ FORM_VALIDATION }
				onSubmit = { submitHandler }
			>
				<Form>
					<StyledFormContainer>
						<StyledTranferInputGroups
							direction="column"
							alignItems="center"
							spacing={3}
						>
							<Typography variant="h6" color="text.secondary" >
								Sender and Receiver
							</Typography>
							<SelectField
								type="text"
								name="from"
								label="From"
								size="small"
								options={users}
								required
							/>
							<SelectField
								type="text"
								name="to"
								label="To"
								size="small"
								options={users}
								required
							/>
						</StyledTranferInputGroups>

						<StyledTranferInputGroups
							direction="column"
							alignItems="center"
							spacing={3}
						>
							<TextfieldWrapper
								type="number"
								name="amount"
								label="Transfer amount"
								size="small"
								required
							/>

							<StyledInformationCard>
								<StyledInformationCardHeader>
									<Typography variant="body2" color="text.primary">
										Account Balances
									</Typography>
								</StyledInformationCardHeader>
								<StyledInformationCardBody>
									{
										accountBalancesInformation.map((el,i) => (
											<StyledAccountBalancesInformation key={i}>
												<BsCheckLg style={iconStyles}/>
												<Typography variant="body2" color="text.secondary">
													{el}
												</Typography>
											</StyledAccountBalancesInformation>
										))
									}
								</StyledInformationCardBody>
							</StyledInformationCard>

							<TextfieldWrapper
								type="password"
								name="password"
								label="One time password"
								size="small"
								required
							/>

							<Button variant="contained" type="submit" color="primary">
								Submit Request
							</Button>
						</StyledTranferInputGroups>
					</StyledFormContainer>
				</Form>
			</Formik>
		</StyledInternalTransferForm>
	)
}

export default InternalTransferForm