import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';


import DashboardNavbar from "./topbar/topbar";
import { Container } from "@mui/material";
import AdminDrawerComponent from './drawer/admin';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 90;

const RootStyle = styled('div')({
	display: 'flex',
	minHeight: '100%',
	overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
	flexGrow: 1,
	overflow: 'auto',
	minHeight: '100%',
	paddingTop: APP_BAR_MOBILE + 24,
	paddingBottom: theme.spacing(10),
	[theme.breakpoints.up('lg')]: {
		paddingTop: APP_BAR_DESKTOP,
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2)
	}
}));

// ----------------------------------------------------------------------

const AdminLayout = () => {
	const [open, setOpen] = useState(false);

	return (
		<RootStyle>
			<DashboardNavbar isSidebarOpen={open} openSidebar={() => setOpen(true)} onCloseSidebar={() => setOpen(false)} />
			<AdminDrawerComponent isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
			<MainStyle>
				<Container maxWidth="xl">
					<Outlet />
				</Container>
			</MainStyle>
		</RootStyle>
	);
}

export default AdminLayout
