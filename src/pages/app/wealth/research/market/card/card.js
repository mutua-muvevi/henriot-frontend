import { Box, Button, Card, List, ListItem, Stack, Typography,} from "@mui/material";
import { styled } from "@mui/system";

import { sentenceCase } from "change-case";
import LineChartComponent from "src/components/chart/line";
import { listItems, chartData, upcomingEvents, tweets } from "../info";


const StyledResearchMarketCard = styled(Card)(({ theme }) => ({
	padding: "15px",
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
	width: "23px",
	height: "23px",
	borderRadius: "50%",
	marginRight: "5px"
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

const StyledTweetSection = styled(Box)(({ theme }) => ({
	marginTop: "20px",
}));

const StyledTweetContainer = styled(Box)(({ theme }) => ({
	marginTop: "10px",
	height: "240px",
	overflowY:"scroll"
}));

const StyledTweetsItem = styled(Box)(({ theme }) => ({
	marginTop: "10px",
}));

const StyledTweetsTop = styled(Stack)(({ theme }) => ({
	marginBottom: "5px"
}));
const ResearchMarketCard = () => {
	
	const chartConfig = {
		datasetIdKey:"sdfsdfsdf",
		data:chartData
	}

	return (
		<StyledResearchMarketCard raised>
			<Typography variant="body2" color="text.primary" sx={{textTransform: "uppercase"}}>
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
								<Box>
									<img
										src={el.logo.src}
										alt={el.logo.alt}
										style={logoStyles}
									/>
								</Box>
								<Box sx={{flex:1}}>
									<Typography variant="caption" color="text.primary">
										{el.code}
									</Typography>
								</Box>
								<Box sx={{flex:5}}>
									<Typography variant="caption" color="text.primary">
										{el.title}
									</Typography>
								</Box>
								<Box sx={{flex:1}}>
									<Typography variant="caption" color="text.primary">
										{el.number}
									</Typography>
								</Box>
								<Box sx={{flex:1}}>
									<Typography variant="caption" color={el.color}>
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
						<Box sx={{flex:1,cursor:"pointer"}} key={i}>
							<Typography variant="body2">
								{el}
							</Typography>
						</Box>
					))
				}
			</StackButtons>
			<Box sx={{my:"10px"}}>
				<LineChartComponent  chartConfig={chartConfig}/>
			</Box>
			<StyledEventsSection>
				<Typography
					variant="body2"
					color="text.primary"
					gutterBottom
					sx={{
						fontWeight: "bold"
					}}
				>
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
							<Box >
								<img
									src={el.logo.src}
									alt={el.logo.alt}
									style={logoStyles}
								/>
							</Box>
							<Box sx={{flex:1}}>
								<Typography variant="caption" color="text.primary">
									{el.date}
								</Typography>
							</Box>
							<Box sx={{flex:1}}>
								<Typography variant="caption" color="text.primary">
									{el.time}
								</Typography>
							</Box>
							<Box sx={{flex:4}}>
								<Typography variant="caption" color="text.primary">
									{el.title}
								</Typography>
							</Box>
						</StyledEvents>
					)) : "Loading"
				}
			</StyledEventsSection>

			<StyledTweetSection>
				<Typography
					variant="body2"
					color="text.primary"
					sx={{
						marginBottom: "10px",
						fontWeight: "bold"
					}}
				>
					{sentenceCase("latest tweets")}
				</Typography>

				<StyledTweetContainer>
					{
						tweets ?
						tweets.map((el, i) => (
							<StyledTweetsItem key={i}>
								<StyledTweetsTop
									direction= "row"
									justifyContent="space-between"
									alignItems="center"
								>
									<Box>
										<img
											src={el.top.logo.src}
											alt={el.top.logo.alt}
											style={logoStyles}
										/>
									</Box>
									<Typography
										variant="body2"
										color="text.primary"
										sx={{
											flex:4,
											fontWeight: "bold"
										}}
									>
										{sentenceCase(el.top.title)}
									</Typography>
									<Typography
										variant="body2"
										color="text.primary"
										sx={{flex:2}}
									>
										{el.top.time}
									</Typography>
								</StyledTweetsTop>
								<Typography
									variant="body2"
									color="text.secondary"
									gutterBottom
								>
									{el.body}
								</Typography>
							</StyledTweetsItem>
						))
						: "Loading"
					}
				</StyledTweetContainer>
			</StyledTweetSection>
		</StyledResearchMarketCard>
	)
}

export default ResearchMarketCard