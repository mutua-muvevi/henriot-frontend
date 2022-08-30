import { Box} from '@mui/material';
import { styled } from "@mui/system";

const StyledPortfolioSection = styled(Box)(({ theme }) => ({
	height: 350
}))

const StyledCardHeader = styled(Box)(({ theme }) => ({
	padding: "10px",
	borderBottom: "1px solid grey"
}))

const PortfolioSection = () => {
	return (
		<StyledPortfolioSection>
			<StyledCardHeader>
				Portfolio
			</StyledCardHeader>
			chart here
		</StyledPortfolioSection>
	)
}

export default PortfolioSection