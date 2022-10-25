import { Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";

import SwiftTransferForm from "./form";

const StyledSwiftTransferCard = styled(Card)(({ theme }) => ({
	minHeight: 600,
	marginTop: 30
}));

const StyledSwiftTransferCardContent = styled(CardContent)(({ theme }) => ({

}));

const SwiftTransferMain = () => {
	return (
		<StyledSwiftTransferCard>
			<StyledSwiftTransferCardContent>
				<SwiftTransferForm/>
			</StyledSwiftTransferCardContent>
		</StyledSwiftTransferCard>
	)
}

export default SwiftTransferMain