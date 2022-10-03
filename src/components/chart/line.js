import { Line } from 'react-chartjs-2';
import PropTypes from "prop-types";


const LineChartComponent = ({ chartConfig }) => {
	return (
		<Line {...chartConfig}/>
	)
}

LineChartComponent.propTypes = {
	chartConfig: PropTypes.object.isRequired
}

export default LineChartComponent