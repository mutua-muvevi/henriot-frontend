import React from 'react';

import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import UpperContent from "./uppercontent";
import TabsArea from "./tabsarea";
import LowerContent from "./lowercontent";
import RegisterForm from "./form";

const StyledRegistration = styled(Box)(({ theme }) => ({

}))

const StyledRegistrationWrapper = styled(Grid)(({ theme }) => ({

}))

const StyledRegistrationExpl = styled(Grid)(({ theme }) => ({
	backgroundColor: theme.palette.primary.dark,
	// color: theme.palette.primary.main,
	color: "grey",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	minHeight: "100vh !important",
	padding: "0"
}))

const StyledRegistrationForm = styled(Grid)(({ theme }) => ({
	// backgroundColor: "green"

}))

const Register = () => {
	return (
		<StyledRegistration>
			<StyledRegistrationWrapper container columnSpacing={3}>

				<StyledRegistrationExpl item xl={6} lg={6} md={12} sm={12} xs={12}>
					<UpperContent/>
					<TabsArea/>
					<LowerContent/>
				</StyledRegistrationExpl>

				<StyledRegistrationForm item xl={6} lg={6} md={12} sm={12} xs={12}>
					<RegisterForm/>
				</StyledRegistrationForm>

			</StyledRegistrationWrapper>
		</StyledRegistration>
	)
}

export default Register