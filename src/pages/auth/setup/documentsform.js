import React from 'react';

import { Alert, AlertTitle, Box, Button, Grid, Grow, Typography } from "@mui/material";
import { styled } from "@mui/system";

import TextfieldWrapper from "../../../components/forms/textfield/textfield";
import { setupfields } from "./info";


const StyledSetupDocumentsForm = styled(Box)(({ theme }) => ({
	marginBottom: "45px"
}));

const StyledSetupDocumentsFormContentGrid = styled(Grid)(({ theme }) => ({

}));

const StyledSetupDocumentsFormContentGridItem = styled(Grid)(({ theme }) => ({

}));

const SetupDocumentsForm = () => {
	return (
		<StyledSetupDocumentsForm>
			<StyledSetupDocumentsFormContentGrid container spacing={2}>
				{
					setupfields &&
					setupfields.documents &&
					setupfields.documents.map((el, i) => (
						<StyledSetupDocumentsFormContentGridItem key={i} item xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
							<TextfieldWrapper
								name={el.name}
								label={el.label}
								type={el.type}
								placeholder={el.placeholder}
								size="small"
							/>
						</StyledSetupDocumentsFormContentGridItem>
					))
				}
			</StyledSetupDocumentsFormContentGrid>
		</StyledSetupDocumentsForm>
	)
}

export default SetupDocumentsForm