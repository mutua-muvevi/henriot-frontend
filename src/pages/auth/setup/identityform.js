import React from 'react';

import { Alert, AlertTitle, Box, Button, Grid, Grow } from "@mui/material";
import { styled } from "@mui/system";

import TextfieldWrapper from "../../../components/forms/textfield/textfield";
import { setupfields } from "./info";


const StyledIdentityForm = styled(Box)(({ theme }) => ({
	
}));

const StyledIdentityFormContentGrid = styled(Grid)(({ theme }) => ({

}));

const StyledIdentityFormContentGridItem = styled(Grid)(({ theme }) => ({

}));

const IdentityForm = () => {
	return (
		<StyledIdentityForm>
			<StyledIdentityFormContentGrid container spacing={2}>
				{
					setupfields &&
					setupfields.identityFields &&
					setupfields.identityFields.map((el, i) => (
						<StyledIdentityFormContentGridItem item xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
							<TextfieldWrapper
								name={el.name}
								label={el.label}
								type={el.type}
								placeholder={el.placeholder}
								size="small"
							/>
						</StyledIdentityFormContentGridItem>
					))
				}
			</StyledIdentityFormContentGrid>
		</StyledIdentityForm>
	)
}

export default IdentityForm