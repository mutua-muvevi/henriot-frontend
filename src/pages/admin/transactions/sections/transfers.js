import React from 'react';

import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { columns, rows } from "../info";
import DatagridComponent from 'src/components/datagrid/datagrid';

const StyledTable = styled(Card)(({ theme }) => ({

}))

const StyledTitleSection = styled(Box)(({ theme }) => ({
	paddingLeft: "15px",
	paddingTop: "15px"
}))

const TransfersTable = () => {
	return (
		<StyledTable>
			<StyledTitleSection>
				<Typography variant="h5" color="text.secondary">
					Transfer records
				</Typography>
			</StyledTitleSection>

			<DatagridComponent
				title="Transfers records"
				rows={rows}
				columns={columns}
			/>
		</StyledTable>
	)
}

export default TransfersTable