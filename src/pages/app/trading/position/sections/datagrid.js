import { useState } from "react";

import { Card, Button, Stack, Typography, useTheme, CardContent } from "@mui/material";
import { styled } from "@mui/system";

import { allPosition, longPosition, shortPosition, } from "../info"
import { columns, rows } from "src/content/datagrid";
import DataTable from "src/components/datagrid/datatable";

const StyledWrapper = styled(Card)(({ theme }) => ({
	minHeight: "50vh"
}))

const StyledCardTitle = styled(CardContent)(({ theme }) => ({
	backgroundColor: theme.palette.background.tabHeader
}))

const PositionDataGrid = () => {
	const [selectedData, setSelectedData] = useState(allPosition);
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
						onClick={() => handleButtonClick(allPosition)}
						sx={selectedData === allPosition ? activeButtonStyle : {}}
					>
						<Typography variant="body1" color="text.primary">
							All
						</Typography>
					</Button>
					<Button
						onClick={() => handleButtonClick(longPosition)}
						sx={selectedData === longPosition ? activeButtonStyle : {}}
					>
						<Typography variant="body1" color="text.primary">
							Long
						</Typography>
					</Button>
					<Button
						onClick={() => handleButtonClick(shortPosition)}
						sx={selectedData === shortPosition ? activeButtonStyle : {}}
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

export default PositionDataGrid