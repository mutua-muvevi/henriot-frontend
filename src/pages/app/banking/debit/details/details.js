import { Box } from "@mui/material";
import { styled } from "@mui/system";
import DebitDetailsBottom from "./sections/bottom";

import DebitDetailsMain from "./sections/main/main";
import DebitDetailsTop from "./sections/top";

const StyledDebitDetails = styled(Box)(({ theme }) => ({

}))

const DebitDetails = () => {
	return (
		<StyledDebitDetails>
			<DebitDetailsTop/>
			<DebitDetailsMain/>
			<DebitDetailsBottom/>
		</StyledDebitDetails>
	)
}

export default DebitDetails