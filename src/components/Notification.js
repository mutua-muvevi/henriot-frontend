import React from 'react';
import PropTypes from "prop-types";
//mui
import { Box, Card, Grow, Typography } from "@mui/material";
import { styled } from "@mui/system";
//icons
import { BsInfoCircle, BsExclamationCircle, BsCheckCircle } from "react-icons/bs";

const StyledNotificationComponent = styled(Box)(({ theme }) => ({
	borderRadius: theme.shape.borderRadius,
	border: "1px solid grey",
	paddingTop: 2,
	paddingBottom: 2,
	paddingLeft: 5,
	paddingRight: 5,
	display: "flex",
	justifyContent: "left",
	textAlign: "left",
	alignItems: "center"
}))

const notificationIconsStyles = {
	fontSize:"inherit",
	marginRight: 10
}

const NotificationComponent = ({level, text}) => {
	return (
		<StyledNotificationComponent>

			{
				level === "warning" ? <BsExclamationCircle style={notificationIconsStyles}/> :
				level === "info" ? <BsInfoCircle style={notificationIconsStyles}/> :
				level === "success" ? <BsCheckCircle style={notificationIconsStyles}/> : ""
			}
			<Typography variant="body2">
				{text}
			</Typography>
		</StyledNotificationComponent>
	)
}

NotificationComponent.propTypes = {
	level: PropTypes.string,
	text: PropTypes.string.isRequired
}

export default NotificationComponent