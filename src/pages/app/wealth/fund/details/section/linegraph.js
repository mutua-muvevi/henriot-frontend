import { Box } from "@mui/material";
import { styled } from "@mui/system";
import LineChartComponent from "src/components/chart/line";

const StyledPerfomanceLinegraph = styled(Box)(({ theme }) => ({

}))

const chartData = {
	labels: ["Jan","Feb","Mar","April", "May", "June", "July", "Aug", "Sep"],
	datasets: [
		{
			id: 1,
			label: 'item One',
			data: [3, 19, 33, 57, 60, 78, 133, 143, 197],
			backgroundColor: "#65cfbb",
			borderColor:"#65cfbb",
			tension:0.1,
			fill:false,
			hoverBackgroundColor:"#32a08b",
		},
		{
			id: 2,
			label: 'item Two',
			data: [13, 47, 59, 73, 87, 99, 129, 189, 269],
			backgroundColor: "#3366FF",
			borderColor:"#3366FF",
			tension:0.1,
			fill:false,
			hoverBackgroundColor:"#32a08b"
		},
	],
	options:{}
}

const chartConfig = {
	datasetIdKey:"sdfsdfsdf",
	data:chartData
}

const PerfomanceLinegraph = () => {
	return (
		<StyledPerfomanceLinegraph>
			<LineChartComponent chartConfig={chartConfig}/>
		</StyledPerfomanceLinegraph>
	)
}

export default PerfomanceLinegraph