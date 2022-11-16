import { Outlet, NavLink } from "react-router-dom";

import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { buttonGroupItems } from "./info";

const StyledDepositTermMain = styled(Box)(({ theme }) => ({

}));

const StyledButtonGroup = styled(ButtonGroup)(({ theme }) => ({
	marginBottom: 20,
}));

const navStyles = {
	textDecoration: "none",
	color: "inherit"
}

const DepositTermMain = () => {
	return (
		<StyledDepositTermMain>
			<StyledButtonGroup>
				{buttonGroupItems.map((el, i) => (
					<NavLink to={el.link} key={i} style={navStyles}>
						<Button>
							<Typography variant="body2" sx={{ color: "text.primary" }}>
								{el.label}
							</Typography>
						</Button>
					</NavLink>
				))}
			</StyledButtonGroup>
			<Outlet/>
		</StyledDepositTermMain>
	)
}

export default DepositTermMain