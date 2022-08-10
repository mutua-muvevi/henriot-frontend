import React, { useState } from 'react';

import { Box, Button, ButtonGroup,  CircularProgress, Container, Card, Grid, Stepper, Step, StepLabel, Typography } from '@mui/material';
import { styled } from "@mui/system";
import DatagridComponent from "../datagrid/datagrid";


const StyledCompletedStepper = styled(Box)(({ theme }) => ({
	maxWidth: "90vw",
	margin: "auto"
}))

const StyledCompletedSetupWrapper = styled(Container)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	justifyContent: "center",
	textAlign: "center",
}))

const headerFont = {
	marginTop: 2,
	marginBottom: 1,
	fontWeight: "700"
}

const subHeaderFont = {
	fontWeight: "700",
	marginBottom: "10px"
}

const listKeyFont = {
	textTransform: "capitalize",
	marginRight: "10px",
	padding: "5px"
}

const listValueFont = {
	textTransform: "capitalize",
	backgroundColor: "aliceblue",
	padding: "5px"
}

const StyledCompletedSetupUnit = styled(Box)(({ theme }) => ({
	padding: "10px",
	borderRadius: theme.shape.default,
	backgroundColor: "white",
	filter: "drop-shadow(2px 2px 10px #ccc)",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "flex-start",
	textAlign: "center",
	width: "100%",
	margin: "10px auto"
}))

const StyledCompletedSetupUnitContent = styled(Box)(({ theme }) => ({

}))

const StyledCompletedSetupList = styled(Grid)(({ theme }) => ({
	marginBottom: "30px"
}))

const StyledCompletedSetupListItems = styled(Grid)(({ theme }) => ({
	display: "flex",
	justifyContent: "left",
	alignItems: "center",
	textAlign: "center",
}))

const StyledButtonSection = styled(Box)(({ theme }) => ({
	// backroundColor: "green",
	margin: "20px auto",
	width: "200px !important"
}))

