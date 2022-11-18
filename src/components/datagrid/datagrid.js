import React, { useState } from 'react';

import { styled } from "@mui/system";

import { DataGrid, GridToolbar  } from "@mui/x-data-grid";


const DatagridComponent = ({ columns, rows, title, actions, mt }) => {
	
	const StyledDataGrid = styled(DataGrid)(({theme}) =>({
		border: "none",
		backgroundColor: theme.palette.background.default,
		width: "100%",
		borderRadius: theme.shape.default,
		marginTop: mt ? mt : 20,
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
					Toolbar: actions === true ? GridToolbar : null
				}}
			/>
		</React.Fragment>
	)
}

export default DatagridComponent