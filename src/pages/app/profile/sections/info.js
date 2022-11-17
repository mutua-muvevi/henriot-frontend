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