import { FaChevronUp, FaChevronDown } from "react-icons/fa";

import MonthlyChartHome from "./sections/chart/monthly";
import TodayChartHome from "./sections/chart/today";
import TotalChartHome from "./sections/chart/total";
import YearlyChartHome from "./sections/chart/yearly";
import PortfolioAllTableOverview from "./sections/portfolio/all";
import PortfolioCryptoTableOverview from "./sections/portfolio/crypto";
import PortfolioStockTableOverview from "./sections/portfolio/stock";
import TradeBuyOverview from "./sections/trade/buy";
import TradeSellOverview from "./sections/trade/sell";

export const tabsInfo = {
	labels: [
		{ label: "Today" },
		{ label: "Month" },
		{ label: "Year" },
		{ label: "Total" },
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

export const tradeTabs =  {
	labels: [
		{ label: "Buy", },
		{ label: "Sell", },
	],
	pannel: [
		{ children : <TradeBuyOverview/> },
		{ children : <TradeSellOverview/> }
	]
}

export const buyInputs = [
	{
		name: "symbol",
		label: "Symbol",
		type: "text",
		required: true,
		inputprops: {}
	},
	{
		name: "quantity",
		label: "Quantity",
		type: "number",
		required: true,
		inputprops: {}
	},
]

export const buySelectOptionsOrderType = [{Name: "market"}]
export const buySelectOptionsTimeInForce = [{Name: "GTC - Goods Till Cancelled"}]

export const sellInputs = [
	{
		name: "symbol",
		label: "Symbol",
		type: "text",
		required: true,
		inputprops: {}
	},
	{
		name: "quantity",
		label: "Quantity",
		type: "number",
		required: true,
		inputprops: {}
	},
]

export const sellSelectOptionsOrderType = [{Name: "market"}]
export const sellSelectOptionsTimeInForce = [{Name: "GTC - Goods Till Cancelled"}]

const iconStyles = {
	color: "inherit"
}

export const marqueeItems = [
	{
		title: "Gold",
		number: "91.10",
		percentage: "-1.09%",
		icon: <FaChevronDown style={iconStyles}/>,
		color: "error"
	},
	{
		title: "Orange Juice",
		number: "198.10",
		percentage: "-7.09%",
		icon: <FaChevronDown style={iconStyles}/>,
		color: "error"
	},
	{
		title: "Silver",
		number: "20.10",
		percentage: "0.9%",
		icon: <FaChevronUp style={iconStyles}/>,
		color: "green"
	},
	{
		title: "Cocoa",
		number: "2327.10",
		percentage: "-1.12%",
		icon: <FaChevronDown style={iconStyles}/>,
		color: "error"
	},
	{
		title: "Brent",
		number: "88.86",
		percentage: "1.09%",
		icon: <FaChevronUp style={iconStyles}/>,
		color: "green"
	},
	{
		title: "Wheat",
		number: "912.10",
		percentage: "-1.09%",
		icon: <FaChevronDown style={iconStyles}/>,
		color: "error"
	},
	{
		title: "SoyBean",
		number: "1373.10",
		percentage: "0.04%",
		icon: <FaChevronUp style={iconStyles}/>,
		color: "green"
	},
	{
		title: "Copper",
		number: "3.44",
		percentage: "-0.53%",
		icon: <FaChevronDown style={iconStyles}/>,
		color: "error"
	},
	{
		title: "Natural Gas",
		number: "6.48",
		percentage: "0.21%",
		icon: <FaChevronUp style={iconStyles}/>,
		color: "green"
	},
	{
		title: "Palladium",
		number: "2270.50",
		percentage: "1.09%",
		icon: <FaChevronUp style={iconStyles}/>,
		color: "green"
	},
	{
		title: "Gold",
		number: "91.10",
		percentage: "-1.09%",
		icon: <FaChevronDown style={iconStyles}/>,
		color: "error"
	},
]
