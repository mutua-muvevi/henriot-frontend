import { Box, Button, ButtonGroup, Divider, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { sentenceCase, capitalCase } from "change-case";
import FundDetailsHeader from "./header";

import { topLeftIcons } from "./info"

const StyledFundsDetails = styled(Box)(({ theme }) => ({

}));

const StyledIconTitleSection = styled(Stack)(({ theme }) => ({
	
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
			<StyledIconTitleSection
				direction="row"
				justifyContent="space-between"
				alignItems="center"			
			>
				<Typography variant="h5" color="primary">
					{capitalCase("Amalga active equity funds")}
				</Typography>
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
			</StyledIconTitleSection>
			<FundDetailsHeader/>
			<Typography variant="h1" color="initial">Cards</Typography>
			<Typography variant="h1" color="initial">Main</Typography>
		</StyledFundsDetails>
	)
}

export default FundsDetails