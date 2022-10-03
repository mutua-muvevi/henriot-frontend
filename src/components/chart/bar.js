import { Bar } from 'react-chartjs-2';
import PropTypes from "prop-types";


const BarChartComponent = ({ chartConfig }) => {
	return (
		<Bar {...chartConfig}/>
	)
}

BarChartComponent.propTypes = {
	chartConfig: PropTypes.object.isRequired
}

export default BarChartComponent