import React from "react";
import PropTypes from "prop-types";

import { sentenceCase } from "change-case";

import { Box, IconButton, Modal, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { BsXLg } from "react-icons/bs";
import { FaExclamationTriangle } from "react-icons/fa";
import { useTheme } from "@emotion/react";

const StyledModalHeader = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	paddingTop: "10px",
	paddingBottom: "10px",
	paddingLeft: "20px",
	borderBottom: "1px solid grey",
}));

const StyledModalBody = styled(Box)(({ theme }) => ({
	padding: "20px",
	minHeight: 200,
}));

const IconStyle = {
	fontSize: "inherit",
};

const ModalComponent = ({ open, close, width, children, type }) => {

	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		bgcolor: "background.paper",
		boxShadow: 24,
		p: 0,
		width: width,
		overflow: "hidden",
		borderRadius: 2,
	};

	return (
		<Modal open={open} onClose={close} >
			<Box sx={style}>
				<StyledModalHeader>
					<IconButton onClick={close}>
						<BsXLg style={IconStyle} />
					</IconButton>
				</StyledModalHeader>

				<StyledModalBody>{children}</StyledModalBody>
			</Box>
		</Modal>
	);
};

ModalComponent.propTypes = {
	header: PropTypes.string,
	close: PropTypes.func,
	children: PropTypes.node.isRequired,
};

export default ModalComponent;
