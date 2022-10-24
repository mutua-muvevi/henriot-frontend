import { Box } from "@mui/material";
import { styled } from "@mui/system";

import AccountDetailsMain from "./sections/main/main";
import AccountDetailsTop from "./sections/top";

const StyledBankingCurrentAccountDetails = styled(Box)(({ theme }) => ({

}))

const BankingCurrentAccountDetails = () => {
	return (
		<StyledBankingCurrentAccountDetails>
			<AccountDetailsTop/>
			<AccountDetailsMain/>
		</StyledBankingCurrentAccountDetails>
	)
}

export default BankingCurrentAccountDetails