import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";

//import DashboardSidebar from './DashboardSidebar';
import DrawerComponent from "./drawer/drawer";
import DashboardNavbar from "./topbar/topbar";
import { CircularProgress, Container } from "@mui/material";
import { fetchMe } from "src/redux/user/action";
import { connect } from "react-redux";
import { fetchAssets } from "src/redux/assets/actions";
import ReusableSpinner from "src/components/UI/spinner";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 90;

const RootStyle = styled("div")({
	display: "flex",
	minHeight: "100%",
	overflow: "hidden",
});

const MainStyle = styled("div")(({ theme }) => ({
	flexGrow: 1,
	overflow: "auto",
	minHeight: "100%",
	paddingTop: APP_BAR_MOBILE + 24,
	paddingBottom: theme.spacing(10),
	[theme.breakpoints.up("lg")]: {
		paddingTop: APP_BAR_DESKTOP,
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
	},
}));

// ----------------------------------------------------------------------
const Layout = ({ token, getMe, getAssets }) => {
	const [open, setOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true); // Add isLoading state

	useEffect(() => {
		// Use the useEffect hook to fetch data when the component mounts
		if (token) {
			getMe(token)
				.then(() => {
					setIsLoading(false); // Set isLoading to false on success
				})
				.catch(() => {
					setIsLoading(false); // Set isLoading to false on error
				});
			getAssets(token);
		}
	}, [token, getMe, getAssets]);

	if (!token) return <Navigate to="/login" />;

	return (
		<RootStyle>
			{!isLoading && ( // Conditionally render DashboardNavbar when isLoading is false
				<DashboardNavbar
					isSidebarOpen={open}
					openSidebar={() => setOpen(true)}
					onCloseSidebar={() => setOpen(false)}
				/>
			)}
			<DrawerComponent isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
			<MainStyle>
				{isLoading ? (
					// Display a spinner while isLoading is true
					<ReusableSpinner />
				) : (
					// Display the content when isLoading is false
					<Container maxWidth="xl">
						<Outlet />
					</Container>
				)}
			</MainStyle>
		</RootStyle>
	);
};

const mapStateToProps = ({ auth }) => ({
	token: auth.token ? auth.token : null,
});

const mapDispatchToProps = (dispatch) => ({
	getMe: (token) => dispatch(fetchMe(token)),
	getAssets: (token) => dispatch(fetchAssets(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
