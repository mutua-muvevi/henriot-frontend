import { Box, Button, Card, List, ListItem, Stack, Typography,} from "@mui/material";
import { styled } from "@mui/system";

import { sentenceCase } from "change-case";
import LineChartComponent from "src/components/chart/line";
import { listItems, chartData, upcomingEvents } from "../info";


const StyledResearchMarketCard = styled(Card)(({ theme }) => ({
	padding: "10px",
	miHeight: 500,
}));

const StyledStack = styled(Stack)(({ theme }) => ({
	marginLeft: "-7px"
}))

const StyledButton = styled(Button)(({ theme }) => ({
	textTransform: "uppercase"
}));

const StyledListContainer = styled(Box)(({ theme }) => ({
	margin: "0px"
}));

const StyledListItem = styled(Box)(({ theme }) => ({
	marginBottom: "5px"
}));

const StyledListItemStack = styled(Stack)(({ theme }) => ({

}));

const logoStyles = {
	width: "28px",
	height: "28px",
	borderRadius: "5px",
}

const StackButtons = styled(Stack)(({ theme }) => ({
	width:"80%",
	margin: "10px auto auto auto",
}));

const StyledEventsSection = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	paddingTop: "10px",
	paddingBottom: "10px"
}));

const StyledEvents = styled(Stack)(({ theme }) => ({
	marginBottom: "5px"
}));

const ResearchMarketCard = () => {
	
	const chartConfig = {
		datasetIdKey:"sdfsdfsdf",
		data:chartData
	}

	return (
		<StyledResearchMarketCard>
			<Typography variant="body1" color="text.primary" sx={{textTransform: "uppercase"}}>
				indices
			</Typography>
			<StyledStack
				direction="row"
				justifyContent="left"
				alignItems="start"
				spacing={2}
			>
				{
					["popular", "gainers", "losers"].map((el, i) => (
						<StyledButton variant="text" color="primary" key={i}>
							{el}
						</StyledButton>
					))
				}
			</StyledStack>

			<StyledListContainer>
				{
					listItems ? 
					listItems.map((el, i) => (
						<StyledListItem key={i}>
							<StyledListItemStack
								direction= "row"
								justifyContent="space-between"
								alignItems="center"
							>
								<Box sx={{width: "10%"}}>
									<img
										src={el.logo.src}
										alt={el.logo.alt}
										style={logoStyles}
									/>
								</Box>
								<Box sx={{width: "10%"}}>
									<Typography variant="body2" color="text.secondary">
										{el.code}
									</Typography>
								</Box>
								<Box sx={{width: "50%"}}>
									<Typography variant="body2" color="text.secondary">
										{el.title}
									</Typography>
								</Box>
								<Box sx={{width: "10%"}}>
									<Typography variant="body2" color="text.secondary">
										{el.number}
									</Typography>
								</Box>
								<Box sx={{width: "10%"}}>
									<Typography variant="body2" color={el.color}>
										{el.percentage}
									</Typography>
								</Box>
							</StyledListItemStack>
						</StyledListItem>
					)): "Loading"
				}
			</StyledListContainer>

			<StackButtons
				direction="row"
				spacing={1}
				alignItems="center"
			>
				{
					["1M", "3M", "6M", "1Y", "3Y", "5Y", "10Y", "ALL"].map((el, i) => (
						<Box sx={{flex:1}} key={i}>
							{el}
						</Box>
					))
				}
			</StackButtons>
			<Box sx={{my:"10px"}}>
				<LineChartComponent  chartConfig={chartConfig}/>
			</Box>
			<StyledEventsSection>
				<Typography variant="body1" color="text.primary" gutterBottom>
					{sentenceCase("upcoming events")}
				</Typography>
				{
					upcomingEvents ? 
					upcomingEvents.map((el, i)=> (
						<StyledEvents
							direction= "row"
							justifyContent="space-between"
							alignItems="center"
							key={i}
						>
							<Box sx={{width: "10%"}}>
								<img
									src={el.logo.src}
									alt={el.logo.alt}
									style={logoStyles}
								/>
							</Box>
							<Box sx={{width: "15%"}}>
								<Typography variant="body2" color="text.secondary">
									{el.date}
								</Typography>
							</Box>
							<Box sx={{width: "15%"}}>
								<Typography variant="body2" color="text.secondary">
									{el.time}
								</Typography>
							</Box>
							<Box sx={{width: "60%"}}>
								<Typography variant="body2" color="text.secondary">
									{el.title}
								</Typography>
							</Box>
						</StyledEvents>
					)) : "Loading"
				}
			</StyledEventsSection>
		</StyledResearchMarketCard>
	)
}

export default ResearchMarketCard