const CompletedStepper = ({children, handleReset, submitHandler, style, values, handleBack, isSubmitting, errors}) => {

	const contacts = Object.entries(values.contact)
	const trustedContacts = Object.entries(values.trusted_contact)
	const identities = Object.entries(values.identity)

	const tableHead = Object.keys(values.agreements[0])

	const documentTableRows = values.documents
	const documentTableColumns = [
		{
			field: "id",
			hide: "true"
		},
		{
			field: "document_type",
			align: "left",
			headerAlign: "left",
			headerName: "Document Type",
			width: 150,
		},
		{
			field: "document_sub_type",
			align: "left",
			headerAlign: "left",
			headerName: "Document Subtype",
			width: 150,
		},
		{
			field: "content",
			align: "left",
			headerAlign: "left",
			headerName: "Content",
			width: 150,
		},
		{
			field: "mime_type",
			align: "left",
			headerAlign: "left",
			headerName: "Extension",
			width: 150,
		},
	]

	const agreementTableRows = values.agreements
	const agreementTableColumns = [
		{
			field: "id",
			hide: "true"
		},
		{
			field: "signed_at",
			align: "left",
			headerAlign: "left",
			headerName: "Signed At",
			width: 150,
		},
		{
			field: "ip_address",
			align: "left",
			headerAlign: "left",
			headerName: "IP Adress",
			width: 150,
			
		},
		{
			field: "revision",
			align: "left",
			headerAlign: "left",
			headerName: "Revision",
			width: 150,
			
		},
		{
			field: "agreement",
			align: "left",
			headerAlign: "left",
			headerName: "Document Type",
			width: 150,

		},
	]

	return (
		<StyledCompletedStepper style={style}>
			<StyledCompletedSetupWrapper maxWidth="xl">
				<Typography variant="h5" gutterBottom sx={headerFont}>
					Account setup summary
				</Typography>

				<StyledCompletedSetupUnit>
					<Typography variant="h6" gutterBottom sx={subHeaderFont}>
						About summary
					</Typography>
					<StyledCompletedSetupList container spacing={3}>
						{
							contacts &&
							contacts.map((el, i) => (
								<StyledCompletedSetupListItems key={i} item xl={4} lg={4} md={4} sm={12} xs={12}>
									<Typography variant="body1" gutterBottom sx={listKeyFont}>
										{`${el[0]} : `}
									</Typography>
									<Typography variant="body1" gutterBottom sx={listValueFont}>
										{el[1]}
									</Typography>
								</StyledCompletedSetupListItems>
							))
						}
					</StyledCompletedSetupList>

					<Typography variant="h6" gutterBottom sx={subHeaderFont}>
						Trusted contact
					</Typography>
					<StyledCompletedSetupList container spacing={3}>
						{
							trustedContacts &&
							trustedContacts.map((el, i) => (
								<StyledCompletedSetupListItems key={i} item xl={4} lg={4} md={4} sm={12} xs={12}>
									<Typography variant="body1" gutterBottom sx={listKeyFont}>
										{`${el[0]} : `}
									</Typography>
									<Typography variant="body1" gutterBottom sx={listValueFont}>
										{el[1]}
									</Typography>
								</StyledCompletedSetupListItems>
							))
						}
					</StyledCompletedSetupList>
				</StyledCompletedSetupUnit>

				<StyledCompletedSetupUnit>
					<Typography variant="h6" gutterBottom sx={subHeaderFont}>
						Identity summary
					</Typography>
					<StyledCompletedSetupList container spacing={3}>
						{
							identities &&
							identities.map((el, i) => (
								<StyledCompletedSetupListItems key={i} item xl={4} lg={4} md={4} sm={12} xs={12}>
									<Typography variant="body1" gutterBottom sx={listKeyFont}>
										{`${el[0]} : `}
									</Typography>
									<Typography variant="body1" gutterBottom sx={listValueFont}>
										{el[1]}
									</Typography>
								</StyledCompletedSetupListItems>
							))
						}
					</StyledCompletedSetupList>

					<Typography variant="h6" gutterBottom sx={subHeaderFont}>
						Documents
					</Typography>
					{
						JSON.stringify(values.documents)
					}
					{/* <DatagridComponent
						title="Account setup summary for documents"
						columns={documentTableColumns}
						rows={documentTableRows}
					/> */}
				</StyledCompletedSetupUnit>

				<StyledCompletedSetupUnit>
					<Typography variant="h6" gutterBottom sx={subHeaderFont}>
						Other fiels summary
					</Typography>
					{
						JSON.stringify(values.disclosures)
					}
					<Typography variant="h6" gutterBottom sx={subHeaderFont}>
						Disclosure context
					</Typography>
					{
						JSON.stringify(values.disclosures)
					}
					<Typography variant="h6" gutterBottom sx={subHeaderFont}>
						Agreements
					</Typography>
					{
						// JSON.stringify(tableHead)
					}
					{
						JSON.stringify(values.agreements)
					}
					{/* <DatagridComponent
						title="Account setup summary for agreements"
						columns={agreementTableColumns}
						rows={agreementTableRows}
					/> */}
				</StyledCompletedSetupUnit>

				<StyledButtonSection>
					<Box sx={{ flex: '1 1 auto' }} />
					<ButtonGroup variant="contained" >
						<Button
							type="button"
							// disabled={isSubmitting}
							onClick={handleBack}
							aria-label="Account setup reset button"
							>
								Back
						</Button>

						<Button
							startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
							// disabled={errors ? true : false}
							type="button"
							onClick={() => console.log("VALUES ARE", values)}
							aria-label="Account setup submit button"
						>
							Confirm
						</Button>
					</ButtonGroup>
				</StyledButtonSection>
			</StyledCompletedSetupWrapper>
		</StyledCompletedStepper>
	)
}

export default CompletedStepper