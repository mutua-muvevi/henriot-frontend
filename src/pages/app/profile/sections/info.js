import { FaMapMarkerAlt, FaBriefcase, FaLink } from "react-icons/fa";
import { countries } from "src/content/countries";

const iconStyles = {
	marginRight: "10px",
	fontSize: "20px"
}

export const profileData = [
	{
		icon: <FaMapMarkerAlt style={iconStyles}/>,
		text: "australia"
	},
	{
		icon: <FaBriefcase style={iconStyles}/>,
		text: "web developer"
	},
	{
		icon: <FaLink style={iconStyles}/>,
		text: "https:google.com"
	},
]

export const textfieldItems = [
	{
		name: "firstname",
		type: "text",
		label: "First Name"
	},
	{
		name: "lastname",
		type: "text",
		label: "Last Name"
	},
	{
		name: "phone",
		type: "tel",
		label: "Phone Number"
	},
	{
		name: "identity",
		type: "text",
		label: "Identity",
		placeholder: "ID NO"
	},
	{
		name: "idno",
		type: "text",
		label: "Identity Number",
		placeholder: "ID NO"
	},
	{
		name: "occupation",
		type: "text",
		label: "Occupation"
	},
	{
		name: "code",
		type: "text",
		label: "Introduce Code",
		placeholder:"0EBE571"
	},
	{
		name: "website",
		type: "url",
		label: "Website"
	},
	{
		name: "postalcode",
		type: "text",
		label: "Postal Code"
	},
	{
		name: "address",
		type: "text",
		label: "Address"
	},
	{
		name: "city",
		type: "text",
		label: "City"
	},
]

export const selectFieldItems = [
	{
		name: "country",
		type: "text",
		label: "Country",
		options: countries
	},
]