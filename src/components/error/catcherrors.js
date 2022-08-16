import React from 'react';
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";


const StyledCatchErrors = styled(Box)(({theme}) => ({
	width: "100%",
	height: "100vh",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "#ef2828",
}))

const StyledErrorContainer = styled(Container)(({theme}) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	textAlign: "center",
	backgroundColor: "#c62828",
	minHeight: "50vh",
	borderRadius: "4px"
}))

const styledErrorHeader = {
	fontWeight: "800",
}

const StyledErrorSubHeader = {
	fontWeight: "700"

}

const CatchErrors = ({ error, errorInfo }) => {
	return (
		<StyledCatchErrors>
			<StyledErrorContainer>
				<Typography variant="h1" sx={styledErrorHeader}>
					Error
				</Typography>
				<Typography variant="h3" sx={StyledErrorSubHeader}>
				</Typography>
					{JSON.stringify(error)}
			</StyledErrorContainer>
		</StyledCatchErrors>
	)
}

export default CatchErrors