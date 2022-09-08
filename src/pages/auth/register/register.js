import React from 'react';

import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import UpperContent from "./uppercontent";
//import TabsArea from "./tabsarea";
import LowerContent from "./lowercontent";
import RegisterForm from "./form";
import Page from '../../../components/Page';

const StyledRegistration = styled(Box)(({ theme }) => ({

}))

const StyledRegistrationWrapper = styled(Grid)(({ theme }) => ({

}))

const StyledRegistrationExpl = styled(Grid)(({ theme }) => ({
	backgroundColor: theme.palette.background.dark,
	// color: theme.palette.primary.main,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "flex-end",
	minHeight: "100vh !important",
	padding: "0",
	width: "100%"
}))

const StyledRegistrationExplContent = styled(Box)(({ theme }) => ({
	width: "70%",
	height: "auto",
	color: "whitesmoke"
}))

const StyledRegistrationForm = styled(Grid)(({ theme }) => ({
	minHeight: "100vh !important",

}))

const StyledRegistrationFormContent = styled(Box)(({ theme }) => ({
	width: "100%",
	height: "100%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "flex-end",
}))

const Register = () => {
	return (
		<Page title="Register">
			<StyledRegistration>
				<StyledRegistrationWrapper container columnSpacing={3}>

					<StyledRegistrationExpl item xl={6} lg={6} md={12} sm={12} xs={12}>
						<StyledRegistrationExplContent>
							<UpperContent/>
							{/*<TabsArea/>*/}
							<LowerContent/>
						</StyledRegistrationExplContent>
					</StyledRegistrationExpl>

					<StyledRegistrationForm item xl={6} lg={6} md={12} sm={12} xs={12}>
						<StyledRegistrationFormContent>
							<RegisterForm/>
						</StyledRegistrationFormContent>
					</StyledRegistrationForm>

				</StyledRegistrationWrapper>
			</StyledRegistration>
		</Page>
	)
}

export default Register