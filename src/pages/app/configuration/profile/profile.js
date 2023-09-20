import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ProfileTabs from "./tabs";

const StyledWrapper = styled(Stack)(({ theme }) => ({}));

const MyProfile = () => {
	return (
		<StyledWrapper direction="column" spacing={3}>
			<Stack direction="column">
				<Typography variant="h3">Your Profile</Typography>
				<Typography variant="subtitle1" color="text.secondary">
					Your Profile Information and Settings
				</Typography>
			</Stack>

			<ProfileTabs/>
		</StyledWrapper>
	);
};

export default MyProfile;
