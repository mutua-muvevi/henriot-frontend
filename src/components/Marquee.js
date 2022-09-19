import PropTypes from "prop-types";
import Marquee from "react-fast-marquee";

const marqueStyles = {
	backgroundColor: "#DFE3E8",
	marginBottom: "20px",
	minHeight: "40px",
	borderRadius: "4px"
}

const MarqueeComponent = ({ child }) => {
	return (
		<Marquee
			style={marqueStyles}
			gradient={false}
			speed={80}
		>

			<div>First</div>
			<div>Component</div>
			<div>Second</div>
			<div>Component</div>
		</Marquee>
	)
}

MarqueeComponent.propTypes={
	child: PropTypes.node
}

export default MarqueeComponent