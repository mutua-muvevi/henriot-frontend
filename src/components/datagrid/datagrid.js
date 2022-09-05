import React from 'react';

import { Box, Card, CardHeader } from "@mui/material";
import { styled } from "@mui/system";

import { DataGrid } from "@mui/x-data-grid";

const StyledDataGridContainer = styled(Card)(({theme}) => ({
	backgroundColor: "inherit",
	margin: "10px",
	borderRadius: theme.shape.default
}))

const StyledDataGridHeader = styled(CardHeader)(({theme}) => ({
	backgroundColor: "#131313",
	color: theme.palette.secondary.main,
	fontFamily: "'Rubik', sans-serif",
	
}))

const StyledDataGrid = styled(DataGrid)(({theme}) =>({
	border: "none",
	backgroundColor: theme.palette.background.default,
	width: "100%",
	borderRadius: theme.shape.default,
	"& .MuiDataGrid-columnHeaders": {
		backgroundColor: "#333333",
		color: theme.palette.secondary.main,
		fontSize: 13,
		paddingTop: 2,
		paddingBottom: 2,
	},
	"& .MuiDataGrid-virtualScrollerRenderZone": {
		"& .MuiDataGrid-row": {
			"&:nth-of-type(2n)": { backgroundColor: theme.palette.background.paper }
		}
	}
}))

const DatagridComponent = ({ columns, rows, title }) => {
	return (
		<StyledDataGridContainer>
			<StyledDataGridHeader style={{fontWeight: 500}} title="All Quotation" />
			<StyledDataGrid
				rows={columns}
				columns={columns}
				autoPageSize
				autoHeight
				pageSize={100}
			/>
		</StyledDataGridContainer>
	)
}

export default DatagridComponent