import React from "react";

import { Box, Container, Grow, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import LoginForm from "./form";
import Page from "../../../components/UI/Page";
import { useTheme } from "@emotion/react";

import LogoBlack from "../../../assets/logo/Black on Transparent.png";
import LogoWhite from "../../../assets/logo/White on Transparent.png";
import { Link } from "react-router-dom";

const StyledLogin = styled(Box)(({ theme }) => ({
	minHeight: "100vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center",
}));

const StyledLogoSection = styled(Box)(({ theme }) => ({
	marginBottom: "20px",
	display: "flex",
	alignItems: "center",
	justifyContent: "left",
	width: "450px",
}));

const styledLogoImage = {
	width: "450px",
};

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
	textAlign: "center",
}));

const Login = () => {
	const theme = useTheme();
	return (
		<Page title="Login">
			<StyledLogin>
				<StyledLogoSection>
					<img
						src={theme.palette.mode === "dark" ? LogoWhite : LogoBlack}
						alt="Henriot logo"
						style={styledLogoImage}
					/>
				</StyledLogoSection>
				<StyledLoginFormWrapper maxWidth="md">
					<Stack direction="column" spacing={3}>
						<Typography variant="h3" color="text.primary">
							Login
						</Typography>
						<LoginForm />

						<Stack direction="column" spacing={1}>
							<Typography variant="body2" color="text.secondary">
								Dont have an account ?{" "}
								<span style={{ fontWeight: 700, color: theme.palette.primary.main }}>
									<Link to="/register" style={{ color: "inherit" }}>
										Register here
									</Link>
								</span>
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Forgot your password?{" "}
								<span style={{ fontWeight: 700, color: theme.palette.primary.main }}>
									<Link to="/auth/forgotpassword" style={{ color: "inherit" }}>
										Request Password Reset
									</Link>
								</span>
							</Typography>
						</Stack>
					</Stack>
				</StyledLoginFormWrapper>
			</StyledLogin>
		</Page>
	);
};

export default Login;
