import React from 'react';

import { Alert, AlertTitle, Box, Button, Grid, Grow, Typography } from "@mui/material";
import { styled } from "@mui/system";

import TextfieldWrapper from "../../../components/forms/textfield/textfield";
import { setupfields } from "./info";


const StyledAboutForm = styled(Box)(({ theme }) => ({
	marginBottom: "45px"
}));

const StyledAboutFormContentGrid = styled(Grid)(({ theme }) => ({

}));

const StyledAboutFormContentGridItem = styled(Grid)(({ theme }) => ({

}));

const AboutForm = () => {
	return (
		<StyledAboutForm>
			<StyledAboutFormContentGrid container spacing={2}>
				{
					setupfields &&
					setupfields.contactFields &&
					setupfields.contactFields.map((el, i) => (
						<StyledAboutFormContentGridItem item key={i} xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
							<TextfieldWrapper
								name={el.name}
								label={el.label}
								type={el.type}
								placeholder={el.placeholder}
								size="small"
							/>
						</StyledAboutFormContentGridItem>
					))
				}
			</StyledAboutFormContentGrid>
		</StyledAboutForm>
	)
}

export default AboutForm