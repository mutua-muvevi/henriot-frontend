export const transactionCards = [
	{
		title: "Total Withdrawals",
		number: "1500",
		chip: "success",
		previous: "1200",
		color: "#54D62C"
	},
	{
		title: "Total Deposits",
		number: "1500",
		chip: "success",
		previous: "1200",
		color: "#54D62C"
	},
	{
		title: "Total Transfers",
		number: "1500",
		chip: "success",
		previous: "1200",
		color: "#54D62C"
	},
]


export const columns = [
	{
		field: "date",
		headerName: 'Column 1',
		type: "date",
		flex:1
	},
	{
		field: 'account',
		headerName: "Account",
		type: "string",
		flex:2
	},
	{
		field: "cashin",
		headerName: "Money in",
		type: "string",
		flex:1
	},
	{
		field: "cashout",
		headerName: "Money out",
		type: "string",
		flex:1
	},
	{
		field: "balance",
		headerName: "Closing balance",
		type: "string",
		flex:1
	},
	{
		field: "description",
		headerName: "Description",
		type: "string",
		flex:3
	},
	{
		field: "state",
		headerName: "State",
		type: "string",
		flex:1
	},
	{
		field: "option",
		headerName: "Option",
		type: "string",
		flex:1
	},
];

export const rows = [
	{ 
		id: 1,
		date: "22/10/2022",
		//date: new Date(2022, 10, 21),
		account: "Trading account",
		cashin:"$ 150.79",
		cashout:"-",
		description: "-",
		option:"-",
		balance:"$ 150.79",
		state:"processing",
	},
	{
		id: 2,
		date: "21/10/2022",
		account: "Trading account",
		cashin:"$ 79.55",
		balance:"$ 79.55",
		state:"processing",
		cashout:"-",
		description: "-",
		option:"-",
	},
	{
		id: 3,
		date: "23/10/2022",
		account: "Trading account + Crypto",
		cashin:"$ 550.67",
		balance:"$ 550.67",
		state:"processing",
		cashout:"-",
		description: "-",
		option:"-",
	},
	{
		id: 4,
		date: "20/10/2022",
		account: "Trading account",
		cashin:"$ 670.12",
		balance:"$ 670.12",
		state:"processing",
		cashout:"$ 500.00",
		description: "-",
		option:"-",
	},
	{
		id: 5,
		date: "21/10/2022",
		account: "Trading account",
		cashin:"$ 15.67",
		cashout:"-",
		description: "-",
		option:"-",
	},
	{
		id: 6,
		date: "20/10/2022",
		account: "Trading account + Crypto",
		cashin:"$ 512.22",
		balance:"$ 512.22",
		state:"processing",
		cashout:"-",
		description: "-",
		option:"-",
	},
	{
		id: 7,
		date: "24/10/2022",
		account: "Trading account",
		cashin:"$ 715.57",
		balance:"$ 715.57",
		state:"processing",
		cashout:"-",
		description: "-",
		option:"-",
	},
	{
		id: 8,
		date: "24/10/2022",
		account: "Trading account",
		cashin:"$ 2150.09",
		balance:"$ 2150.09",
		state:"processing",
		cashout:"-",
		description: "-",
		option:"-",
	},
];