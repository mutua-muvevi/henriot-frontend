import PropTypes from "prop-types";

import { Box, Button, ButtonGroup, Card, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { FaShareAltSquare } from "react-icons/fa"

import { chartData } from "./info";
import TooltipComponent from "src/components/UI/Tooltip";
import LineChartComponent from "src/components/chart/line";
import TimelineComponent from "src/components/UI/Timeline";

const StyledTermDepositLendCard = styled(Card)(({ theme }) => ({
	padding: "10px",
	minHeight: "700px"
}));

const StyledTermDepositLendCardStack = styled(Stack)(({ theme }) => ({

}));

const StyledBannerSection = styled(Stack)(({ theme }) => ({

}));

const StyledHeaderSection = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center"
}));

const styledShareIcon = {
	fontSize: "25px"
}

const StyledTitleSection = styled(Box)(({ theme }) => ({

}));

const StyledTitleStack = styled(Stack)(({ theme }) => ({

}));

const StyledGraphTop = styled(Box)(({ theme }) => ({
	display : "flex",
	justifyContent: "space-between",
	alignItems: "flex-start"
}));

const StyledGraphTopContentBox = styled(Box)(({ theme }) => ({

}));

const StyledGraphSection = styled(Stack)(({ theme }) => ({

}));

const StyledGraphSectionButtonGroup = styled(ButtonGroup)(({ theme }) => ({

}));

const buttonText = ["3 months", "6 months", "12months"]

const StyledGraphBottomSection = styled(Stack)(({ theme }) => ({
}));

const StyledGraphBottomSectionGridItem = styled(Box)(({ theme }) => ({
	width: "100% !important"
}));

const StyledTimelineSection = styled(Stack)(({ theme }) => ({
	borderBottom: "1px solid grey",
	height: "250px",
	overflowY: "scroll"
}));

const StyledTimelineSectionTopic = styled(Stack)(({ theme }) => ({
	position: "absolute",
	backgroundColor: theme.palette.background.paper,
	zIndex:2,
	width: "85%"
}));

const StyledSummarySection = styled(Stack)(({ theme }) => ({

}));

const StyledCheckboxSection = styled(Stack)(({ theme }) => ({

}));

const StyledConfirmButton = styled(Button)(({ theme }) => ({
	color:"white"
}));

const childrenArray = [1,2,4,5].map((el, i) => (
	<Stack
		direction="row"
		justifyContent="space-between"
		alignItems="center"
		key={i}
	>
		<Typography variant="body2" color="text.secondary">
			Some value here
		</Typography>
		<Typography variant="body2" color="text.secondary">
			Another value here
		</Typography>
	</Stack>
))


