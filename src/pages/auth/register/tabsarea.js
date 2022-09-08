import React from 'react';

import { Box } from "@mui/material";
import { styled } from "@mui/system";

//import Tabs from "../../../components/sections/tabs/tabs";
import { tabareainfo } from "./info"

const StyledTabsArea = styled(Box)(({ theme }) => ({

}))

const TabsArea = () => {
	return (
		<StyledTabsArea>
			{/*<Tabs data={tabareainfo}/>*/}
		</StyledTabsArea>
	)
}

export default TabsArea