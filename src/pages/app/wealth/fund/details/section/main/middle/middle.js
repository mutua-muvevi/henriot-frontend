
import { Box, Grid, Card, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { sentenceCase } from "change-case";
import FundSummaryCard from "./fundsummary";

const StyledFundDetailsMiddleSection = styled(Grid)(({ theme }) => ({
	marginBottom: "20px"
}));

const StyledFundDetailsMiddleSectionItem = styled(Grid)(({ theme }) => ({

}));


const StyledCard = styled(Card)(({ theme }) => ({
	padding: "10px",
	minHeight: 200,
}));

const FundDetailsMiddleSection = () => {
	
	const items = [
		{
			title: "Card title One",
			content: `Culpa nulla velit ullamco reprehenderit adipisicing. Eu aliqua ut elit qui. Anim sit consectetur fugiat enim aliqua eiusmod voluptate deserunt excepteur elit culpa. Cillum adipisicing mollit eu id consequat exercitation pariatur incididunt aliquip aliqua. Et nostrud quis id Lorem quis proident eu qui sit ullamco reprehenderit consectetur.`
		},
		{
			title: "Card title Two",
			content: `Culpa nulla velit ullamco reprehenderit adipisicing. Eu aliqua ut elit qui. Anim sit consectetur fugiat enim aliqua eiusmod voluptate deserunt excepteur elit culpa. Cillum adipisicing mollit eu id consequat exercitation pariatur incididunt aliquip aliqua. Et nostrud quis id Lorem quis proident eu qui sit ullamco reprehenderit consectetur.`
		},
	]
	return (
		<StyledFundDetailsMiddleSection container spacing={2}>
			<StyledFundDetailsMiddleSectionItem item xs={12} sm={12} md={12} lg={5} xl={5}>
				<Stack direction="column" spacing={2}>
					{
						items ? items.map((el, i) => (
							<StyledCard key={el}>
								<Typography variant="h5" color="primary" gutterBottom>
									{sentenceCase(el.title)}
								</Typography>
								<Typography variant="body1" color="text.primary">
									{sentenceCase(el.content)}
								</Typography>
							</StyledCard>
						)) : "Loading"
					}
				</Stack>
			</StyledFundDetailsMiddleSectionItem>
			<StyledFundDetailsMiddleSectionItem item xs={12} sm={12} md={12} lg={7} xl={7}>
				<FundSummaryCard/>
			</StyledFundDetailsMiddleSectionItem>
		</StyledFundDetailsMiddleSection>
	)
}

export default FundDetailsMiddleSection