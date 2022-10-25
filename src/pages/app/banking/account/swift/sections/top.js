import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledSwiftTransferTop = styled(Box)(({ theme }) => ({

}));

const headerStyles = {
	textTransform: "capitalize"
}

const SwiftTransferTop = () => {
	return (
		<StyledSwiftTransferTop>
			<Typography variant="h5" color="text.secondary" sx={headerStyles}>
				swift transfer
			</Typography>
		</StyledSwiftTransferTop>
	)
}

export default SwiftTransferTop