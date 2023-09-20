import { useState } from "react";

import { Card, Button, Stack, Typography, useTheme, CardContent } from "@mui/material";
import { styled } from "@mui/system";

import { allOrders, todayOrders, openOrders, closedOrders } from "../info"
import { columns, rows } from "src/content/datagrid";
import DataTable from "src/components/datagrid/datatable";

const StyledWrapper = styled(Card)(({ theme }) => ({
	minHeight: "50vh"
}))

const StyledCardTitle = styled(CardContent)(({ theme }) => ({
	backgroundColor: theme.palette.background.tabHeader
}))

const OrdersDataGrid = () => {
	const [selectedData, setSelectedData] = useState(allOrders);
	const theme = useTheme();
	
	const handleButtonClick = (data) => {
		setSelectedData(data);
	};

	const activeButtonStyle = {
		backgroundColor: theme.palette.background.neutral,
		fontWeight: 600,
	};

	return (
		<StyledWrapper>
			<StyledCardTitle>
				<Stack direction="row" alignItems="center" spacing={3}>
					<Button
						onClick={() => handleButtonClick(allOrders)}
						sx={selectedData === allOrders ? activeButtonStyle : {}}
					>
						<Typography variant="body1" color="text.primary">
							All
						</Typography>
					</Button>
					<Button
						onClick={() => handleButtonClick(todayOrders)}
						sx={selectedData === todayOrders ? activeButtonStyle : {}}
					>
						<Typography variant="body1" color="text.primary">
							Long
						</Typography>
					</Button>
					<Button
						onClick={() => handleButtonClick(openOrders)}
						sx={selectedData === openOrders ? activeButtonStyle : {}}
					>
						<Typography variant="body1" color="text.primary">
							Short
						</Typography>
					</Button>
					<Button
						onClick={() => handleButtonClick(closedOrders)}
						sx={selectedData === closedOrders ? activeButtonStyle : {}}
					>
						<Typography variant="body1" color="text.primary">
							Short
						</Typography>
					</Button>
				</Stack>
			</StyledCardTitle>

			<DataTable rows={rows} columns={columns}/>
		</StyledWrapper>
	)
}

export default OrdersDataGrid