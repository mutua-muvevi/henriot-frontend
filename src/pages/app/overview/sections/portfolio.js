import { Box} from '@mui/material';
import { styled } from "@mui/system";
import TableComponent from "../../../../components/table/table";

const StyledPortfolioSection = styled(Box)(({ theme }) => ({
	height: 350,
	overflow: "scroll"
}))

const StyledCardHeader = styled(Box)(({ theme }) => ({
	padding: "10px",
}))

const mockData = [
	{
		stocks: 323,
		bitcoin: 123,
		eretherum: 32,
		coinbase: 23424
	},
	{
		stocks: 323,
		bitcoin: 123,
		eretherum: 32,
		coinbase: 23424
	},
	{
		stocks: 323,
		bitcoin: 123,
		eretherum: 32,
		coinbase: 23424
	},
	{
		stocks: 323,
		bitcoin: 123,
		eretherum: 32,
		coinbase: 23424
	},
	{
		stocks: 323,
		bitcoin: 123,
		eretherum: 32,
		coinbase: 23424
	},
]

const PortfolioSection = () => {
	return (
		<StyledPortfolioSection>
			<StyledCardHeader>
				Portfolio
			</StyledCardHeader>
			<TableComponent
				data={mockData}
			/>
		</StyledPortfolioSection>
	)
}

export default PortfolioSection