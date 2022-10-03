import { Line } from 'react-chartjs-2';


const LineChartComponent = ({ chartConfig }) => {
	return (
		<Line {...chartConfig}/>
	)
}

export default LineChartComponent