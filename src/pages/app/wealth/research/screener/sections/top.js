import { Box, Card, Typography } from "@mui/material";
import { styled } from "@mui/system";

const headerStyles = {
	textTransform: "capitalize"
}

const StyledBalanceCardArea = styled(Box)(({ theme }) => ({
	position: "relative",
	zIndex: 3,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	width: "100%",
	marginTop: 30
}));

const StyledBalanceCard = styled(Card)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	width: 400,
	height: 100,
}));

const ResearchScreenerTop = () => {

	return (
		<StyledBalanceCardArea>
			<StyledBalanceCard>
				<Typography variant="h5" color="text.primary" sx={headerStyles}>
					My screener
				</Typography>
			</StyledBalanceCard>
		</StyledBalanceCardArea>
	)
}

export default ResearchScreenerTop