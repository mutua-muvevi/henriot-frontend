import { Box} from '@mui/material';
import { styled } from "@mui/system";

const StyledBuyOrderSection = styled(Box)(({ theme }) => ({
	height: 350
}))

const StyledCardHeader = styled(Box)(({ theme }) => ({
	padding: "10px",
	borderBottom: "1px solid grey"
}))

const OrderSection = () => {
	return (
		<StyledBuyOrderSection>
			<StyledCardHeader>
				Order
			</StyledCardHeader>
			chart here
		</StyledBuyOrderSection>
	)
}

export default OrderSection