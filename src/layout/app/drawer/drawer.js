import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
// material
import { alpha, styled } from "@mui/material/styles";
import { Box, Link, Button, Drawer, Typography, Avatar, Stack } from "@mui/material";

// hooks
import useResponsive from "../../../hooks/useResponsive";
// components
import LogoBlack from "../../../assets/logo/Black on Transparent.png";
import LogoWhite from "../../../assets/logo/White on Transparent.png";
import Scrollbar from "../../../components/UI/Scrollbar";
import NavSection from "../../../components/UI/NavSection";
//
import { bankingSection, tradingSection, wealthManagementSection, guideSection } from "./NavConfig";
import { useTheme } from "@emotion/react";

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 260;

const RootStyle = styled("div")(({ theme }) => ({
	[theme.breakpoints.up("lg")]: {
		flexShrink: 0,
		width: DRAWER_WIDTH,
	},
	margin: 0,
}));

const AccountStyle = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(1.8, 2),
	borderRadius: Number(theme.shape.borderRadius) * 1.5,
}));

// ----------------------------------------------------------------------

DrawerComponent.propTypes = {
	isOpenSidebar: PropTypes.bool,
	onCloseSidebar: PropTypes.func,
};

export default function DrawerComponent({ isOpenSidebar, onCloseSidebar }) {
	const { pathname } = useLocation();
	const theme = useTheme();

	const isDesktop = useResponsive("up", "lg");

	useEffect(() => {
		if (isOpenSidebar) {
			onCloseSidebar();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	const renderContent = (
		<>
			<Scrollbar
				sx={{
					height: 1,
					"& .simplebar-content": { height: 1, display: "flex", flexDirection: "column" },
				}}
			>
				<Box sx={{ mb: 5, mx: 2.5, mt: 5, backgroundColor: theme.palette.background.default }}>
					<Link underline="none" component={RouterLink} to="#">
						<AccountStyle>
							<Box sx={{ ml: 2 }}>
								<img
									src={theme.palette.mode === "dark" ? LogoWhite : LogoBlack}
									alt="Henriot Logo"
									style={{}}
								/>
							</Box>
						</AccountStyle>
					</Link>
				</Box>

				<NavSection
					bankingSection={bankingSection}
					tradingSection={tradingSection}
					wealthManagementSection={wealthManagementSection}
					guideSection={guideSection}
					type="user"
				/>

				<Box sx={{ flexGrow: 1 }} />
			</Scrollbar>
		</>
	);

	return (
		<RootStyle>
			{!isDesktop && (
				<Drawer
					open={isOpenSidebar}
					onClose={onCloseSidebar}
					PaperProps={{
						sx: {
							width: DRAWER_WIDTH,
							bgcolor: theme.palette.mode === "light"
								? theme.palette.primary.lighter
								: theme.palette.background.paper,
						},
					}}
				>
					{renderContent}
				</Drawer>
			)}

			{isDesktop && (
				<Drawer
					open
					variant="persistent"
					PaperProps={{
						sx: {
							width: DRAWER_WIDTH,
							bgcolor: theme.palette.mode === "light"
									? theme.palette.primary.lighter
									: theme.palette.background.paper,
						},
					}}
				>
					{renderContent}
				</Drawer>
			)}
		</RootStyle>
	);
}
