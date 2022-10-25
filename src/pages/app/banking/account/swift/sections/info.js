import { FormControlLabel, Radio } from "@mui/material"
import { countries } from "src/content/countries"


const beneficiaries = [
	{ Name: "Beneficiaries One" },
	{ Name: "Beneficiaries Two" },
	{ Name: "Beneficiaries Three" },
	{ Name: "Beneficiaries Four" },
]

export const beneficiaryForm = [
	{
		name: "beneficiary_name",
		label:"Beneficiary name",
		placeholder:"John Smith",
		inputType:"textfield",
		required:true
	},
	{
		name: "beneficiary_address",
		label:"Address",
		placeholder:"Steet Address",
		inputType:"textfield",
		required:true
	},
	{
		name: "beneficiary_country",
		label:"Country",
		placeholder:"Choose country",
		inputType:"select",
		options:countries,
		required:true
	},
	{
		name: "beneficiary_account_number",
		label:"Account Number",
		placeholder:"0K234D0PWF45Z",
		inputType:"textfield",
		required:true
	},
	{
		name: "beneficiary_iban",
		label:"IBAN",
		placeholder:"De 89 234243(optinal",
		inputType:"textfield",
		required:false
	},
	{
		name: "beneficiary_swift_code",
		label:"Swift Code",
		placeholder:"SHAWUXXGL",
		inputType:"textfield",
		required:true
	},
	{
		name: "beneficiary_bank_name",
		label:"Bank name",
		placeholder:"JPMORGAN CHASE BANK",
		inputType:"textfield",
		required:true
	},
	{
		name: "beneficiary_bank_country",
		label:"Bank Country",
		inputType:"select",
		options:countries,
		required:true
	},
	{
		name: "beneficiary_bank_address",
		label:"Bank Address",
		placeholder:"Your bank address",
		inputType:"textfield",
		required:true
	},
]

export const bottomForm = [
	{
		name: "from",
		label:"From",
		placeholder:"",
		inputType:"select",
		required:true,
		dummyText: {
			text: "Available balance _.__"
		}
	},
	{
		name: "amount",
		label:"Amount",
		placeholder:"0",
		inputType:"textfield",
		required:true,
		type:"number"
	},
	{
		name: "urgent",
		label:"Urgent",
		legend:"(if checked, an additional fee of $100.00 will be applied)",
		inputType:"checkbox",
		required:true,
	},
	{
		name: "fees",
		label:"Fees",
		placeholder:"",
		inputType:"radio",
		required:true,
		//defaultValue:"shared",
		radioItems: [
			<FormControlLabel
				value="shared"
				control={<Radio/>}
				label="Shared $80.00"
			/>,
			<FormControlLabel
				value="beneficiary"
				control={<Radio/>}
				label="Beneficiary $50.00"
			/>,
			<FormControlLabel
				value="ours"
				control={<Radio/>}
				label="Ours $150.00"
			/>,
		]
	},
	{
		name: "message",
		label:"Message for the recipient",
		placeholder:"",
		inputType:"textfield",
		required:true,
		multitext: {
			rows: 4
		}
	},
	{
		name: "password",
		label:"Your one time password",
		placeholder:"",
		inputType:"textfield",
		required:true,
		type:"password"
	},
]