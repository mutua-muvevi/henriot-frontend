import React, { useState } from 'react';

import { Box, Button, ButtonGroup,  CircularProgress, Container, Card, Grid, Stepper, Step, StepLabel, Typography } from '@mui/material';
import { styled } from "@mui/system";
import TableComponent from "../table/table";


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
	margin: "20px auto",
	width: "200px !important"
}))

const CompletedStepper = ({children, handleReset, submitHandler, style, values, handleBack, isSubmitting, errors}) => {

	const contactsObj = {
		email_address: values.email_address,
		phone_number: values.phone_number,
		street_address: values.street_address,
		unit: values.unit,
		postal_code: values.postal_code,
		state: values.state,
		city: values.city,
		country: values.country,
	}

	const contacts = Object.entries(contactsObj)
	const trustedContacts = Object.entries(values.trusted_contact)
	const identities = Object.entries(values.identity)
	const disclosures = Object.entries(values.disclosures).slice(0, 4)

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
				</StyledCompletedSetupUnit>

				<StyledCompletedSetupUnit>
					<Typography variant="h6" gutterBottom sx={subHeaderFont}>
						Disclosures
					</Typography>
					{
							disclosures &&
							disclosures.map((el, i) => (
								<StyledCompletedSetupListItems key={i} item xl={4} lg={4} md={4} sm={12} xs={12}>
									<Typography variant="body1" gutterBottom sx={listKeyFont}>
										{`${el[0]} : `}
									</Typography>
									<Typography variant="body1" gutterBottom sx={listValueFont}>
										{el[1] ? "Yes" : "No"}
									</Typography>
									{console.log("value", el[1] ? "Yes" : "No")}
								</StyledCompletedSetupListItems>
							))
						}
					<Typography variant="h6" gutterBottom sx={subHeaderFont}>
						Disclosure context
					</Typography>

					<TableComponent
						data={values.disclosures.context} 
						aria="Setup form confirmation table for disclosures context" />

					<Typography variant="h6" gutterBottom sx={subHeaderFont}>
						Agreements
					</Typography>
					<TableComponent
						data={values.agreements} 
						aria="Setup form confirmation table for agreements" />

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
							// startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
							// disabled={errors ? true : false}
							type="submit"
							// onClick={() => console.log("VALUES ARE", values)}
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