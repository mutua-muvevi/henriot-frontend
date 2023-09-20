import { useState } from 'react';

import { styled } from "@mui/system";
import { DataGrid, GridToolbar  } from "@mui/x-data-grid";

const DataTable = ({ columns, rows, title, actions, mt }) => {
	const [pageSize, setPageSize] = useState(20);

	const StyledDataGrid = styled(DataGrid)(({theme}) =>({
		border: "none",
		backgroundColor: theme.palette.background.default,
		width: "100%",
		"& .MuiDataGrid-columnHeaders": {
			fontSize: 13,
		},
		"& .MuiDataGrid-virtualScrollerRenderZone": {
			"& .MuiDataGrid-row": {
				"&:nth-of-type(2n)": { backgroundColor: theme.palette.background.paper }
			}
		}
	}))
	return (
		<div style={{ height: "100%", width: "100%", }}>
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
		</div>
	);
};

export default DataTable;
