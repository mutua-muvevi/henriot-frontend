import { Box, Button, ButtonGroup, Divider, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { sentenceCase } from "change-case";

import { topLeftIcons } from "./info"

const StyledFundsDetails = styled(Box)(({ theme }) => ({

}));

const StyledIconSection = styled(Stack)(({ theme }) => ({
	
}));

const StyledTextIconContainer = styled(Button)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems:"center"
}));


const FundsDetails = () => {
	return (
		<StyledFundsDetails>
			<StyledIconSection
				direction="row"
				spacing={1}
				justifyContent="right"
				alignItems="center"
			>
				{
					topLeftIcons.map((el, i) => (
						<StyledTextIconContainer key={i}>
							{el.icon}
							<Typography variant="body2" sx={{wordWrap:"wrap"}}>
								{ sentenceCase(el.label) }
							</Typography>
						</StyledTextIconContainer>
					))
				}
			</StyledIconSection>
		<div>FundsDetails</div>
		</StyledFundsDetails>
	)
}

export default FundsDetails