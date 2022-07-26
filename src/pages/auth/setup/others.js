import React from 'react';

import { Alert, AlertTitle, Box, Button, Container, Grid, Grow, Typography } from "@mui/material";
import { styled } from "@mui/system";

import DisclosureForm from "./disclosuresform";
import SetupDocumentsForm from "./documentsform";
import EnabledAssetsForm from "./enabledassetsform";
import IdentityContent from "./identitycontent";

const StyledSetupOthers = styled(Container)(({ theme }) => ({
	paddingTop: "50px"
}))

const StyledSetupFormGridContainer = styled(Grid)(({ theme }) => ({

}))

const styledHeaderFont = {
	fontWeight: "700"
}

const StyledSetupOthersGridItem = styled(Grid)(({ theme }) => ({

}))

const SetupOthers = ({ activeStep, handleBack, handleNext, steps }) => {
	return (
		<StyledSetupOthers maxWidth="lg">
			<StyledSetupFormGridContainer container spacing={2}>
				<StyledSetupOthersGridItem item xl={12} lg={12} md={6} sm={12} xs={12}>
					<Typography variant="h5" gutterBottom sx={styledHeaderFont}>
						Disclosures
					</Typography>
				</StyledSetupOthersGridItem>
				<StyledSetupOthersGridItem item xl={9} lg={9} md={6} sm={12} xs={12}>
					<DisclosureForm/>
				</StyledSetupOthersGridItem>

				<StyledSetupOthersGridItem item xl={3} lg={3} md={6} sm={12} xs={12}>
					<IdentityContent/>
				</StyledSetupOthersGridItem>
			</StyledSetupFormGridContainer>

			<StyledSetupFormGridContainer container spacing={2}>
				<StyledSetupOthersGridItem item xl={12} lg={12} md={6} sm={12} xs={12}>
					<Typography variant="h5" gutterBottom sx={styledHeaderFont}>
						Agreements
					</Typography>
				</StyledSetupOthersGridItem>
				<StyledSetupOthersGridItem item xl={9} lg={9} md={6} sm={12} xs={12}>
					<SetupDocumentsForm/>
				</StyledSetupOthersGridItem>
			</StyledSetupFormGridContainer>

			<StyledSetupFormGridContainer container spacing={2}>
				<StyledSetupOthersGridItem item xl={9} lg={9} md={6} sm={12} xs={12}>
					<EnabledAssetsForm/>
				</StyledSetupOthersGridItem>


				<StyledSetupOthersGridItem item xl={12} lg={12} md={6} sm={12} xs={12}>
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
				</StyledSetupOthersGridItem>

			</StyledSetupFormGridContainer>

		</StyledSetupOthers>
	)
}

export default SetupOthers