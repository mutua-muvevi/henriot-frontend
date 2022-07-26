import React from 'react';

import { Alert, AlertTitle, Box, Button, Container, Grid, Grow, Typography } from "@mui/material";
import { styled } from "@mui/system";

import AboutForm from "./aboutform";
import AboutContent from "./aboutcontent";
import TrustedContactForm from "./trustedcontactform";

const StyledSetupAbout = styled(Container)(({ theme }) => ({
	
}))

const StyledSetupFormGridContainer = styled(Grid)(({ theme }) => ({

}))

const styledHeaderFont = {
	fontWeight: "700"
}

const StyledSetupAboutGridItem = styled(Grid)(({ theme }) => ({

}))

const SetupAbout = ({ activeStep, handleBack, handleNext, steps }) => {
	return (
		<StyledSetupAbout maxWidth="lg">
			<StyledSetupFormGridContainer container columnSpacing={5}>
				<StyledSetupAboutGridItem item xl={12} lg={12} md={6} sm={12} xs={12}>
					<Typography variant="h3" gutterBottom sx={styledHeaderFont}>
						Contact information
					</Typography>
				</StyledSetupAboutGridItem>
				<StyledSetupAboutGridItem item xl={9} lg={9} md={6} sm={12} xs={12}>
					<AboutForm/>
				</StyledSetupAboutGridItem>

				<StyledSetupAboutGridItem item xl={3} lg={3} md={6} sm={12} xs={12}>
					<AboutContent/>
				</StyledSetupAboutGridItem>
			</StyledSetupFormGridContainer>

			<StyledSetupFormGridContainer container columnSpacing={5}>
				<StyledSetupAboutGridItem item xl={12} lg={12} md={6} sm={12} xs={12}>
					<Typography variant="h3" gutterBottom sx={styledHeaderFont}>
						Trusted Contacts
					</Typography>
				</StyledSetupAboutGridItem>

				<StyledSetupAboutGridItem item xl={9} lg={9} md={6} sm={12} xs={12}>
					<TrustedContactForm/>
				</StyledSetupAboutGridItem>

				<StyledSetupAboutGridItem item xl={3} lg={3} md={6} sm={12} xs={12}>
					{/* <AboutContent/> */}
				</StyledSetupAboutGridItem>

				<StyledSetupAboutGridItem item xl={12} lg={12} md={6} sm={12} xs={12}>
					<Typography variant="h3" gutterBottom sx={styledHeaderFont}>
							<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, pb: 2}}>
								<Button
									color="inherit"
									disabled={activeStep === 0}
									onClick={handleBack}
									variant="contained"
									sx={{ mr: 1 }}
								>
									Back
								</Button>
								<Box sx={{ flex: '1 1 auto' }} />

								<Button onClick={handleNext} variant="contained">
									{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
								</Button>
							</Box>
					</Typography>
				</StyledSetupAboutGridItem>

			</StyledSetupFormGridContainer>
		</StyledSetupAbout>
	)
}

export default SetupAbout