import { Box } from "@mui/material";
import { styled } from "@mui/system";

import SwiftTransferMain from "./sections/main";
import SwiftTransferTop from "./sections/top";

const StyledBankingSwiftTransfer = styled(Box)(({ theme }) => ({
	
}))

const BankingSwiftTransfer = () => {
	return (
		<StyledBankingSwiftTransfer>
			<SwiftTransferTop/>
			<SwiftTransferMain/>
		</StyledBankingSwiftTransfer>
	)
}

export default BankingSwiftTransfer