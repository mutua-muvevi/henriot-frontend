import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import TooltipComponent from "src/components/Tooltip";

import { rightSideContent } from "../info";


const StyledTermDepositBorrowUnSecuredBodyRight = styled(Grid)(({ theme }) => ({
	backgroundColor: theme.palette.grey[300],
	minHeight: "300px",
	paddingBottom: "20px",
	borderRadius: theme.shape.borderRadius
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({

}));

const TermDepositBorrowUnSecuredBodyRight = () => {
	return (
		<StyledTermDepositBorrowUnSecuredBodyRight container spacing={2}>
			{
				rightSideContent.map((el, i) => (
					<StyledGridItem key={i} item xs={6} sm={6} md={6} lg={6} xl={4}>
						<Stack
							direction="row"
							justifyContent="left"
							spacing={2}
							alignItems="center"
						>
							<Typography variant="body1" color="text.primary">
								{el.title}
							</Typography>
							<TooltipComponent
								title={el.tooltip.text}
								icon={el.tooltip.icon}
							/>
						</Stack>
						<Typography  variant="body2" sx={{color:"green"}}>
							{el.greenText}
						</Typography>
						<Typography  variant="body2" color="text.secondary">
							{el.text}
						</Typography>
					</StyledGridItem>
				))
			}
			<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
				<Button
					variant="contained"
					color="primary"
					sx={{color:"#fff"}}	
				>
					Borrow Now
				</Button>
			</Grid>
		</StyledTermDepositBorrowUnSecuredBodyRight>
	)
}

export default TermDepositBorrowUnSecuredBodyRight