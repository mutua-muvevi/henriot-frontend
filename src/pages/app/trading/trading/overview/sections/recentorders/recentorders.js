import { Box, Button, Card, CardContent, Divider, Menu, MenuItem, Stack, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const assetClass = ["All", "US Equity", "Crypto"];

const side = ["All", "Long", "Short"];

const StyledCard = styled(Card)(({ theme }) => ({
	borderRadius: theme.shape.borderRadius,
	minHeight: 250,
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({}));

const RecentOrders = () => {
	const [assetClassMenu, setAssetClassMenu] = useState(null);
	const [sideMenu, setSideMenu] = useState(null);

	const theme = useTheme();
	const navigate = useNavigate();

	const openAssetClassMenu = Boolean(assetClassMenu);
	const openSideMenu = Boolean(sideMenu);

	const handleClickAssetMenu = (event) => {
		setAssetClassMenu(event.currentTarget);
	};

	const handleClickSideMenu = (event) => {
		setSideMenu(event.currentTarget);
	};

	const handleCloseAssetMenu = () => {
		setAssetClassMenu(null);
	};

	const handleCloseSideMenu = () => {
		setSideMenu(null);
	};
	return (
		<StyledCard>
			<StyledCardContent>
				<Stack direction="column" spacing={3}>
					<Typography variant="h6">Recent Orders</Typography>

					<Stack direction="row" justifyContent="space-between">
						<Stack direction="row" justifyContent="left" spacing={3}>
							<Stack direction="row">
								<Button sx={{ backgroundColor: theme.palette.background.paper }} disabled>
									<Typography variant="subtitle2" color="text.secondary">
										Asset Class
									</Typography>
								</Button>

								<Button
									sx={{ backgroundColor: theme.palette.background.default }}
									onClick={handleClickAssetMenu}
								>
									<Typography variant="subtitle2" color="text.secondary">
										All
									</Typography>
								</Button>

								<Menu
									anchorEl={assetClassMenu}
									open={openAssetClassMenu}
									onClose={handleCloseAssetMenu}
									MenuListProps={{
										"aria-labelledby": "basic-button",
									}}
								>
									{assetClass.map((options, i) => (
										<MenuItem key={i} onClick={handleCloseAssetMenu}>
											{options}
										</MenuItem>
									))}
								</Menu>
							</Stack>

							<Stack direction="row">
								<Button sx={{ backgroundColor: theme.palette.background.paper }} disabled>
									<Typography variant="subtitle2" color="text.secondary">
										Side
									</Typography>
								</Button>

								<Button
									sx={{ backgroundColor: theme.palette.background.default }}
									onClick={handleClickSideMenu}
								>
									<Typography variant="subtitle2" color="text.secondary">
										All
									</Typography>
								</Button>

								<Menu
									anchorEl={sideMenu}
									open={openSideMenu}
									onClose={handleCloseSideMenu}
									MenuListProps={{
										"aria-labelledby": "basic-button",
									}}
								>
									{side.map((options, i) => (
										<MenuItem key={i} onClick={handleCloseSideMenu}>
											{options}
										</MenuItem>
									))}
								</Menu>
							</Stack>
						</Stack>

						<Button
							variant="contained"
							sx={{
								backgroundColor: theme.palette.background.default,
								color: theme.palette.text.primary,
							}}
							onClick={() => navigate("")}
						>
							View All
						</Button>
					</Stack>
				</Stack>
			</StyledCardContent>
		</StyledCard>
	);
};

export default RecentOrders;
