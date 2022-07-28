import React from 'react';

import { Alert, AlertTitle, Box, Button, Container, Grid, Grow, Typography } from "@mui/material";
import { styled } from "@mui/system";

import IdentityForm from "./identityform";
import SetupDocumentsForm from "./documentsform";
import IdentityContent from "./identitycontent";

const StyledSetupIdentity = styled(Container)(({ theme }) => ({
	paddingTop: "50px"
}))

const StyledSetupFormGridContainer = styled(Grid)(({ theme }) => ({

}))

const styledHeaderFont = {
	fontWeight: "700"
}

const StyledSetupIdentityGridItem = styled(Grid)(({ theme }) => ({

}))

const SetupIdentity = ({ activeStep, handleBack, handleNext, steps, values }) => {
	return (
		<StyledSetupIdentity maxWidth="lg">
			<StyledSetupFormGridContainer container spacing={2}>
				<StyledSetupIdentityGridItem item xl={12} lg={12} md={6} sm={12} xs={12}>
					<Typography variant="h5" gutterBottom sx={styledHeaderFont}>
						Identity information
					</Typography>
				</StyledSetupIdentityGridItem>
				<StyledSetupIdentityGridItem item xl={9} lg={9} md={6} sm={12} xs={12}>
					<IdentityForm/>
				</StyledSetupIdentityGridItem>

				<StyledSetupIdentityGridItem item xl={3} lg={3} md={6} sm={12} xs={12}>
					<IdentityContent/>
				</StyledSetupIdentityGridItem>
			</StyledSetupFormGridContainer>

			<StyledSetupFormGridContainer container spacing={2}>
				<StyledSetupIdentityGridItem item xl={12} lg={12} md={6} sm={12} xs={12}>
					<Typography variant="h5" gutterBottom sx={styledHeaderFont}>
						Documents
					</Typography>
				</StyledSetupIdentityGridItem>
				<StyledSetupIdentityGridItem item xl={9} lg={9} md={6} sm={12} xs={12}>
					<SetupDocumentsForm/>
				</StyledSetupIdentityGridItem>

				
				<StyledSetupIdentityGridItem item xl={12} lg={12} md={6} sm={12} xs={12}>
					<Typography variant="h5" gutterBottom sx={styledHeaderFont}>
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
				</StyledSetupIdentityGridItem>

			</StyledSetupFormGridContainer>

		</StyledSetupIdentity>
	)
}

export default SetupIdentity