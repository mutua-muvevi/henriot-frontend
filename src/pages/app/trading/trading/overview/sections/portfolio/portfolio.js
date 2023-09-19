import { Box, Card, CardActionArea, CardContent, Divider, Grid, Stack, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const items = [
	{
		key: "Buy Power",
		value: "$199,800",
	},
	{
		key: "Cash",
		value: "$00,800",
	},
	{
		key: "Daily Change",
		value: "-",
	},
	{
		key: "Daily Trade count",
		value: "0",
	},
];

const StyledCard = styled(Card)(({ theme }) => ({}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
	minHeight: 100,
}));

const BuyPowerSection = () => {
	const navigate = useNavigate();
	const theme = useTheme()

	return (
		<StyledCard>
			<CardActionArea onClick={() => navigate("/admin/trading/balances")}>
				<StyledCardContent>
					<Grid container spacing={3}>
						{items.map((el, i) => (
							<Grid item key={i} xs={12} sm={12} md={12} lg={3} xl={3}>
								<Stack direction="column" justifyContent="space-between" spacing={3}>
									<Typography variant="h6" color="text.primary">
										{el.key}
									</Typography>
									<Typography variant="subtitle1" color="text.primary" sx={{ fontWeight: 500 }}>
										{el.value}
									</Typography>
									<Box
										sx={{
											display: {
												xs: "block", // Display divider on xs screens (smaller than lg)
												lg: "none", // Hide divider on lg screens and above
											},
											borderBottom: `1px solid ${theme.palette.divider}`,
											mt: 1, // Add some margin top to the divider
										}}
									/>
								</Stack>
							</Grid>
						))}
					</Grid>
				</StyledCardContent>
			</CardActionArea>
		</StyledCard>
	);
};

export default BuyPowerSection;
