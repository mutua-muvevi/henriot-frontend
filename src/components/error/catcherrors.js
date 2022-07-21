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
	backgroundColor: "#d32f2f",
}))

const StyledErrorContainer = styled(Container)(({theme}) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	textAlign: "center",
	backgroundColor: "yellow",
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
				<Typography variant="h2" sx={StyledErrorSubHeader}>
					Something went wrong
				</Typography>
			</StyledErrorContainer>
		</StyledCatchErrors>
	)
}

export default CatchErrors