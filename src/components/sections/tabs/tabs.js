import React from 'react';

import { Box, List, ListItem, Tab, Typography} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { styled } from "@mui/system";

import { FaCheck } from "react-icons/fa"

const iconStyles = {
	marginRight: "10px"
}

const StyledTabsWrapper = styled(Box)(({ theme }) => ({
	textAlign: "left",
	minWidth: "40vw",
}))

const StyledList = styled(List)(({ theme }) => ({

}))

const StyledListItem = styled(ListItem)(({ theme }) => ({
	marginBottom: "10px"
}))

const StyledListItemContent = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "left",
	alignItems: "center",
	textAlign: "left",
	marginBottom: "10px",
}))


const Tabs = ({data}) => {
	const [value, setValue] = React.useState('1');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<StyledTabsWrapper sx={{ width: '100%', typography: 'body1' }}>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<TabList onChange={handleChange} aria-label="lab API tabs example">
						{
							data.title &&
							data.title.map((el, i) => (
								<Tab key={i} label={el.label} value={el.value} />
							))
						}
					</TabList>
				</Box>
				{
					data.pannel &&
					data.pannel.map((el, i) => (
						<TabPanel key={i} value={el.value}>
							<StyledList>
								<Typography variant="h5" gutterBottom>
									{ el.list.title }
								</Typography>
								{
									el.list &&
									el.list.items &&
									el.list.items.map((li, i) => (
										<StyledListItem key={i} disablePadding>
											<StyledListItemContent>
												<FaCheck style={iconStyles}/>
												<Typography varaint="body2">
													{ li }
												</Typography>
											</StyledListItemContent>
										</StyledListItem>
									))
								}
							</StyledList>							
						</TabPanel>
					))
				}
				{/* <TabPanel value="2">Item Two</TabPanel>
				<TabPanel value="3">Item Three</TabPanel> */}
			</TabContext>
		</StyledTabsWrapper>
	);
}

export default Tabs