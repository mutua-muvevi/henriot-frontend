import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import SettingsLeft from "./sections/left";
import SettingsRight from "./sections/right";

const StyledWrapper = styled(Grid)(({ theme }) => ({

}));

const StyledGridItem = styled(Grid)(({ theme }) => ({

}));

const Settings = () => {
	return (
		<StyledWrapper container spacing={3}>
			<StyledGridItem item xs={12} sm={12} md={12} lg={4} xl={4}>
				<SettingsLeft/>
			</StyledGridItem>

			<StyledGridItem item xs={12} sm={12} md={12} lg={8} xl={8}>
				<SettingsRight/>
			</StyledGridItem>
		</StyledWrapper>
	)
}

export default Settings