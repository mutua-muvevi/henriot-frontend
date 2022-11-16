import { Box } from "@mui/material";
import { styled } from "@mui/system";

import { columns, rows } from "./info";
import DatagridComponent from "src/components/datagrid/datagrid";



const StyledDepositTermHomeTopTable = styled(Box)(({ theme }) => ({

}));

const DepositTermHomeTopTable = () => {
	return (
		<StyledDepositTermHomeTopTable>
			<DatagridComponent
				title="deposit term table"
				rows={rows}
				columns={columns}
				actions={false}
			/>
		</StyledDepositTermHomeTopTable>
	)
}

export default DepositTermHomeTopTable