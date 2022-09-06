import { Box } from "@mui/material";
import { styled } from "@mui/system";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const StyledYearlyChartHome = styled(Box)(({ theme }) => ({
	
}))

const data = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', "August", "September", "October", "November", "December" ],
	datasets: [
		{
			label: 'My First dataset',
			fill: false,
			lineTension: 0.1,
			backgroundColor: '#ed0f51',
			borderColor: '#ed0f51',
			borderCapStyle: 'round',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			pointBorderColor: '#ed0f51',
			pointBackgroundColor: '#ffffff',
			pointBorderWidth: 2,
			pointHoverRadius: 10,
			pointHoverBackgroundColor: '#ed0f51',
			pointHoverBorderColor: '#ed0f51',
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 10,
			data: [675, 590, 801, 381, 956, 255, 470, 234, 783, 902, 637, 890]
		}
	]
	};

const YearlyChartHome = () => {
	return (
		<StyledYearlyChartHome>
    		<Chart type='line' data={data} />
		</StyledYearlyChartHome>
	)
}

export default YearlyChartHome