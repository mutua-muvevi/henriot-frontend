import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import BasicInfo from "./sections/basic";
import AdditionalInfo from "./sections/additional";
import TrustedContact from "./sections/trusted";
import Security from "./sections/security";
import CryptoFees from "./sections/fees";

function CustomTabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{mt: 3}}>
					{children}
				</Box>
			)}
		</div>
	);
}

CustomTabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function tabProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const ProfileTabs = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
					<Tab label="Basic Info" {...tabProps(0)} />
					<Tab label="Additional Info" {...tabProps(1)} />
					<Tab label="Trusted Contact" {...tabProps(2)} />
					<Tab label="Security" {...tabProps(3)} />
					<Tab label="Crypto Fees" {...tabProps(4)} />
				</Tabs>
			</Box>
			<CustomTabPanel value={value} index={0}>
				<BasicInfo/>
			</CustomTabPanel>

			<CustomTabPanel value={value} index={1}>
				<AdditionalInfo/>
			</CustomTabPanel>

			<CustomTabPanel value={value} index={2}>
				<TrustedContact/>
			</CustomTabPanel>

			<CustomTabPanel value={value} index={3}>
				<Security/>
			</CustomTabPanel>

			<CustomTabPanel value={value} index={4}>
				<CryptoFees/>
			</CustomTabPanel>
		</Box>
	);
}

export default ProfileTabs