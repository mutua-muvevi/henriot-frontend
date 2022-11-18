import { FormControlLabel, Radio } from "@mui/material"

export const radioOptions = [
	{Name: "FIAT Currency"},
	{Name: "Crypto Currency"},
]
const options = [
	{Name: "Options One"},
	{Name: "Options Two"},
	{Name: "Options Three"},
	{Name: "Options Four"},
]

export const selectFieldItem = [
	{
		name: "from",
		type: "text",
		label: "Transfer From",
		inputType:"textfield",
		options: options,
		xs: 12,
		sm: 12,
		md: 12,
		lg: 12,
		xl: 12
	},
	{
		name: "to",
		type: "text",
		label: "Transfer to",
		inputType:"textfield",
		options: options,
		xs: 12,
		sm: 12,
		md: 12,
		lg: 12,
		xl: 12
	},
	{
		name: "currency",
		type: "text",
		label: "Confirm Password",
		inputType:"textfield",
		options: options,
		xs: 12,
		sm: 12,
		md: 12,
		lg: 3,
		xl: 3
	},
	{
		name: "amount",
		type: "number",
		inputType:"textfield",
		label: "Transfer amount equivalent of",
		options: options,
		xs: 12,
		sm: 12,
		md: 12,
		lg: 12,
		xl: 12
	},
]


export const selectFieldItems = [
	{
		name: "type",
		label:"Type",
		placeholder:"",
		inputType:"radio",
		required:true,
		radioItems: [
			<FormControlLabel
				value="FIAT Currency"
				control={<Radio/>}
				label="FIAT Currency"
			/>,
			<FormControlLabel
				value="crypto currency"
				control={<Radio/>}
				label="Crypto Currency"
			/>,
		],
		xs: 12,
		sm: 12,
		md: 12,
		lg: 12,
		xl: 12
	},
	{
		name: "from",
		label:"From",
		placeholder:"0",
		inputType:"select",
		required:true,
		type:"text",
		options: options,
		xs: 12,
		sm: 12,
		md: 12,
		lg: 12,
		xl: 12
	},
	{
		name:"to",
		label:"To",
		placeholder:"0",
		inputType:"select",
		required:true,
		type:"text",
		options: options,
		xs: 12,
		sm: 12,
		md: 12,
		lg: 12,
		xl: 12
	},
	{
		name: "currency",
		label:"Currency",
		placeholder:"0",
		inputType:"select",
		required:true,
		type:"text",
		options: options,
		xs: 12,
		sm: 12,
		md: 12,
		lg: 12,
		xl: 12
	},
	{
		name:"amount",
		label:"Amount",
		placeholder:"0",
		inputType:"select",
		required:true,
		type:"number",
		options: options,
		xs: 12,
		sm: 12,
		md: 12,
		lg: 12,
		xl: 12
	},
	{
		name: "otp",
		label:"OTP Code",
		placeholder:"",
		inputType:"textfield",
		required:true,
		type:"password",
		xs: 12,
		sm: 12,
		md: 12,
		lg: 12,
		xl: 12
	},
]

export const balancesInfo = [
	{
		key: "Current Account Balance",
		value: "$ 82.82.91"
	},
	{
		key: "Trading Account Balance",
		value: "$ 82.82.91"
	},
	{
		key: "Debit Card Account Balance",
		value: "$ 82.82.91"
	},
	{
		key: "Term Deposit Account Balance",
		value: "$ 82.82.91"
	},
]