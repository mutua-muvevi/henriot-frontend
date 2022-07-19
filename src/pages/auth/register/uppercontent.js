import React from 'react';

import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ContentBlockOne from "../../../components/sections/contentblock/contentone";

import { uppercontent } from "./info"

const StyledUpperContent = styled(Box)(({ theme }) => ({

}))

const UpperContent = () => {
	return (
		<StyledUpperContent>
			<ContentBlockOne data={uppercontent}/>
		</StyledUpperContent>
	)
}

export default UpperContent
