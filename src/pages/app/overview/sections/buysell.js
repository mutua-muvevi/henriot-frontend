import { Box} from '@mui/material';
import { styled } from "@mui/system";

const StyledBuySellSection = styled(Box)(({ theme }) => ({
	height: 650
}))

const StyledCardHeader = styled(Box)(({ theme }) => ({
	padding: "10px",
	borderBottom: "1px solid grey"
}))

const BuySellSection = () => {
	return (
		<StyledBuySellSection>
			<StyledCardHeader>
				Buy sell
			</StyledCardHeader>
			chart here
		</StyledBuySellSection>
	)
}

export default BuySellSection