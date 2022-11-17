import { Stack, Button, ButtonGroup } from "@mui/material";
import { styled } from "@mui/system";

import TermDepositLendBottom from "./sections/bottom";

const StyledTermDepositLend = styled(Stack)(({ theme }) => ({

}));

const StyledButtonGroup = styled(ButtonGroup)(({ theme }) => ({

}));

const StyledButton = styled(Button)(({ theme }) => ({
	color: "black"
}));

const buttonItems = ["All Types", "Unsecured FLAT", "Unsecured Crypto", "USC Secured vs 100% Collateral"]

const TermDepositLend = () => {
	return (
		<StyledTermDepositLend
			direction="column"
			spacing={3}
		>
			<StyledButtonGroup variant="outlined">
				{buttonItems.map((el, i) => (
					<StyledButton key="i">
						{el}
					</StyledButton>
				))}
			</StyledButtonGroup>

			<TermDepositLendBottom/>
		</StyledTermDepositLend>
	)
}

export default TermDepositLend