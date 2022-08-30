import { Box} from '@mui/material';
import { styled } from "@mui/system";

const StyledWatchlistSection= styled(Box)(({ theme }) => ({
	height: 350
}))

const StyledCardHeader = styled(Box)(({ theme }) => ({
	padding: "10px",
	borderBottom: "1px solid grey"
}))

const WatchlistSection = () => {
	return (
		<StyledWatchlistSection>
			<StyledCardHeader>
				Watchlist
			</StyledCardHeader>
			Content
		</StyledWatchlistSection>
	)
}

export default WatchlistSection