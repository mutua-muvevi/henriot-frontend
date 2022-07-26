import React from 'react';

import { Alert, AlertTitle, Box, Button, Container, Grid, Grow, Typography } from "@mui/material";
import { styled } from "@mui/system";

import IdentityForm from "./identityform";
import IdentityContent from "./identitycontent";

const StyledSetupIdentity = styled(Container)(({ theme }) => ({
	
}))

const StyledSetupFormGridContainer = styled(Grid)(({ theme }) => ({

}))

const styledHeaderFont = {
	fontWeight: "700"
}

const StyledSetupIdentityGridItem = styled(Grid)(({ theme }) => ({

}))

const SetupIdentity = () => {
	return (
		<StyledSetupIdentity maxWidth="lg">
			<StyledSetupFormGridContainer container spacing={2}>
				<StyledSetupIdentityGridItem item xl={12} lg={12} md={6} sm={12} xs={12}>
					<Typography variant="h3" gutterBottom sx={styledHeaderFont}>
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
		</StyledSetupIdentity>
	)
}

export default SetupIdentity