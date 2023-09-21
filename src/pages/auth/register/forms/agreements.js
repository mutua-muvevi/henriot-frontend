import { useState } from "react";
import { Box, Grid, Typography, Button, Checkbox, Modal, FormControlLabel, Stack } from "@mui/material";
import { styled } from "@mui/system";

import TextfieldWrapper from "../../../../components/forms/textfield/textfield";
import { FieldArray } from "formik";
import Iconify from "src/components/iconify/iconify";
import ReusableDateTimePicker from "src/components/forms/datepicker/datetime";
import SelectField from "src/components/forms/select/select";
import CheckboxField from "src/components/forms/checkbox/checkbox";
import ReusableModal from "src/components/modal/modal";
import { sentenceCase } from "change-case";
import Scrollbar from "src/components/UI/Scrollbar";
import { registerAgreements } from "src/content/agreements";

const StyledFormContainer = styled(Box)(({ theme }) => ({}));

const agreementsOption = [
	{
		Name: "margin_agreement",
		Label: "Margin Agreement",
	},
	{
		Name: "account_agreement",
		Label: "Account Agreement",
	},
	{
		Name: "customer_agreement",
		Label: "Customer Agreement",
	},
];

const modalStyles = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	bgcolor: "background.paper",
	boxShadow: 24,
	padding: "20px",
	width: "75vw",
	overflow: "hidden",
	borderRadius: 2,
};

const AgreementsDetails = (props) => {
	const { values, setFieldValue } = props;
	const [showMarginModal, setShowMarginModal] = useState(false);
	const [showAccountModal, setShowAccountModal] = useState(false);
	const [showCustomerModal, setShowCustomerModal] = useState(false);
	const [selectedAgreement, setSelectedAgreement] = useState(null);


	return (
		<StyledFormContainer>
			{console.log("showMarginModal", showMarginModal)}
			{console.log("showAccountModal", showAccountModal)}
			{console.log("selectedAgreement", selectedAgreement)}
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Typography variant="body1">Trusted Contact</Typography>
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper name="trusted_given_name" label="Given Name" fullWidth size="small" />
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper name="trusted_family_name" label="Family Name" fullWidth size="small" />
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper name="trusted_email_address" label="Email Address" fullWidth size="small" />
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<Typography variant="h6" color="primary">
						Agreements
					</Typography>
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<FormControlLabel
						label="Read Margin Agreement"
						control={
							<Checkbox
								onClick={() => {
									setSelectedAgreement("margin_agreement");
									setShowMarginModal(true);
									setFieldValue("agreements.0.agreement", "margin_agreement");
									setFieldValue("agreements.0.signed_at", Date.now());
									setFieldValue("agreements.0.ip_address", "");
								}}
							/>
						}
					/>
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<FormControlLabel
						label="Read Account Agreement"
						control={
							<Checkbox
								onClick={() => {
									setSelectedAgreement("account_agreement");
									setShowAccountModal(true);
									setFieldValue("agreements.1.agreement", "account_agreement");
									setFieldValue("agreements.1.signed_at", Date.now());
									setFieldValue("agreements.1.ip_address", "");
								}}
							/>
						}
					/>
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					{console.log(values)}
					<FormControlLabel
						label="Read Customer Agreement"
						control={
							<Checkbox
								onClick={() => {
									setSelectedAgreement("customer_agreement");
									setShowCustomerModal(true);
									setFieldValue("agreements.2.agreement", "customer_agreement");
									setFieldValue("agreements.2.signed_at", Date.now());
									setFieldValue("agreements.2.ip_address", "");
								}}
							/>
						}
					/>
				</Grid>
			</Grid>

			{/* Margin Agreement Modal */}
			<Modal open={showMarginModal} onClose={() => setShowMarginModal(false)}>
				<Box sx={modalStyles}>
					<Stack diretion="column" spacing={3} sx={{ height: "48vh" }}>
						<Typography gutterBottom variant="h5">
							Margin Agreement
						</Typography>

						<Scrollbar
							sx={{
								height: "45vh",
								"& .simplebar-content": { height: "45vh", display: "flex", flexDirection: "column" },
							}}
						>
							<Stack direction="column" spacing={2}>
								{registerAgreements.map((txt) => (
									<Typography variant="body1" key={txt}>
										{sentenceCase(txt)}
									</Typography>
								))}
							</Stack>
						</Scrollbar>
					</Stack>
				</Box>
			</Modal>

			{/* Account Agreement Modal */}
			<Modal open={showAccountModal} onClose={() => setShowAccountModal(false)}>
				<Box sx={modalStyles}>
					<Stack direction="column" spacing={3} sx={{ height: "48vh" }}>
						<Typography variant="h5" gutterBottom>
							Account Agreement
						</Typography>

						<Scrollbar
							sx={{
								height: "45vh",
								"& .simplebar-content": { height: "45vh", display: "flex", flexDirection: "column" },
							}}
						>
							<Stack direction="column" spacing={2}>
								{registerAgreements.map((txt) => (
									<Typography variant="body1" key={txt}>
										{sentenceCase(txt)}
									</Typography>
								))}
							</Stack>
						</Scrollbar>
					</Stack>
				</Box>
			</Modal>

			{/* Customer Agreement Modal */}
			<Modal open={showCustomerModal} onClose={() => setShowCustomerModal(false)}>
				<Box sx={modalStyles}>
					<Stack diretion="column" spacing={3} sx={{ height: "45vh" }}>
						<Typography gutterBottom variant="h5">
							Customer Agreement
						</Typography>

						<Scrollbar
							sx={{
								height: "45vh",
								"& .simplebar-content": { height: "45vh", display: "flex", flexDirection: "column" },
							}}
						>
							<Stack direction="column" spacing={2}>
								{registerAgreements.map((txt) => (
									<Typography variant="body1" key={txt}>
										{sentenceCase(txt)}
									</Typography>
								))}
							</Stack>
						</Scrollbar>
					</Stack>
				</Box>
			</Modal>
		</StyledFormContainer>
	);
};

export default AgreementsDetails;
