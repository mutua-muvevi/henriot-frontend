import { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';

//import DashboardSidebar from './DashboardSidebar';
import DrawerComponent from "./drawer/drawer";
import DashboardNavbar from "./topbar/topbar";
import { Container } from "@mui/material";
import { fetchMe } from 'src/redux/user/action';
import { connect } from 'react-redux';

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

const Layout = ({ token, getMe }) => {
	const [open, setOpen] = useState(false);

	getMe(token)
	if(!token) return <Navigate to="/login"/>

	return (
		<RootStyle>
			<DashboardNavbar isSidebarOpen={open} openSidebar={() => setOpen(true)} onCloseSidebar={() => setOpen(false)} />
			<DrawerComponent isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
			<MainStyle>
				<Container maxWidth="xl">
					<Outlet />
				</Container>
			</MainStyle>
		</RootStyle>
	);
}

const mapStateToProps = ({ auth }) => ({
	token: auth.token ? auth.token : null
})

const mapDispatchToProps = (dispatch) => ({
	getMe: (token) => dispatch(fetchMe(token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
