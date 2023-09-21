import PropTypes from "prop-types";
// material
import { alpha, styled } from "@mui/material/styles";
import { Box, Stack, AppBar, Toolbar, IconButton, Button } from "@mui/material";
// components
import Searchbar from "./Searchbar";
import AccountPopover from "./AccountPopover";
//icons
import { FaBars } from "react-icons/fa";

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 260;
const APPBAR_MOBILE = 50;
const APPBAR_DESKTOP = 60;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
	minHeight: APPBAR_MOBILE,
	[theme.breakpoints.up("lg")]: {
		minHeight: APPBAR_DESKTOP,
		padding: theme.spacing(0, 5),
	},
}));

const DashboardNavbar = ({ openSidebar }) => {
	const RootStyle = styled(AppBar)(({ theme }) => ({
		boxShadow: "none",
		backdropFilter: "blur(6px)",
		WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
		backgroundColor:
			theme.palette.mode === "dark"
				? alpha(theme.palette.background.paper, 0.7)
				: alpha(theme.palette.primary.light, 0.7),
		[theme.breakpoints.up("lg")]: {
			width: `calc(100% - ${DRAWER_WIDTH}px)`,
		},
	}));

	return (
		<RootStyle position="fixed">
			<ToolbarStyle>
				<IconButton onClick={openSidebar} sx={{ mr: 1, color: "text.primary", display: { lg: "none" } }}>
					<FaBars />
				</IconButton>
				<Searchbar />
				<Box sx={{ flexGrow: 1 }} />

				<Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
					<Button variant="contained">deposit</Button>
					<AccountPopover />
				</Stack>
			</ToolbarStyle>
		</RootStyle>
	);
};

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
	openSidebar: PropTypes.func,
};

export default DashboardNavbar;
