import React from 'react';

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

import Logo from "../../../assets/logo/transparentblacklogo.png";

const StyledRegisterationSuccessModalContent = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	textAlign: "center",
	width: "100%",
	height: "100%"
}))

const StyledLogoSection = styled(Box)(({ theme }) => ({
	marginBottom: "30px",
	display: "flex",
	alignItems: "center",
	justifyContent: "left",
	width: "400px"
}))

const styledLogoImage = {
	width: "450px"
}


const RegisterResponse = ({data}) => {
	return (
		<StyledRegisterationSuccessModalContent>
			<StyledLogoSection>
				<img
					src={Logo}
					alt="Henriot logo"
					style={styledLogoImage}
				/>
			</StyledLogoSection>
			<Typography variant="h2" gutterBottom>
				Check your email and confirm your email address
			</Typography>
			<Typography variant="h5" gutterBottom>
				Your username is 
				<span style={{fontWeight: "800"}}>
					{`${" "} ${data? data.username : null}`}
				</span>
			</Typography>

			<Typography variant="h5" gutterBottom>
				A confirmation email has been sent to 
				<span style={{fontWeight: "800"}}>
				{`${" "} ${data? data.email_address : null}`} 
				</span>
			</Typography>
		</StyledRegisterationSuccessModalContent>
	)
}

export default RegisterResponse