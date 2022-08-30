import { FaHandHoldingUsd, FaExchangeAlt, FaBalanceScale } from "react-icons/fa";

const iconStyle={
	fontSize: "80px",
	lineHeight: "0",
	opacity: 0.2
}

export const topCardsInfo = [
	{
		numbers: "$ 102,045.82",
		text: "Equity",
		icon: <FaBalanceScale style={iconStyle}/>
	},
	{
		numbers: "$ 102,045.82",
		text: "Buying power",
		icon: <FaHandHoldingUsd style={iconStyle}/>
	},
	{
		numbers: "0.00%",
		text: "Today Profit/Loss",
		icon: <FaExchangeAlt style={iconStyle}/>
	},
]