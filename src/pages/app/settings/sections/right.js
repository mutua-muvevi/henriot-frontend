import { Stack } from "@mui/material";
import { styled } from "@mui/system";import ProfileForm from "./form";
;

const StyledWrapper = styled(Stack)(({ theme }) => ({

}));

const SettingsRight = () => {
	return (
		<StyledWrapper direction="column" spacing={4}>
			<ProfileForm/>
		</StyledWrapper>
	)
}

export default SettingsRight