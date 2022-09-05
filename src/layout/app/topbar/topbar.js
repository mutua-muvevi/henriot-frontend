import PropTypes from 'prop-types';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, InputBase, Button } from '@mui/material';
// components
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
//icons
import { FaBars } from "react-icons/fa";

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 260;
const APPBAR_MOBILE = 50;
const APPBAR_DESKTOP = 60;

const RootStyle = styled(AppBar)(({ theme }) => ({
	boxShadow: 'none',
	backdropFilter: 'blur(6px)',
	WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
	backgroundColor: alpha(theme.palette.background.default, 0.7),
	[theme.breakpoints.up('lg')]: {
		width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
	},
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
	minHeight: APPBAR_MOBILE,
	[theme.breakpoints.up('lg')]: {
		minHeight: APPBAR_DESKTOP,
		padding: theme.spacing(0, 5),
	},
}));


// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
	openSidebar: PropTypes.func,
};

export default function DashboardNavbar({ openSidebar }) {
  return (
		<RootStyle position="absolute">
			<ToolbarStyle>
				<IconButton onClick={openSidebar} sx={{ mr: 1, color: 'text.primary', display: { lg: 'none' } }}>
					<FaBars/>
				</IconButton>
				<Searchbar />
				<Box sx={{ flexGrow: 1 }} />

				<Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
					<Button variant="contained" sx={{backgroundColor: "background.dark"}} >
						deposit
					</Button>
					<AccountPopover />
				</Stack>
			</ToolbarStyle>
		</RootStyle>
	);
}
