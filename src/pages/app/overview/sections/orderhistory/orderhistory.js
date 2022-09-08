import { Box, Card, Divider, Typography } from "@mui/material";
import { styled } from "@mui/system";


const ContainerWrapper = styled(Card)(({ theme }) => ({
	borderRadius: theme.shape.borderRadius,
	minHeight: 300
}));

const StyledTitle = styled(Box)(({ theme }) => ({
	padding: "10px",
	borderBottom: "1px solid grey"
}))

const OrderHistorySection = () => {
	return (
		<ContainerWrapper>
			<StyledTitle>
				<Typography variant="h4">
					Order history
				</Typography>
			</StyledTitle>
		</ContainerWrapper>
	)
}

export default OrderHistorySection