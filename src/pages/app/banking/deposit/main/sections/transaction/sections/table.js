import { Box } from "@mui/material";
import { styled } from "@mui/system";

import { columns, rows } from "../info";
import DatagridComponent from "src/components/datagrid/datagrid";



const StyledTermDepositTransactionTable = styled(Box)(({ theme }) => ({

}));

const TermDepositTransactionTable = () => {
	return (
		<StyledTermDepositTransactionTable>
			<DatagridComponent
				title="deposit term table"
				rows={rows}
				columns={columns}
				actions={false}
				marginTop=""
			/>
		</StyledTermDepositTransactionTable>
	)
}

export default TermDepositTransactionTable