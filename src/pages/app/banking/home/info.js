import { BsCurrencyBitcoin, BsGraphUp } from "react-icons/bs";
import { FaDollarSign, FaCogs, FaMoneyBill } from "react-icons/fa";

const iconStyles = {

}

export const topCards = [
	{
		title: "total value",
		text: "$55,000,319,505.38",
		icon: <FaDollarSign style={iconStyles}/>
	},
	{
		title: "cash balance",
		text: "$7,934.60",
		icon: <FaDollarSign style={iconStyles}/>
	},
	{
		title: "digital assets",
		text: "$55,000,319,505.38",
		icon: <BsCurrencyBitcoin style={iconStyles}/>
	},
	{
		title: "metals",
		text: "0.00",
		icon: <FaCogs style={iconStyles}/>
	},
	{
		title: "equity assets",
		text: "$835.06",
		icon: <FaMoneyBill style={iconStyles}/>
	},
	{
		title: "portfolio return",
		text: "0.00%",
		icon: <BsGraphUp style={iconStyles}/>
	},
]

export const mainCards = [
	{
		title: "current account",
		body: {
			singleColumn: [
				{
					key: "USD :",
					value: "$6,834.60"
				},
			],
			link: ""
		}
	},
	{
		title: "term deposit",
		body: {
			singleColumn: [
				{
					key: "BTC 14.14355 :",
					value: "$282,562.81"
				},
				{
					key: "LTC 7.99977 :",
					value: "$8,562.81"
				},
				{
					key: "BCH 3.6 :",
					value: "$82,562.81"
				},
				{
					key: "ETH 2.29999 :",
					value: "$2,562.81"
				},
			],
			link: ""
		}
	},
	{
		title: "term deposit",
		body: {
			singleColumn: [

			],
			multipleColumns: [
				{
					title: "Term",
					items: []
				},
				{
					title: "Amount",
					items: []
				},
				{
					title: "Return",
					items: []
				},
			],
			link: ""
		}
	},
	{
		title: "debit card",
		body: {
			singleColumn: [
				{
					key: "balance :",
					value: "$6,834.60"
				},
				{
					key: "last deposit :",
					value: "$6,834.60"
				},
			],
			link: ""
		}
	},
	{
		title: "trading account",
		body: {
			singleColumn: [
				{
					key: "crypto buying balance :",
					value: "$6,834.60"
				},
				{
					key: "equities deposit :",
					value: "$6,834.60"
				},
				{
					key: "metals deposit :",
					value: "$6,834.60"
				},
			],
			link: ""
		}
	},
	{
		title: "trading wallet",
		body: {
			singleColumn: [
				{
					key: "LTC 0 :",
					value: "$0.60"
				},
				{
					key: "XRP 97 :",
					value: "$47.60"
				},
			],
			link: ""
		}
	},
	{
		title: "portfolio",
		body: {
			singleColumn: [

			],
			multipleColumns: [
				{
					title: "Term",
					items: []
				},
				{
					title: "Amount",
					items: []
				},
				{
					title: "Return",
					items: []
				}
			],
			link: ""
		}
	},
	{
		title: "funds",
		body: {
			singleColumn: [

			],
			multipleColumns: [
				{
					title: "name",
					items: []
				},
				{
					title: "units",
					items: []
				},
				{
					title: "price",
					items: []
				},
				{
					title: "return",
					items: []
				},
			],
			link: ""
		}
	}
]