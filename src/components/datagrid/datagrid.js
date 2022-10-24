import React, { useState } from 'react';

import { styled } from "@mui/system";

import { DataGrid, GridToolbar  } from "@mui/x-data-grid";


const StyledDataGrid = styled(DataGrid)(({theme}) =>({
	border: "none",
	backgroundColor: theme.palette.background.default,
	width: "100%",
	borderRadius: theme.shape.default,
	marginTop: 20,
	"& .MuiDataGrid-columnHeaders": {
		backgroundColor: theme.palette.primary.main,
		color: "#fff",
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
	const [pageSize, setPageSize] = useState(20);
	
	return (
		<React.Fragment id={title}>
			<StyledDataGrid
				rows={rows}
				columns={columns}
				autoHeight
				pageSize={pageSize}
				onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
				rowsPerPageOptions={[5, 10, 20]}
				pagination
				components={{
					Toolbar: GridToolbar
				}}
			/>
		</React.Fragment>
	)
}

export default DatagridComponent