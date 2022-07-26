import React from 'react';

import { Alert, AlertTitle, Box, Button, Container, Grid, Grow, Typography } from "@mui/material";
import { styled } from "@mui/system";

import AboutForm from "./aboutform";
import AboutContent from "./aboutcontent";

const StyledSetupAbout = styled(Container)(({ theme }) => ({
	
}))

const StyledSetupFormGridContainer = styled(Grid)(({ theme }) => ({

}))

const styledHeaderFont = {
	fontWeight: "700"
}

const StyledSetupAboutGridItem = styled(Grid)(({ theme }) => ({

}))

const SetupAbout = () => {
	return (
		<StyledSetupAbout maxWidth="lg">
			<StyledSetupFormGridContainer container spacing={2}>
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
		</StyledSetupAbout>
	)
}

export default SetupAbout