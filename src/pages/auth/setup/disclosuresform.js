import React from 'react';

import { Alert, AlertTitle, Box, Button, Grid, Grow } from "@mui/material";
import { styled } from "@mui/system";

import CheckBoxField from "../../../components/forms/checkbox/checkbox";
import { setupfields } from "./info";


const StyledDisclosureForm = styled(Box)(({ theme }) => ({
	
}));

const StyledDisclosureFormContentGrid = styled(Grid)(({ theme }) => ({

}));

const StyledDisclosureFormContentGridItem = styled(Grid)(({ theme }) => ({

}));

const DisclosureForm = () => {
	return (
		<StyledDisclosureForm>
			<StyledDisclosureFormContentGrid container spacing={2}>
				{
					setupfields &&
					setupfields.disclosures &&
					setupfields.disclosures.map((el, i) => (
						<StyledDisclosureFormContentGridItem key={i} item xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
							<CheckBoxField
								name={el.name}
								label={el.label}
								type={el.type}
								placeholder={el.placeholder}
								size="small"
							/>
						</StyledDisclosureFormContentGridItem>
					))
				}
			</StyledDisclosureFormContentGrid>
		</StyledDisclosureForm>
	)
}

export default DisclosureForm