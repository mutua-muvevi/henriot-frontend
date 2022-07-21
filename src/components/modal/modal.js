import React from 'react';

import { Box, Container, Modal, Typography } from "@mui/material";
import { styled } from "@mui/system";

import Logo from "../../assets/logo/transparentblacklogo.png"

const StyledFormContainerWrapper = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	border: 'none',
	boxShadow: 24,
	paddingTop: 2,
	paddingBottom: 2,
	borderRadius: theme.shape.default,
	height: "100%"
}))

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

const ReusableModal = ({ modal, setModal, style, arialabel, ariadescription, data }) => {
	return (
		<Modal 
			sx={style}
			open={modal}
			onClose={() => setModal(false)}
			aria-labelledby={arialabel}
			aria-describedby={ariadescription}
		>
			<StyledFormContainerWrapper>
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
						{`${" "} ${data? data.email : null}`} 
						</span>
					</Typography>
				</StyledRegisterationSuccessModalContent>
			</StyledFormContainerWrapper>
		</Modal>
	)
}

export default ReusableModal