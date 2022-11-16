import { Box, Grid, Card, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { sentenceCase } from "change-case";

import { topCardsItems } from "../info";

const StyledTermDepositTransactionTopCards = styled(Grid)(({ theme }) => ({

}));

const StyledGridItem = styled(Grid)(({ theme }) => ({

}));

const StyledCard = styled(Card)(({ theme }) => ({
	padding: "10px",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center"
}));

const StyledCardLeft = styled(Box)(({theme}) => ({
	
}));

const TermDepositTransactionTopCards = () => {
	return (
		<StyledTermDepositTransactionTopCards container spacing={3}>
			{
				topCardsItems ?
				topCardsItems.map((el, i) => (
					<StyledGridItem item key={i} xs={12} sm={6} md={3} lg={3} xl={3}>
						<StyledCard>
							<StyledCardLeft>
								<Typography variant="body1" color="text.secondary">
									{sentenceCase(el.name)}
								</Typography>
								<Typography variant="h4" color="text.primary">
									{el.value}
								</Typography>
							</StyledCardLeft>
							{el.icon}
						</StyledCard>
					</StyledGridItem>
				)): ""
			}
		</StyledTermDepositTransactionTopCards>
	)
}

export default TermDepositTransactionTopCards