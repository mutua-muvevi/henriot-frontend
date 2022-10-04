import { Box, Card, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledResearchNewsHome = styled(Grid)(({ theme }) => ({
	marginTop: "30px"
}));

const StyledResearchNewsHomeItems = styled(Grid)(({ theme }) => ({

}));

const StyledBannerCard = styled(Card)(({ theme }) => ({
	minHeight: "500px"
}));

const StyledBannerRight = styled(Card)(({ theme }) => ({
	minHeight: "500px"
}));

const StyledTallCard = styled(Card)(({ theme }) => ({
	minHeight: "800px"
}));

const StyledCryptoCard = styled(Card)(({ theme }) => ({
	minHeight: "250px",
	marginBottom: "20px"
}));

const StyledSharesCard = styled(Card)(({ theme }) => ({
	minHeight: "250px",
	marginBottom: "20px"
}));

const StyledLastCard = styled(Card)(({ theme }) => ({
	minHeight: "250px",
	marginBottom: "20px"
}));

const ResearchNewsHome = () => {
	return (
		<StyledResearchNewsHome container spacing={2}>
			<StyledResearchNewsHomeItems item xs={12} sm={12} md={12} lg={7} xl={7}>
				<StyledBannerCard>
					<Typography variant="h1" color="initial">
						Banner Card
					</Typography>
				</StyledBannerCard>
			</StyledResearchNewsHomeItems>

			<StyledResearchNewsHomeItems item xs={12} sm={12} md={12} lg={2.5} xl={2.5}>
				<StyledBannerRight>
					<Typography variant="h1" color="initial">
						Top news
					</Typography>
				</StyledBannerRight>
			</StyledResearchNewsHomeItems>

			<StyledResearchNewsHomeItems item xs={12} sm={12} md={12} lg={2.5} xl={2.5}>
				<StyledBannerRight>
					<Typography variant="h1" color="initial">
						Top tweets
					</Typography>
				</StyledBannerRight>
			</StyledResearchNewsHomeItems>

			<StyledResearchNewsHomeItems item xs={12} sm={12} md={12} lg={2.5} xl={2.5}>
				<StyledTallCard>
					<Typography variant="h1" color="initial">
						Tall Card
					</Typography>
				</StyledTallCard>
			</StyledResearchNewsHomeItems>

			<StyledResearchNewsHomeItems item xs={12} sm={12} md={12} lg={9.5} xl={9.5}>
				<StyledCryptoCard>
					<Typography variant="h1" color="initial">
						Crypto card
					</Typography>
				</StyledCryptoCard>

				
				<StyledSharesCard>
					<Typography variant="h1" color="initial">
						Shares card
					</Typography>
				</StyledSharesCard>

				
				<StyledLastCard>
					<Typography variant="h1" color="initial">
						Last card
					</Typography>
				</StyledLastCard>
			</StyledResearchNewsHomeItems>
		</StyledResearchNewsHome>
	)
}

export default ResearchNewsHome