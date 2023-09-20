import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import OrdersDataGrid from "./sections/datagrid";


const StyledWrapper = styled(Stack)(({ theme }) => ({

}))

const TradingOrders = () => {



	return (
		<StyledWrapper direction="column" spacing={3}>
			<Stack direction="column">
				<Typography variant="h3">
					Your Orders
				</Typography>
				<Typography variant="subtitle1" color="text.secondary">
					View and manage your orders.
				</Typography>
			</Stack>

			

			<OrdersDataGrid />
		</StyledWrapper>
	)
}

export default TradingOrders