const TermDepositLendCard = ({ data }) => {

	const chartConfig = {
		datasetIdKey:"sdfsdfsdf",
		data:chartData
	}

	const timelineComponentItem = {
		id: "Term deposit lend timeline",
		children: childrenArray
	}

	return (
		<StyledTermDepositLendCard >
			<StyledTermDepositLendCardStack direction="column" spacing={2}>
				<StyledBannerSection direction="column" spacing={2}>
					<StyledHeaderSection>
						<Stack direction="row" alignItems="center">
							<Typography variant="h5" color="primary">
								{data.title}
							</Typography>
							<TooltipComponent
								title={data.tooltip}
								icon={data.tooltipIcon}
							/>
						</Stack>
						<FaShareAltSquare style={styledShareIcon}/>
					</StyledHeaderSection>

					<StyledTitleSection>
						<Typography variant="body2" color="text.secondary">
							Locked Stocking
						</Typography>
						<StyledTitleStack
							direction="row"
							justifyContent="space-between"
							alignItems="flex-start"
						>
							<Stack direction="row-reverse" alignItems="center">
								<Typography variant="h5" color="text.primary">
									{data.crypto.title}
								</Typography>
								{data.crypto.icon.icon}
							</Stack>
							<Stack direction="row" spacing={1}>
								{
									data.crypto.years.map((year, i) => (
										<Stack key={i} direction="column">
											<Typography variant="body2" color="text.secondary">
												{year.key}
											</Typography>
											<Typography variant="body2" color="text.secondary">
												{year.value}
											</Typography>
										</Stack>
									))
								}
							</Stack>
						</StyledTitleStack>
					</StyledTitleSection>

					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">Enter amount</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							label="Amount"
							size="small"
						>
							<MenuItem value={10}>10,000</MenuItem>
							<MenuItem value={20}>20,000</MenuItem>
							<MenuItem value={20}>30,000</MenuItem>
							<MenuItem value={20}>40,000</MenuItem>
						</Select>
					</FormControl>
				</StyledBannerSection>

				<StyledGraphTop>
					{
						data.graph.top.map((el, i) => (
							<StyledGraphTopContentBox key={i}>
								<Typography variant="body1" color="text.secondary" >
									{el.title.text}
								</Typography>
								{
									el.content.map((item, ind) => (
										<Box key={ind} sx={{mb:"5px", pl:"5px"}}>
											<Typography variant="body2" color="text.secondary">
												{item.text.icon ? item.text.icon: ""}{item.text.text}
											</Typography>
											<Typography variant="body2" sx={{color:item.coloredText.color}}>
												{item.coloredText.icon ? item.coloredText.icon: ""}{item.coloredText.text}
											</Typography>
										</Box>
									))
								}
							</StyledGraphTopContentBox>
						))
					}
				</StyledGraphTop>

				<StyledGraphSection direction="column" spacing={2}>
					<StyledGraphSectionButtonGroup>
						{
							buttonText.map((el, i) => (
								<Button key={i}>
									<Typography variant="caption" color="text.primary">
										{el}
									</Typography>
								</Button>
							))
						}
					</StyledGraphSectionButtonGroup>
					<LineChartComponent chartConfig={chartConfig}/>
				</StyledGraphSection>


				<StyledGraphBottomSection 
					spacing={1}
					direction="row"
				>
					{
						data.graph.bottom.map((el, i) => (
							<StyledGraphBottomSectionGridItem item key={i} xs={3} sm={3} md={3} lg={3} xl={3}>
								<Stack 
									direction="column"
									justifyContent="left"
									alignItems="flex-start"
									>
									<Stack
										direction="row"
										justifyContent="left"
										alignItems="center"
									>
										<Typography
											variant="body1"
											color="text.secondary"
											sx={{mr: "3px",}}
										>
											{el.title}
										</Typography>
										{el.tooltipIcon ? (
											<TooltipComponent
												title={el.tooltip}
												icon={el.tooltipIcon}
											/>
										) : ""}
									</Stack>
									<Typography variant="body1" color="text.primary">
										{el.text}
									</Typography>
								</Stack>
							</StyledGraphBottomSectionGridItem>
						))
					}
				</StyledGraphBottomSection>

				<StyledTimelineSection
					direction="column"
					spacing={2}
				>
					<StyledTimelineSectionTopic
						direction="row"
						justifyContent="space-between"
						alignItems="center"
					>
						<Typography variant="body2" color="text.secondary">
							Summary
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Show less
						</Typography>
					</StyledTimelineSectionTopic>
					<TimelineComponent
						id={timelineComponentItem.id}
						children={timelineComponentItem.children}
						connector={false}
					/>
				</StyledTimelineSection>

				<StyledSummarySection
					direction="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<Stack
						direction="row"
						alignItems="center"
					>
						<Typography variant="body2" color="text.secondary">
							{data.summary.bottom.title.text}
						</Typography>
						<TooltipComponent
							icon={data.summary.bottom.title.icon}
							title={data.summary.bottom.title.tooltip}
						/>
					</Stack>
					<Typography  variant="body2" color="text.primary">
						{data.summary.bottom.title.value}
					</Typography>
				</StyledSummarySection>

				<Typography variaant="body2" color="text.secondary">
					{data.summary.bottom.text}
				</Typography>
			
				<StyledCheckboxSection
					direction="row"
					justifyContent="left"
					alignItems="'start"
				>
					<FormGroup>
						<FormControlLabel
							control={
								<Checkbox
									size="small"
									defaultChecked />} 
							label={data.summary.bottom.checkbox}
						/>
					</FormGroup>
				</StyledCheckboxSection>

				<StyledConfirmButton
					variant="contained"
					color="primary"
				>
					Confirm
				</StyledConfirmButton>
			</StyledTermDepositLendCardStack>
		</StyledTermDepositLendCard>
	)
}

export default TermDepositLendCard