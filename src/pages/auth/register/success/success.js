import React from 'react'
import { Typography } from "@mui/material";

const RegisterUserSuccess = () => {
	return (
		<React.Fragment>
			<Typography variant="h5" gutterBottom>
				Project was created successfully
			</Typography>
			<Typography variant="subtitle1">
				Your order number is #2001539. We have emailed your order confirmation,
				and will send you an update when your order has shipped.
			</Typography>
		</React.Fragment>
	)
}

export default RegisterUserSuccess