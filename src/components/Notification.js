import React from 'react';
import PropTypes from "prop-types";
//mui
import { Box, Card, Grow,Alert, Typography, Button, Slide, IconButton, Snackbar } from "@mui/material";
import { styled } from "@mui/system";
//icons
import { BsInfoCircle, BsExclamationCircle, BsCheckCircle, BsXLg } from "react-icons/bs";


const NotificationComponent = ({level, text}) => {

	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
		return;
		}

		setOpen(false);
	};

	function TransitionUp(props) {
		return <Slide {...props} direction="up" />;
	}

	const action = (
		<>
			<Button color="secondary" size="small" onClick={handleClose}>
				UNDO
			</Button>
			<IconButton
				size="small"
				aria-label="close"
				color="inherit"
				onClick={handleClose}
			>
				<BsXLg sx={{ fontSize: "inherit" }}/>
			</IconButton>
		</>
	);

	return (
		<>
		    <Button color="secondary" size="small" onClick={handleClick}>
				TRIGGER NOTIFICATION
			</Button>
			<Snackbar
				open={open}
				autoHideDuration={6000}
				//onClose={handleClose}
				action={action}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				TransitionComponent={TransitionUp}
			>
				<Alert onClose={handleClose} severity={level} sx={{ width: '100%' }}>
					<Typography variant="body2">
						{text}
					</Typography>
				</Alert>
			</Snackbar>
		</>
	)
}

NotificationComponent.propTypes = {
	level: PropTypes.string,
	text: PropTypes.string.isRequired
}

export default NotificationComponent