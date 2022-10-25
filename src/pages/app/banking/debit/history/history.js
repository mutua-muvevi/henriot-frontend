import { Box } from "@mui/material";
import { styled } from "@mui/system";

import DebitHistoryBottom from "./sections/bottom";
import DebitHistoryMain from "./sections/main/main";
import DebitHistoryTop from "./sections/top";

const StyledDebitHistory = styled(Box)(({ theme }) => ({

}))

const DebitHistory = () => {
	return (
		<StyledDebitHistory>
			<DebitHistoryTop/>
			<DebitHistoryMain/>
			<DebitHistoryBottom/>
		</StyledDebitHistory>
	)
}

export default DebitHistory