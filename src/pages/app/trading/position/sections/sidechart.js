import { Box, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import ReactApexChart from "react-apexcharts";

const StyledWrapper = styled(Box)(({ theme }) => ({
	minHeight: 200,
	width: 300,
}));

const SideChart = ({ data }) => {
	const theme = useTheme();

	const graphData = {
		series: [32, 30],
		options: {
			chart: {
				type: "donut",
			},
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: "100%",
						},
						legend: {
							position: "bottom",
						},
					},
				},
			],
			labels: ["Long", "Short"],
			plotOptions: {
				pie: {
					size: "50%",
				},
			},
			stroke: {
				curve: "smooth",
			},
			colors: [theme.palette.primary.main, theme.palette.secondary.main, theme.palette.warning.main],
		},
	};

	return (
		<StyledWrapper>
			<ReactApexChart options={graphData.options} series={graphData.series} type="donut" />
		</StyledWrapper>
	);
};

export default SideChart;
