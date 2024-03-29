import { useState } from 'react';
import PropTypes from 'prop-types';

import { Box, Button, Skeleton, Tab, Tabs, Typography } from "@mui/material";
import { styled } from "@mui/system";

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
				<Box >
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
	button: PropTypes.object,
	title: PropTypes.string
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}


const TabComponent = ({ tabsInfo, button, title, tabsWidth, tabsBorder }) => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%', marginTop: "10px" }}>
			<Box sx={{ 
				borderBottom: tabsBorder ? tabsBorder : 1,
				borderColor: 'divider',
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center"
			}}>
				{
					title ? (
						<Box sx={{ minWidth: 20, pl:1, pr:5 }}>
							<Typography variant="h4">
								{ title }
							</Typography>
						</Box>
					) : ""
				}
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="basic tabs example"
					variant="scrollable"
					sx={{width: tabsWidth ? tabsWidth : "100%"}}>
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
				{
					button ? (
						<Button variant="text" onClick={button.handleClick}>
							{ button.text }
						</Button>
					) : ""
				}
			</Box>
			{
				tabsInfo &&
				tabsInfo.pannel &&
				tabsInfo.pannel.map((el, i) => (
					<TabPanel key={i} index={i} value={value}>
						{el.children}
					</TabPanel>
				))
			}
		</Box>
	);
}

export default TabComponent