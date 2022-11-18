import { Box } from "@mui/material";
import { styled } from "@mui/system";
import TermDepositSummaryForm from "./sections/form";

const StyledTermDepositSummary = styled(Box)(({ theme }) => ({

}));

const TermDepositSummary = () => {
	return (
		<StyledTermDepositSummary>
			<TermDepositSummaryForm/>
		</StyledTermDepositSummary>
	)
}

export default TermDepositSummary