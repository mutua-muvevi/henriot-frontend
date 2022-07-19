import React from 'react';

import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";


import ContentBlockOne from "../../../components/sections/contentblock/contentone";
import { lowercontent } from "./info"

const StyledLowerContent = styled(Box)(({ theme }) => ({

}))

const LowerContent = () => {
	return (
		<StyledLowerContent>
			<ContentBlockOne data={lowercontent}/>
		</StyledLowerContent>
	)
}

export default LowerContent
