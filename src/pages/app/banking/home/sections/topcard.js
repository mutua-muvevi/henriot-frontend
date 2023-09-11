import { Box, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { sentenceCase } from "change-case";

const StyledCard = styled(Card)(({ theme }) => ({
	minHeight: 125
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
	display: "flex",
	flexDirection: "row-reverse",
	justifyContent: "space-between",
	alignItems: "center"
}));


const StyledIconBox = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: "white",
	width: "30px",
	height: "30px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	borderRadius: theme.shape.borderRadius
}));

const StyledDataBox = styled(Box)(({ theme }) => ({

}));

const headerFont = {}
const textFont = {}

const BankingTopCard = ({ data }) => {
  return (
	<StyledCard>
		<StyledCardContent>
			<StyledIconBox>
				{data.icon}
			</StyledIconBox>

			<StyledDataBox>
				<Typography variant="subtitle1" color="text.secondary" sx={headerFont}>
					{sentenceCase(data.title)}
				</Typography>
				<Typography variant="body2" color="text.primary" sx={textFont}>
					{data.text}
				</Typography>
			</StyledDataBox>
		</StyledCardContent>
	</StyledCard>
  )
}

export default BankingTopCard