import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { FaExclamationCircle } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import TooltipComponent from "src/components/Tooltip";


const StyledResearchWatchlistTop = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center"
}))

const headerStyles = {
	textTransform: "capitalize"
}

const StyledButton = styled(Button)(({ theme }) => ({

}))

const tooltipIconStyles = {
	fontSize: "16px",
	color: "red"
}
const iconStyles = {
	fontSize: "16px"
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

const ResearchWatchlistTop = () => {

	return (
		<>
			<StyledBalanceCardArea>
				<StyledBalanceCard>
					<Typography variant="h5" color="text.primary" sx={headerStyles}>
						My watchlist
					</Typography>
				</StyledBalanceCard>
			</StyledBalanceCardArea>
		</>
	)
}

export default ResearchWatchlistTop