// import { MdArrowForwardIos } from "react-icons/md"
import { FaCheck } from "react-icons/fa"

const iconStyles = {

}

export const uppercontent = {
	title: "Open an Account",
	subtitle: "It's easy. Here's how to get started:",
	paragraphs: [],
	icon: "",
	list: [
		{
			title: "",
			text: "Create a username and password",
			icons: ""
		},
		{
			title: "",
			text: "Confirm your email address",
			icons: ""
		},
		{
			title: "",
			text: "Complete the application",
			icons: ""
		},
	],
	meta: [
		{
			sentence: "",
			link: {
				text: "",
				path: "",
				icon: ""
			}
		},
	]
}

export const lowercontent = {
	title: "",
	subtitle: "",
	paragraphs: [],
	icon: "",
	list: [],
	meta: [
		{
			sentence: "Do you want to continue a previously started application?",
			link: {
				text: "click here",
				path: "https://github.com/mutua-muvevi",
				icon: ""
			}
		},
		{
			sentence: "Do you want to continue a previously started application?",
			link: {
				text: "click here",
				path: "https://github.com/mutua-muvevi",
				icon: ""
			}
		},
	]
}

export const tabareainfo = {
	title : [
		{
			value: "1",
			label: "individuals"
		},
		{
			value: "2",
			label: "institutions"
		},
	],
	pannel: [
		{
			node: "",
			list: {
				title: "For each account holder, you will need:",
				icon: <FaCheck style={iconStyles}/>,
				items: [
					"Personal and contact information.",
					"Income and tax residency information.",
					"Information on trading experience and objectives.",
					"Bank account information."
				],
			},
			value: "1",
		},
		{
			node: "",
			list: {
				title: "You will need the following:",
				icon: <FaCheck style={iconStyles}/>,
				items: [
					"Tax and contact information of the organization.",
					"Personal and contact information of the Authorized Person on this account.",
					"Documents proving the existence of your organization.",
					"Bank account information.",
				]
			},
			value: "2",
		},
	]
}
