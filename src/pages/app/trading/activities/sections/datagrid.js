import { useState } from "react";

import { Card, Button, Stack, Typography, useTheme, CardContent } from "@mui/material";
import { styled } from "@mui/system";

import { allActivities, tradeActivities, transfersActivities, dividendsActivities } from "../info";
import { columns, rows } from "src/content/datagrid";
import DataTable from "src/components/datagrid/datatable";

const StyledWrapper = styled(Card)(({ theme }) => ({
	minHeight: "50vh",
}));

const StyledCardTitle = styled(CardContent)(({ theme }) => ({
	backgroundColor: theme.palette.background.tabHeader,
}));

const ActivitiesDataGrid = () => {
	const [selectedData, setSelectedData] = useState(allActivities);
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
						onClick={() => handleButtonClick(allActivities)}
						sx={selectedData === allActivities ? activeButtonStyle : {}}
					>
						<Typography variant="body1" color="text.primary">
							All
						</Typography>
					</Button>
					<Button
						onClick={() => handleButtonClick(tradeActivities)}
						sx={selectedData === tradeActivities ? activeButtonStyle : {}}
					>
						<Typography variant="body1" color="text.primary">
							Trade
						</Typography>
					</Button>
					<Button
						onClick={() => handleButtonClick(transfersActivities)}
						sx={selectedData === transfersActivities ? activeButtonStyle : {}}
					>
						<Typography variant="body1" color="text.primary">
							Transfers
						</Typography>
					</Button>
					<Button
						onClick={() => handleButtonClick(dividendsActivities)}
						sx={selectedData === dividendsActivities ? activeButtonStyle : {}}
					>
						<Typography variant="body1" color="text.primary">
							Dividends
						</Typography>
					</Button>
				</Stack>
			</StyledCardTitle>

			<DataTable rows={rows} columns={columns} />
		</StyledWrapper>
	);
};

export default ActivitiesDataGrid;
