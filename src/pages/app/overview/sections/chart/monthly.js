import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

import { Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledMonthlyChartHome = styled(Box)(({ theme }) => ({
	
}))

const data = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July' ],
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
			data: [65, 59, 80, 81, 56, 55, 40]
		}
	]
	};

const MonthlyChartHome = () => {
	return (
		<StyledMonthlyChartHome>
    		<Chart type='line' data={data} />
		</StyledMonthlyChartHome>
	)
}

export default MonthlyChartHome