import React from 'react';

import { Box } from "@mui/material";
import { styled } from "@mui/system";

import ContentBlockTwo from "../../../components/sections/contentblock/contenttwo";
import { rightSideInformation } from "./info"

const StyledIdentityContent = styled(Box)(({ theme }) => ({
	marginBottom: "20px"
}))

const IdentityContent = () => {
	return (
		<StyledIdentityContent>
			<ContentBlockTwo data={rightSideInformation.phone}/>
		</StyledIdentityContent>
	)
}

export default IdentityContent