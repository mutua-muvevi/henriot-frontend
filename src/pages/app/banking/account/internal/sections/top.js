import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledInternalTransferTop = styled(Box)(({ theme }) => ({

}));

const headerStyles = {
	textTransform: "capitalize"
}

const InternalTransferTop = () => {
	return (
		<StyledInternalTransferTop>
			<Typography variant="h5" color="text.secondary" sx={headerStyles}>
				internal transfer
			</Typography>
		</StyledInternalTransferTop>
	)
}

export default InternalTransferTop