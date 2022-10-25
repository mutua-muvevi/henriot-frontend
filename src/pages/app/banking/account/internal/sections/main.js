import { Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";

import InternalTransferForm from "./form";

const StyledInternalTransferCard = styled(Card)(({ theme }) => ({
	minHeight: 600,
	marginTop: 30
}));

const StyledInternalTransferCardContent = styled(CardContent)(({ theme }) => ({

}));

const InternalTransferMain = () => {
	return (
		<StyledInternalTransferCard>
			<StyledInternalTransferCardContent>
				<InternalTransferForm/>
			</StyledInternalTransferCardContent>
		</StyledInternalTransferCard>
	)
}

export default InternalTransferMain