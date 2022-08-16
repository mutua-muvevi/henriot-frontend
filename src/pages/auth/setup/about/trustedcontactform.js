import React from 'react';

import { Alert, AlertTitle, Box, Button, Grid, Grow, Typography } from "@mui/material";
import { styled } from "@mui/system";

import TextfieldWrapper from "../../../../components/forms/textfield/textfield";
import { setupfields } from "../info";


const StyledTrustedContactForm = styled(Box)(({ theme }) => ({
	marginBottom: "45px"
}));

const StyledTrustedContactFormContentGrid = styled(Grid)(({ theme }) => ({

}));

const StyledTrustedContactFormContentGridItem = styled(Grid)(({ theme }) => ({

}));

const TrustedContactForm = () => {
	return (
		<StyledTrustedContactForm>
			<StyledTrustedContactFormContentGrid container spacing={2}>
				{
					setupfields &&
					setupfields.trustedContact &&
					setupfields.trustedContact.map((el, i) => (
						<StyledTrustedContactFormContentGridItem key={i} item xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
							<TextfieldWrapper
								name={el.name}
								label={el.label}
								type={el.type}
								placeholder={el.placeholder}
								size="small"
							/>
						</StyledTrustedContactFormContentGridItem>
					))
				}
			</StyledTrustedContactFormContentGrid>
		</StyledTrustedContactForm>
	)
}

export default TrustedContactForm