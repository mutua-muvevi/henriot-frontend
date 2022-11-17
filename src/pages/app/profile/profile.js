import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import ProfileLeft from "./sections/left";
import ProfileRight from "./sections/right";

const StyledWrapper = styled(Grid)(({ theme }) => ({

}));

const StyledGridItem = styled(Grid)(({ theme }) => ({

}));

const Profile = () => {
	return (
		<StyledWrapper container spacing={3}>
			<StyledGridItem item xs={12} sm={12} md={12} lg={4} xl={4}>
				<ProfileLeft/>
			</StyledGridItem>

			<StyledGridItem item xs={12} sm={12} md={12} lg={8} xl={8}>
				<ProfileRight/>
			</StyledGridItem>
		</StyledWrapper>
	)
}

export default Profile