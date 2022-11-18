import { FaMapMarkerAlt, FaBriefcase, FaLink } from "react-icons/fa";

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
		name: "email",
		type: "email",
		label: "Email"
	},
	{
		name: "password",
		type: "password",
		label: "Password"
	},
	{
		name: "confirmpassword",
		type: "password",
		label: "Confirm Password"
	},
]
