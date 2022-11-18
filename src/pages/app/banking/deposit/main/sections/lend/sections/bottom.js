import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import TermDepositLendCard from "./card";
import { cardData } from "./info"

const StyledTermDepositLendBottom = styled(Grid)(({ theme }) => ({

}));

const StyledGridItem = styled(Grid)(({ theme }) => ({

}));

const TermDepositLendBottom = () => {
	return (
		<StyledTermDepositLendBottom container spacing={3}>
			{
				cardData.map((el, i) => (
					<StyledGridItem key={i} item xs={12} sm={12} md={12} lg={3} xl={3}>
						<TermDepositLendCard data={el}/>
					</StyledGridItem>
				))
			}
		</StyledTermDepositLendBottom>
	)
}

export default TermDepositLendBottom