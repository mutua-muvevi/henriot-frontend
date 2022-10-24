import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import CryptoPortfolioCard from "./sections/card";
import CryptoPortfolioTable from "./sections/table";

const StyledCryptoPortfolio = styled(Box)(({ theme }) => ({
	marginTop: 30
}));

const StyledGridContainer = styled(Grid)(({ theme }) => ({

}));

const StyledGridItems = styled(Grid)(({ theme }) => ({

}));

const CryptoPortfolio = () => {
	return (
		<StyledCryptoPortfolio>
			<StyledGridContainer container spacing={2}>
				<StyledGridItems item xs={12} sm={12} md={12} lg={8} xl={8}>
					<CryptoPortfolioTable/>
				</StyledGridItems>
				<StyledGridItems item xs={12} sm={12} md={12} lg={4} xl={4}>
					<CryptoPortfolioCard/>
				</StyledGridItems>
			</StyledGridContainer>
		</StyledCryptoPortfolio>
	)
}

export default CryptoPortfolio