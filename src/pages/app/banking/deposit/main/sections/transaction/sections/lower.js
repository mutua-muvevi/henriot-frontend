import { Box, Card, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledGrid = styled(Grid)(({ theme }) => ({

}));
const StyledGridItems= styled(Grid)(({ theme }) => ({

}));

const StyledCard = styled(Card)(({ theme }) => ({

}));

const StyledCardTitle = styled(Box)(({ theme }) => ({
	padding: "10px",
	borderBottom: "1px solid grey",
	display: "flex",
	justifyContent: "space-between",
	alignitems: "center"
}));

const StyledCardValues = styled(Box)(({ theme }) => ({
	padding: "10px",
}));

const StyledCardKkeyPair = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignitems: "center"
}));

const twoCards = [
	{
		title: {
			key: "Account Status",
			value: "Current"
		},
		content: [
			{
				key: "Loan Amount",
				value: "$39,195.00"
			},
			{
				key: "Interest",
				value: "2,151.33"
			},
			{
				key: "Total Amount",
				value: "341,346.72"
			},
		]
	},
	{
		title: {
			key: "Initial Amount",
			value: "ETH 173"
		},
		content: [
			{
				key: "Initial Value",
				value: "$39,195.00"
			},
			{
				key: "Current Value",
				value: "2,151.33"
			},
			{
				key: "LTV Ratio",
				value: "341,346.72"
			},
		]
	},
]

const TermDepositTransactionLower = () => {
	return (
		<StyledGrid container spacing={2}>
			{
				twoCards.map((el, i) => (
					<StyledGridItems key={i} item xs={12} sm={12} md={6} lg={6} xl={6}>
						<StyledCard>
							<StyledCardTitle>
								<Typography variant="subtitle2" color="text.primary">
									{el.title.key}
								</Typography>
								<Typography variant="subtitle2" color="text.primary">
									{el.title.value}
								</Typography>
							</StyledCardTitle>

							<StyledCardValues>
								{
									el.content.map((entry, i) => (
										<StyledCardKkeyPair key={i}>
											<Typography variant="body1" color="text.primary">
												{entry.key}
											</Typography>
											<Typography variant="body1" color="text.secondary">
												{entry.value}
											</Typography>
										</StyledCardKkeyPair>
									))
								}
							</StyledCardValues>
						</StyledCard>
					</StyledGridItems>
				))
			}
		</StyledGrid>
	)
}

export default TermDepositTransactionLower