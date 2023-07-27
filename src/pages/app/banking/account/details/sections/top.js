import { Link } from "react-router-dom";

import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { FaInfoCircle, FaExclamationCircle } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import TooltipComponent from "src/components/UI/Tooltip";


const StyledAccountDetailsTop = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center"
}))

const headerStyles = {
	textTransform: "capitalize"
}

const StyledButton = styled(Button)(({ theme }) => ({

}))

const tooltipIconStyles = {
	fontSize: "16px",
	color: "red"
}
const iconStyles = {
	fontSize: "16px"
}

const StyledBalanceCardArea = styled(Box)(({ theme }) => ({
	position: "relative",
	zIndex: 3,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	width: "100%",
	marginTop: 30
}));

const StyledBalanceCard = styled(Card)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	width: 400,
	height: 100,
}));

const linkStyles = {
	textDecoration: "none",
	color: "inherit"
}

const AccountDetailsTop = () => {

	return (
		<>
			<StyledAccountDetailsTop>
				<Typography variant="h5" color="text.secondary" sx={headerStyles}>
					current account
				</Typography>

				<Stack direction="row" spacing={1}>
					<StyledButton
						variant="contained"
						color="primary"
						startIcon={<FaInfoCircle style={iconStyles}/>}
						>
						Deposit Funds
					</StyledButton>

					<Link to="/admin/banking/current-account/internal-transfer" style={linkStyles}>
						<StyledButton
							variant="contained"
							color="primary"
							startIcon={<BsFillArrowRightCircleFill style={iconStyles}/>}
						>
							Transfer Funds
						</StyledButton>
					</Link>
				</Stack>
			</StyledAccountDetailsTop>

			<StyledBalanceCardArea>
				<StyledBalanceCard>
					<Typography variant="h6" color="text.primary" sx={headerStyles}>
						current balance: $12341.32
					</Typography>
					<Typography variant="h6" color="text.primary" sx={headerStyles}>
						trade balance: $12341.32 
						<TooltipComponent
							title="Some text here when you hover"
							icon={<FaExclamationCircle style={tooltipIconStyles}/>}
						/>
					</Typography>
				</StyledBalanceCard>
			</StyledBalanceCardArea>
		</>
	)
}

export default AccountDetailsTop