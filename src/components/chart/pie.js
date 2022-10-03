import { Pie } from 'react-chartjs-2';
import PropTypes from "prop-types";


const PieChartComponent = ({ chartConfig }) => {
	return (
		<Pie {...chartConfig}/>
	)
}

PieChartComponent.propTypes = {
	chartConfig: PropTypes.object.isRequired
}

export default PieChartComponent