import React from 'react';

import { Alert, AlertTitle, Box, Button, Grid, Grow } from "@mui/material";
import { styled } from "@mui/system";

import TextfieldWrapper from "../../../components/forms/textfield/textfield";
import { setupfields } from "./info";


const StyledAgreementForm = styled(Box)(({ theme }) => ({
	
}));

const StyledAgreementFormContentGrid = styled(Grid)(({ theme }) => ({

}));

const StyledAgreementFormContentGridItem = styled(Grid)(({ theme }) => ({

}));

const AgreementForm = () => {
	return (
		<StyledAgreementForm>
			<StyledAgreementFormContentGrid container spacing={2}>
				{
					setupfields &&
					setupfields.agreements &&
					setupfields.agreements.map((el, i) => (
						<StyledAgreementFormContentGridItem key={i} item xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
							<TextfieldWrapper
								name={el.name}
								label={el.label}
								type={el.type}
								placeholder={el.placeholder}
								size="small"
							/>
						</StyledAgreementFormContentGridItem>
					))
				}
			</StyledAgreementFormContentGrid>
		</StyledAgreementForm>
	)
}

export default AgreementForm