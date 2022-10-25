import { Box } from "@mui/material";
import { styled } from "@mui/system";

import InternalTransferMain from "./sections/main";
import InternalTransferTop from "./sections/top";

const StyledBankingInternalTransfer = styled(Box)(({ theme }) => ({
	
}))

const BankingInternalTransfer = () => {
	return (
		<StyledBankingInternalTransfer>
			<InternalTransferTop/>
			<InternalTransferMain/>
		</StyledBankingInternalTransfer>
	)
}

export default BankingInternalTransfer