import React from 'react';

import { Box, Container, Modal, Typography } from "@mui/material";
import { styled } from "@mui/system";


const StyledFormContainerWrapper = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	border: 'none',
	boxShadow: 24,
	paddingTop: 2,
	paddingBottom: 2,
	borderRadius: theme.shape.default,
	height: "100%"
}))

const ReusableModal = ({ modal, setModal, style, arialabel, ariadescription, children }) => {
	return (
		<Modal 
			sx={style}
			open={modal}
			onClose={() => setModal(false)}
			aria-labelledby={arialabel}
			aria-describedby={ariadescription}
		>
			<StyledFormContainerWrapper>
				{ children }
			</StyledFormContainerWrapper>
		</Modal>
	)
}

export default ReusableModal