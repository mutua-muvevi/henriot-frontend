import { Stack } from "@mui/material";
import { styled } from "@mui/system";

import TermDepositTransactionTopCards from "./sections/card";
import TermDepositTransactionChart from "./sections/chart";
import TermDepositTransactionTable from "./sections/table";
import TermDepositTransactionLower from "./sections/lower";

const StyledTermDepositTransaction = styled(Stack)(({ theme }) => ({

}));

const TermDepositTransaction = () => {
	return (
		<StyledTermDepositTransaction direction="column" spacing={2}>
			<TermDepositTransactionTopCards/>
			<TermDepositTransactionChart/>
			<TermDepositTransactionTable/>
			<TermDepositTransactionLower/>
		</StyledTermDepositTransaction>
	)
}

export default TermDepositTransaction