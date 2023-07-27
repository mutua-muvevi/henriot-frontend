import { Card } from "@mui/material";
import { styled } from "@mui/system";
import TwitterFeedComponent from "src/components/UI/TwitterFeed";

const StyledTwitterfeed = styled(Card)(({ theme }) => ({
	height: 350
}))

const Twitterfeed = () => {
	return (
		<StyledTwitterfeed>
			<TwitterFeedComponent/>
		</StyledTwitterfeed>
	)
}

export default Twitterfeed