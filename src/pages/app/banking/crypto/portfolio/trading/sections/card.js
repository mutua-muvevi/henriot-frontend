import { Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import PieChartComponent from "src/components/chart/pie";

const StyledTradingPortfolioCard = styled(Card)(({ theme }) => ({
	marginTop: 30
}));

const StyledTradingPortfolioCardContent = styled(CardContent)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
}));

const chartData = {
	labels: [
		'Red',
		'Blue',
		'Yellow'
	],
	datasets: [{
		label: 'My First Dataset',
		data: [300, 50, 100],
		backgroundColor: [
			'rgb(255, 99, 132)',
			'rgb(54, 162, 235)',
			'rgb(255, 205, 86)'
		],
		hoverOffset: 4,
		animation:{
			animateScale: true
		}
	}],
	options:{
		responsive: true
	}
};

const chartConfig = {
	datasetIdKey:"sdfsdfsnbvdf",
	data:chartData
}

const TradingPortfolioCard = () => {
	return (
		<StyledTradingPortfolioCard>
			<StyledTradingPortfolioCardContent>
				<PieChartComponent chartConfig={chartConfig}/>
			</StyledTradingPortfolioCardContent>
		</StyledTradingPortfolioCard>
	)
}

export default TradingPortfolioCard