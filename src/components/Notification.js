import React from 'react';
import PropTypes from "prop-types";
//mui
import { Box, Card, Grow, Typography } from "@mui/material";
import { styled } from "@mui/system";


const Notification = ({icon, text, color}) => {
	return (
		<Card>
			{icon && icon}
			<Typography variant="subtitle2">
				{text}
			</Typography>
		</Card>
	)
}

Notification.propTypes = {
	icon: PropTypes.node,
	text: PropTypes.string.isRequired
}

export default Notification