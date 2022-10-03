import { Box, Stack } from "@mui/material";
import { styled } from "@mui/system";
import CurrentAssetAllocation from "./current";

import FindDocuments from "./find";
import OtherInformation from "./otherinfo";
import PrescribedAssetAllocation from "./prescribed";

const StyledLeftSideFundsDetailsLowerSection = styled(Box)(({ theme }) => ({

}))

const LeftSideFundsDetailsLowerSection = () => {
	return (
		<StyledLeftSideFundsDetailsLowerSection>
			<Stack direction="column" spacing={2}>
				<OtherInformation/>
				<CurrentAssetAllocation/>
				<PrescribedAssetAllocation/>
				<FindDocuments/>
			</Stack>
		</StyledLeftSideFundsDetailsLowerSection>
	)
}

export default LeftSideFundsDetailsLowerSection