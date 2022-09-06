import { useState } from 'react';
import PropTypes from 'prop-types';

import { Box, Button, Skeleton, Tab, Tabs, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { BsFillGridFill, BsPlusLg } from "react-icons/bs";
import { FaList } from "react-icons/fa";

function TabPanel(props) {
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
				<Box sx={{ pt: 3 }}>
					{children}
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
	button: PropTypes.func,
	buttonText: PropTypes.string
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}


export default function TabComponent({ tabsInfo, button, buttonText }) {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%', marginTop: "10px" }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider',  display: "flex", justifyContent: "space-between" }}>
				<Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="fullWidth" sx={{width: "100%"}}>
					{
						tabsInfo &&
						tabsInfo.labels &&
						tabsInfo.labels.map((el, i) => (
							<Tab
								key={i}
								label={el.label}
								icon={el.icon}
								iconPosition="start"
								{...a11yProps(i)}
							/>
						))
					}
				</Tabs>
			</Box>
			{
				tabsInfo &&
				tabsInfo.pannel &&
				tabsInfo.pannel.map((el, i) => (
					<TabPanel key={i} index={i} value={value} sx={{margin: 0, padding:0}}>
						{el.children}
					</TabPanel>
				))
			}
		</Box>
	);
}
