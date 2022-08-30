import Chart from "react-apexcharts";

import { Box} from '@mui/material';
import { styled } from "@mui/system";

const StyledChartSection = styled(Box)(({ theme }) => ({
	height: 350
}))

const StyledCardHeader = styled(Box)(({ theme }) => ({
	padding: "10px",
	borderBottom: "1px solid grey"
}))

const chartOptions = {
	xaxis: {
		categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
	}
}

const chartSeries = [
	{
		name: "series-1",
		data: [30, 40, 45, 50, 49, 60, 70, 91]
	}
]

const ChartSection = () => {
	return (
		<StyledChartSection>
			<StyledCardHeader>
				Chart
			</StyledCardHeader>
			<Chart
				options={chartOptions}
				series={chartSeries}
				type="line"
				width="100%"
				height="100%"
			/>
		</StyledChartSection>
	)
}

export default ChartSection