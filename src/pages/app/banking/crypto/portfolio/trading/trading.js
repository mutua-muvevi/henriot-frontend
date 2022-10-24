
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import TradingPortfolioCard from "./sections/card";
import TradingPortfolioTable from "./sections/table";

const StyledTradingPortfolio = styled(Box)(({ theme }) => ({
	marginTop: 30
}));

const StyledGridContainer = styled(Grid)(({ theme }) => ({

}));

const StyledGridItems = styled(Grid)(({ theme }) => ({

}));

const TradingPortfolio = () => {
	return (
		<StyledTradingPortfolio>
			<StyledGridContainer container spacing={2}>
				<StyledGridItems item xs={12} sm={12} md={12} lg={8} xl={8}>
					<TradingPortfolioTable/>
				</StyledGridItems>
				<StyledGridItems item xs={12} sm={12} md={12} lg={4} xl={4}>
					<TradingPortfolioCard/>
				</StyledGridItems>
			</StyledGridContainer>
		</StyledTradingPortfolio>
	)
}

export default TradingPortfolio