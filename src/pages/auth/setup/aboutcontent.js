import React from 'react';

import { Box } from "@mui/material";
import { styled } from "@mui/system";

import ContentBlockTwo from "../../../components/sections/contentblock/contenttwo";
import { rightSideInformation } from "./info"

const StyledAboutContent = styled(Box)(({ theme }) => ({
	marginBottom: "20px"
}))

const AboutContent = () => {
	return (
		<StyledAboutContent>
			<ContentBlockTwo data={rightSideInformation.information}/>
		</StyledAboutContent>
	)
}

export default AboutContent