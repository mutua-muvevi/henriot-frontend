import React from 'react'
import { Typography } from "@mui/material";

const FormSuccess = ({ title, text }) => {
	return (
		<React.Fragment>
			<Typography variant="h5" gutterBottom>
				{title}
			</Typography>
			<Typography variant="subtitle1">
				{text}
			</Typography>
		</React.Fragment>
	)
}

export default FormSuccess