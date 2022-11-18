import { NavLink, Outlet } from "react-router-dom";

import { Box, ButtonGroup, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { unsecuredBorrow } from "./info";

const StyledTermDepositBorrow = styled(Stack)(({ theme }) => ({

}));

const StyledButtonGroupSection = styled(Stack)(({ theme }) => ({
	
}))

const StyledButtonGroup = styled(ButtonGroup)(({ theme }) => ({

}));

const linkStyles ={
	color:"inherit",
	textDecoration: "none"
}

const TermDepositBorrow = () => {
	return (
		<StyledTermDepositBorrow
			direction="column"
			spacing={2}
		>
			<StyledButtonGroupSection
				direction="row"
				justifyContent="space-between"
				alignItems="center"
			>
				<StyledButtonGroup
					variant="outlined"
					color="primary"
				>
					{
						unsecuredBorrow.map((el, i) => (
							<NavLink to={el.link} key={i} style={linkStyles}>
								<Button>
									<Typography variant="caption" color="text.primary">
										{el.text}
									</Typography>
								</Button>
							</NavLink>
						))
					}
				</StyledButtonGroup>
				<Button
					variant="contained"
					color="primary"
					sx={{color:"#fff"}}
				>
					Start New Term Deposit
				</Button>
			</StyledButtonGroupSection>
			<Outlet/>
		</StyledTermDepositBorrow>
	)
}

export default TermDepositBorrow