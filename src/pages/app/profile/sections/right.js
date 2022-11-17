import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";import ProfileForm from "./form";
;

const StyledWrapper = styled(Stack)(({ theme }) => ({

}));

const StyledStatusBox = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	borderRadius: theme.shape.borderRadius,
	color: "white",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	padding:"10px"
}));

const ProfileRight = () => {
	return (
		<StyledWrapper direction="column" spacing={4}>
			<StyledStatusBox>
				<Typography variant="body1">
					Account Status: VERIFIED
				</Typography>
			</StyledStatusBox>
			<ProfileForm/>
		</StyledWrapper>
	)
}

export default ProfileRight