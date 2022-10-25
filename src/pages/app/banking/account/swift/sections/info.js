import { countries } from "src/content/countries"


const beneficiaries = [
	{ Name: "Beneficiaries One" },
	{ Name: "Beneficiaries Two" },
	{ Name: "Beneficiaries Three" },
	{ Name: "Beneficiaries Four" },
]

export const beneficiaryForm = [
	{
		name: "name",
		label:"Name",
		placeholder:"John Smith",
		inputType:"textfield",
		required:true
	},
	{
		name: "address",
		label:"Address",
		placeholder:"Steet Address",
		inputType:"textfield",
		required:true
	},
	{
		name: "country",
		label:"Country",
		placeholder:"Choose country",
		inputType:"select",
		options:countries,
		required:true
	},
	{
		name: "account_number",
		label:"Account Number",
		placeholder:"0K234D0PWF45Z",
		inputType:"textfield",
		required:true
	},
	{
		name: "iban",
		label:"IBAN",
		placeholder:"De 89 234243(optinal",
		inputType:"textfield",
		required:false
	},
	{
		name: "swift_code",
		label:"Swift Code",
		placeholder:"SHAWUXXGL",
		inputType:"textfield",
		required:true
	},
	{
		name: "bank_name",
		label:"Bank name",
		placeholder:"JPMORGAN CHASE BANK",
		inputType:"textfield",
		required:true
	},
	{
		name: "bank_country",
		label:"Bank Country",
		inputType:"select",
		options:countries,
		required:true
	},
	{
		name: "bank_address",
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
			is: true,
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
		placeholder:"(if checked, an additional fee of $100.00 will be applied)",
		inputType:"checkbox",
		required:true,
	},
	{
		name: "fees",
		label:"Fees",
		placeholder:"",
		inputType:"radio",
		required:true,
	},
	{
		name: "message",
		label:"Message for the recipient",
		placeholder:"",
		inputType:"textfield",
		required:true,
		multitext: {
			is: true,
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