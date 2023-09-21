import { Stack, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";

const StyledWrapper = styled(Stack)(({ theme }) => ({
	width: "100%",
	height: "100%"
}));

const ReusableSpinner = () => {
	return (
		<StyledWrapper justifyContent="center" alignItems="center">
			<CircularProgress />
		</StyledWrapper>
	);
};

export default ReusableSpinner;
