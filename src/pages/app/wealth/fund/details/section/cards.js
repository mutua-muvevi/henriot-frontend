import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { sentenceCase, capitalCase } from "change-case";

import FundDetailsCard from "./card";
import TooltipComponent from "src/components/UI/Tooltip";
import { FaInfoCircle } from "react-icons/fa";

const StyledGridCardsSection = styled(Grid)(({ theme }) => ({
	marginTop: 10,
	marginBottom: 10,
}));

const StyledGridCardsItems = styled(Grid)(({ theme }) => ({
	
}));

const GeneralCardItemsStyles = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	textAlign: "left"
}))

const RiskItemComponent = () => {
	return (
		<GeneralCardItemsStyles>
			<Box
				sx={{
					display: "flex",
					textAlign: "left",
					alignItems: "center"
				}}
			>
				<Typography variant="body1" color="text.primary">
					Risk
				</Typography>
				<TooltipComponent
					title="Some action on hover"
					icon={<FaInfoCircle style={{fontSize: "16px"}} />}
				/>
			</Box>
			<Typography variant="h5">
				{sentenceCase("Very high")}
			</Typography>
		</GeneralCardItemsStyles>
	)
}

const AmountItemComponent = () => {
	return (
		<GeneralCardItemsStyles>
			<Typography variant="body1" color="text.primary">
				{sentenceCase("Alumn ($) `000")}
			</Typography>
			<Typography variant="h5" color="text.primary">
				$ 1000
			</Typography>
			<Typography variant="body2" color="text.primary">
				{sentenceCase("end of september")}
			</Typography>
		</GeneralCardItemsStyles>
	)
}

const AgeItemComponent = () => {
	return (
		<GeneralCardItemsStyles>
			<Typography variant="body1" color="text.primary">
				{sentenceCase("age:")}
			</Typography>
			<Typography variant="h5" color="text.primary">
				37 months
			</Typography>
			<Typography variant="body2" color="text.primary">
				{sentenceCase("end of september")}
			</Typography>
		</GeneralCardItemsStyles>
	)
}

const MonthlyChargeItemComponent = () => {
	return (
		<GeneralCardItemsStyles>
			<Typography variant="body1" color="text.primary">
				{sentenceCase("monthly av charge")}
			</Typography>
			<Typography variant="h5" color="text.primary">
				-$ 0.02
			</Typography>
			<Typography variant="body2" color="text.primary">
				{sentenceCase("end of september")}
			</Typography>
		</GeneralCardItemsStyles>
	)
}

const NetAssetItemComponent = () => {
	return (
		<GeneralCardItemsStyles>
			<Typography variant="body1" color="text.primary">
				{sentenceCase("new asset value")}
			</Typography>
			<Typography variant="h5" color="text.primary">
				41.87
			</Typography>
			<Typography variant="body2" color="text.primary">
				{sentenceCase("lorem text")}
			</Typography>
		</GeneralCardItemsStyles>
	)
}

const UnknownItemComponent = () => {
	return (
		<GeneralCardItemsStyles>
			<Typography variant="body1" color="text.primary">
				{sentenceCase("lorem text here")}
			</Typography>
			<Typography variant="h5" color="text.primary">
				-52.29%
			</Typography>
			<Typography variant="body2" color="text.primary">
				{sentenceCase("lorem text")}
			</Typography>
		</GeneralCardItemsStyles>
	)
}

const ExpenseRationItemComponent = () => {
	return (
		<GeneralCardItemsStyles>
			<Typography variant="body1" color="text.primary">
				{sentenceCase("expense ratio")}
			</Typography>
			<Typography variant="h5" color="text.primary">
				0.75%
			</Typography>
		</GeneralCardItemsStyles>
	)
}

const BenchmarkIndexItemComponent = () => {
	return (
		<GeneralCardItemsStyles>
			<Typography variant="body1" color="text.primary">
				{sentenceCase("benchmark index")}
			</Typography>
			<Typography variant="body2" color="#000000">
				{sentenceCase("lorem text")}
			</Typography>
			<Typography variant="h5" color="text.primary">
				21.82%
			</Typography>
		</GeneralCardItemsStyles>
	)
}

const HorizonItemComponent = () => {
	return (
		<GeneralCardItemsStyles>
			<Typography variant="body1" color="text.primary">
				{sentenceCase("lorem ipsum")}
			</Typography>
			<Typography variant="h5" color="text.primary">
				{capitalCase("long term")}
			</Typography>
		</GeneralCardItemsStyles>
	)
}

const componentItemsLists = [
	{
		component: <RiskItemComponent/>,
		config: {}
	},
	{
		component: <AmountItemComponent/>,
		config: {}
	},
	{
		component: <MonthlyChargeItemComponent/>,
		config: {}
	},
	{
		component: <AgeItemComponent/>,
		config: {}
	},
	{
		component: <NetAssetItemComponent/>,
		config: {}
	},
	{
		component: <UnknownItemComponent/>,
		config: {}
	},
	{
		component: <ExpenseRationItemComponent/>,
		config: {}
	},
	{
		component: <BenchmarkIndexItemComponent/>,
		config: {}
	},
	{
		component: <HorizonItemComponent/>,
		config: {}
	},
]

const FundDetailsCards = () => {
	return (
		<StyledGridCardsSection container spacing={2}>
			{
				componentItemsLists.map((el, i) => (
					<StyledGridCardsItems key={i} item xs={6} sm={4} md={3} lg={1.333} xl={1.333}>
						<FundDetailsCard
							component={el.component}
							config={el.config}
						/>
					</StyledGridCardsItems>
				))
			}
		</StyledGridCardsSection>
	)
}

export default FundDetailsCards