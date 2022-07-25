import React from 'react';

import { Box, List, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledContentBlockTwo = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	JustifyContent: "center",
	alignItems: "flex-start",
	textAlign: "left",
	marginBottom: "20px",
}))

const StyledContentBlockTwoItems =  styled(Box)(({ theme }) => ({
	marginTop: "20px",
	
}))

const headerFont = {
	fontWeight: "700"
}

const paragraphFont = {
	
}

const ContentBlockTwo = ({data}) => {
	return (
		<StyledContentBlockTwo>
			{data.icon}
			<StyledContentBlockTwoItems>
				<Typography variant="h5" sx={headerFont} gutterBottom>
					{data.title}
				</Typography>
				<Typography variant="body1" sx={paragraphFont} gutterBottom>
					{data.description}
				</Typography>
			</StyledContentBlockTwoItems>
		</StyledContentBlockTwo>
	)
}

export default ContentBlockTwo