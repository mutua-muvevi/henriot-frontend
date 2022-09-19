import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Link, Button, Drawer, Typography, Avatar, Stack } from '@mui/material';

// hooks
import useResponsive from '../../../hooks/useResponsive';
// components
import Logo from '../../../assets/logo/Black on Transparent.png';
import Scrollbar from '../../../components/Scrollbar';
import NavSection from '../../../components/NavSection';
//
import { bankingSection, tradingSection, wealthManagementSection, guideSection } from './NavConfig';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 260;

const RootStyle = styled('div')(({ theme }) => ({
	[theme.breakpoints.up('lg')]: {
		flexShrink: 0,
		width: DRAWER_WIDTH,
	},
}));

const AccountStyle = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(2, 2.5),
	borderRadius: Number(theme.shape.borderRadius) * 1.5,
}));

// ----------------------------------------------------------------------

DrawerComponent.propTypes = {
	isOpenSidebar: PropTypes.bool,
	onCloseSidebar: PropTypes.func,
};

export default function DrawerComponent({ isOpenSidebar, onCloseSidebar }) {
	const { pathname } = useLocation();

	const isDesktop = useResponsive('up', 'lg');

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
					'& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
				}}
			>

				<Box sx={{ mb: 5, mx: 2.5, mt:5 }}>
					<Link underline="none" component={RouterLink} to="#">
						<AccountStyle>
							{/*<Avatar src={account.photoURL} alt="photoURL" />*/}
							<Box sx={{ ml: 2 }}>
								<img 
									src={Logo}
									alt="Henriot Logo"
									style={{  }}
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
						sx: { width: DRAWER_WIDTH,  },
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
							bgcolor: 'background.default',
							borderRightStyle: 'dashed',
						},
					}}
				>
					{renderContent}
				</Drawer>
			)}
		</RootStyle>
	);
}