import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledAuthWrapper = styled(Box)(({theme}) => ({

}))

const AuthLayout = () => {
	return (
		<StyledAuthWrapper>
			<CssBaseline/>
			<Outlet/>
		</StyledAuthWrapper>
	)
}

export default AuthLayout