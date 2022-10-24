import { Box, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { sentenceCase } from "change-case";
import TimelineComponent from "src/components/Timeline";

import { BsNewspaper } from "react-icons/bs";

const StyledCard = styled(Card)(({ theme }) => ({

}));

const StyledCardContentTitle = styled(CardContent)(({ theme }) => ({
	borderBottom: "1px solid grey",
	display: "flex",
	justifyContent: "left"
}));

const StyledCardContentBody = styled(CardContent)(({ theme }) => ({
	minHeight: 250,
	overflowY: "scroll",
	maxHeight: 500
}));

const childrenArray = [1,2,4,5].map((el, i) => (
	<Box key={i} sx={{mb:"10px"}}>
		<Typography variant="subtitle1" color="text.secondary">
			Lorem ipsum text title
		</Typography>
		<Typography variant="caption" color="text.disabled" gutterBottom>
			posted by manager at march 3rd 2022
		</Typography>
		<Typography variant="body2" color="text.primary">
			{sentenceCase("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id eros malesuada, lacinia ante eget, hendrerit nunc. Suspendisse at rutrum massa. Fusce imperdiet massa non nunc tincidunt ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris id pellentesque eros. Pellentesque id elementum risus, non fermentum lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus.")}
		</Typography>		
	</Box>
))

const newsTimelineItems = {
	id:"banking news timeline",
	children: childrenArray
}

const iconStyles = {
	marginRight: "10px",
	fontSize: "20px"
}

const BankingNewsSection = () => {
  return (
	<StyledCard>
		<StyledCardContentTitle>
			<BsNewspaper style={iconStyles}/>
			<Typography variant="subtitle1" color="text.secondary">
				{sentenceCase("news")}
			</Typography>
		</StyledCardContentTitle>
		<StyledCardContentBody>
			<TimelineComponent
				id={newsTimelineItems.id}
				children={newsTimelineItems.children}
			/>
		</StyledCardContentBody>
	</StyledCard>
  )
}

export default BankingNewsSection