import { Box, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import ReactApexChart from "react-apexcharts";

const StyledWrapper = styled(Box)(({ theme }) => ({}));

const TradingGraph = ({ data }) => {
	const theme = useTheme();

	const graphData = {
		series: [
			{
				name: "portfolio",
				data: data.map((item) => item.dollars),
			},
		],
		options: {
			chart: {
				type: "area",
				height: 350,
				zoom: {
					enabled: false,
				},
				contextMenu: {
					// Customize the context menu's style here
					background: theme.palette.background.paper,
					fontSize: "12px",
					border: `1px solid ${theme.palette.divider}`,
				},
			},
			colors: [theme.palette.primary.main],
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: "smooth",
				width: 2,
			},
			xaxis: {
				type: "category",
				categories: data.map((item) => item.date),
			},
			yaxis: {
				title: {
					text: "Amount in Dollars",
				},
			},
		},
	};

	return (
		<StyledWrapper>
			<ReactApexChart options={graphData.options} series={graphData.series} type="area" height={350} />
		</StyledWrapper>
	);
};

export default TradingGraph;
