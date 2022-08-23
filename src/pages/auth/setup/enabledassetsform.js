import React from 'react';

import { Alert, AlertTitle, Box, Button, Grid, Grow } from "@mui/material";
import { styled } from "@mui/system";

import CheckBoxField from "../../../components/forms/checkbox/checkbox";
import { setupfields } from "./info";


const StyledEnabledAssetsForm = styled(Box)(({ theme }) => ({
	
}));

const StyledEnabledAssetsFormContentGrid = styled(Grid)(({ theme }) => ({

}));

const StyledEnabledAssetsFormContentGridItem = styled(Grid)(({ theme }) => ({

}));

const EnabledAssetsForm = () => {
	return (
		<StyledEnabledAssetsForm>
			<StyledEnabledAssetsFormContentGrid container spacing={2}>
					<StyledEnabledAssetsFormContentGridItem item xl={9} lg={9} md={12} sm={12} xs={12}>
						{
							setupfields.enabledAssets &&
							setupfields.enabledAssets.map((el, i) => (
								<CheckBoxField
									size="small"
								/>
								
							))
						}
					</StyledEnabledAssetsFormContentGridItem>
			</StyledEnabledAssetsFormContentGrid>
		</StyledEnabledAssetsForm>
	)
}

export default EnabledAssetsForm