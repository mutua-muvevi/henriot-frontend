import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { BsArrowRight } from "react-icons/bs";

import { dottedSectionItems } from "./info";

const StyledTermDepositBorrowDotted = styled(Grid)(({ theme }) => ({
	marginTop: "10px"
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({

}));

const StyledCard = styled(Card)(({ theme }) => ({
	width:"200px",
	height: "200px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	padding: "10px"
}))

const StyledStackItem = styled(Stack)(({ theme }) => ({
	borderRadius: theme.shape.borderRadius,
}));

const arrowIconStyles = {
	fontSize: "30px",
	fontStretch: "150%",
	marginRight: "10px"
}

const TermDepositBorrowDotted = () => {
	return (
		<StyledTermDepositBorrowDotted container>
			{
				dottedSectionItems.map((el, i) => (
					<StyledGridItem key={i} item xs={12} sm={12} md={3} lg={3} xl={3}>
						<Stack
							direction="row"
							justifyContent="left"
							alignItems="center"
						>
							<BsArrowRight style={arrowIconStyles}/>
							<StyledCard>
								<StyledStackItem
									direction="column"
									alignItems="center"
									justifyContent="center"
								>
									{el.icon}
									<Typography
										variant="body1"
										color="text.secondary"
										sx={{textAlign:"center"}}
									>
										{el.text}
									</Typography>
								</StyledStackItem>
							</StyledCard>
						</Stack>
					</StyledGridItem>
				))
			}
		</StyledTermDepositBorrowDotted>
	)
}

export default TermDepositBorrowDotted