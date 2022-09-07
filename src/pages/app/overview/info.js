import MonthlyChartHome from "./sections/chart/monthly";
import TodayChartHome from "./sections/chart/today";
import TotalChartHome from "./sections/chart/total";
import YearlyChartHome from "./sections/chart/yearly";
import PortfolioAllTableOverview from "./sections/portfolio/all";
import PortfolioCryptoTableOverview from "./sections/portfolio/crypto";
import PortfolioStockTableOverview from "./sections/portfolio/stock";

export const tabsInfo = {
	labels: [
		{ label: "Today", },
		{ label: "Month", },
		{ label: "Year", },
		{ label: "Total", },
	],
	pannel: [
		{ children : <TodayChartHome/> },
		{ children : <MonthlyChartHome/> },
		{ children : <YearlyChartHome/> },
		{ children : <TotalChartHome/> },
	]
}

export const todaysChartData = {
	type: 'line',
	data: {
		labels: ['Jun', 'Jul', 'Aug'],
		datasets: [
			{
				id: 1,
				label: '',
				data: [5, 6, 7],
			},
			{
				id: 2,
				label: '',
				data: [3, 2, 1],
			},
		],
	},
	options: {
		responsive: true
	}
}

export const portfolioTabs =  {
	labels: [
		{ label: "All", },
		{ label: "Stocks", },
		{ label: "Crypto", },
	],
	pannel: [
		{ children : <PortfolioAllTableOverview/> },
		{ children : <PortfolioStockTableOverview/> },
		{ children : <PortfolioCryptoTableOverview/> }
	]
}