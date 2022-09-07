import { Box } from "@mui/material";
import { styled } from "@mui/system";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { todaysChartData } from "../../info";

const StyledTodayChartHome = styled(Box)(({ theme }) => ({
	height: 320
}))

const data = {
	labels: ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am','12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',],
	datasets: [
		{
			//label: 'My First dataset',
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
			data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56,]
		}
	]
	};

const TodayChartHome = () => {
	return (
		<StyledTodayChartHome>
    		<Chart type='line' data={data}  height="100%"/>
		</StyledTodayChartHome>
	)
}

export default TodayChartHome