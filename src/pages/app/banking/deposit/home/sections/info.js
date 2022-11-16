import { Button } from "@mui/material";
import { BsFileBarGraph, BsSpeedometer } from "react-icons/bs";
import { FaMoneyBill, FaDatabase } from "react-icons/fa";


const iconStyles = {
	fontSize: "25px",
}

export const topCardsItems = [
	{
		name: "total invested",
		value: "$100,000",
		icon: <BsFileBarGraph style={iconStyles}/>
	},
	{
		name: "difference",
		value: "$90,000",
		icon: <BsSpeedometer style={iconStyles}/>
	},
	{
		name: "total return",
		value: "9%",
		icon: <FaMoneyBill style={iconStyles}/>
	},
	{
		name: "balance",
		value: "$109,000",
		icon: <FaDatabase style={iconStyles}/>
	},
]

const columnWidth = 100

export const columns = [
	{
		field: "date",
		headerName: "Date",
		minWidth: columnWidth,
		type: "string",
		flex: 1
	},
	{
		field: 'term',
		headerName: "Term",
		minWidth: columnWidth,
		type: "string",
		flex: 1
	},
	{
		field: "amount",
		headerName: "Amount",
		minWidth: columnWidth,
		type: "string",
		flex: 1
	},
	{
		field: "balance",
		headerName: "Balance",
		minWidth: columnWidth,
		type: "string",
		flex: 1
	},
	{
		field: "status",
		headerName: "Status",
		minWidth: columnWidth,
		type: "string",
		flex: 1
	},
	{
		field: "subscribe",
		headerName: "",
		minWidth: columnWidth,
		flex: 1,
		renderCell: (cellvalues) => {
			return(
				<Button
					variant="contained"
					sx={{color:"#fff"}}
				>
					Subscribe
				</Button>
			)
		}
	},
];

export const rows = [
	{ 
		id: 1,
		date: "20/11/2022",
		term: "D4D0ufSE325sd",
		balance:"$20,000",
		status:"current",
		amount:"Kenya",
	},
	{
		id: 2,
		date: "20/11/2022",
		term: "D4D0ufSE325sd",
		balance:"$20,000",
		status:"current",
		amount:"Kenya",
	},
	{
		id: 3,
		date: "20/11/2022",
		term: "D4D0ufSE325sd",
		balance:"$20,000",
		status:"current",
		amount:"Kenya",
	},
	{ 
		id: 4,
		date: "20/11/2022",
		term: "D4D0ufSE325sd",
		balance:"$20,000",
		status:"current",
		amount:"Kenya",
	}
];

export const chartData = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July' ],
	datasets: [
		{
			//label: 'My First dataset',
			fill: false,
			lineTension: 0.1,
			backgroundColor: '#ed0f51',
			borderColor: '#ed0f51',
			borderCapStyle: 'round',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			pointBorderColor: '#ed0f51',
			pointBackgroundColor: '#ffffff',
			pointBorderWidth: 2,
			pointHoverRadius: 10,
			pointHoverBackgroundColor: '#ed0f51',
			pointHoverBorderColor: '#ed0f51',
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 10,
			data: [65, 59, 80, 81, 56, 55, 40]
		}
	]
};

export const chartTopSorting = [
	{
		label:"3 months",
		action:"",
		color: "#65cfbb"
	},
	{
		label:"6 months",
		action:"",
		color: "#54D62C"
	},
	{
		label:"12 months",
		action:"",
		color: "#131313"
	}
]