import React from 'react';

import {  Box, Container, Grow, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import LoginForm from "./form";
import Page from '../../../components/Page';
import Logo from "../../../assets/logo/Black on Transparent.png";


const StyledLogin = styled(Box)(({ theme }) => ({
	minHeight: "100vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center"
}))

const StyledLogoSection = styled(Box)(({ theme }) => ({
	marginBottom: "20px",
	display: "flex",
	alignItems: "center",
	justifyContent: "left",
	width: "450px"
}))

const styledLogoImage = {
	width: "450px"
}

const StyledLoginFormWrapper = styled(Container)(({ theme }) => ({
	minHeight: "50vh",
	backgroundColor: theme.palette.background.paper,
	borderRadius: theme.shape.default,
	filter: "drop-shadow(2px 2px 10px #ccc)",
	marginTop: "5vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center"
}))

const Login = () => {
	return (
		<Page title="Login">
			<StyledLogin>
				<StyledLogoSection>
					<img
						src={Logo}
						alt="Henriot logo"
						style={styledLogoImage}
					/>
				</StyledLogoSection>
				<StyledLoginFormWrapper maxWidth="md">
					<Stack direction="column" spacing={3}>
						<Typography variant="h4" color="text.primary">
							Login
						</Typography>
						<LoginForm/>
					</Stack>
				</StyledLoginFormWrapper>
			</StyledLogin>
		</Page>
	)
}

export default Login