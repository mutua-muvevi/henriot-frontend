import { Box, Button, ButtonGroup, Divider, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { sentenceCase, capitalCase } from "change-case";
import FundDetailsCards from "./section/cards";
import FundDetailsHeader from "./section/header";

import { topLeftIcons } from "./info"
import FundDetailsMain from "./section/main";

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

			<FundDetailsCards/>
			<FundDetailsMain/>

		</StyledFundsDetails>
	)
}

export default FundsDetails