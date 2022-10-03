import { Box, Button, ButtonGroup, Divider, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { sentenceCase } from "change-case";
import FundingHomeCard from "./card";

import { topLeftIcons, buttonGroupItems } from "./info";

const StyledFundsHome = styled(Box)(({ theme }) => ({}));

const StyledIconSection = styled(Stack)(({ theme }) => ({}));

const StyledTextIconContainer = styled(Button)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
}));

const StyledButtonGroup = styled(ButtonGroup)(({ theme }) => ({
	marginBottom: 20,
}));

const StyledGridContainer = styled(Grid)(({ theme }) => ({
	marginTop: 20,
	marginBottom: 20,
}));

const StyledGridItems = styled(Grid)(({ theme }) => ({}));

const StyledDisclaimerSection = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	textAlign: "left",
}));

const FundsHome = () => {
	return (
		<StyledFundsHome>
			<StyledIconSection direction="row" spacing={1} justifyContent="right" alignItems="center">
				{topLeftIcons.map((el, i) => (
					<StyledTextIconContainer key={i}>
						{el.icon}
						<Typography variant="body2" sx={{ wordWrap: "wrap" }}>
							{sentenceCase(el.label)}
						</Typography>
					</StyledTextIconContainer>
				))}
			</StyledIconSection>
			<StyledButtonGroup variant="outlined" color="primary" aria-label="Fund filters">
				{buttonGroupItems.map((el, i) => (
					<Button key={i}>
						<Typography variant="body2" sx={{ color: "text.primary" }}>
							{el.label}
						</Typography>
					</Button>
				))}
			</StyledButtonGroup>

			<Typography variant="h5" gutterBottom>
				Featured [Henriot] funds
			</Typography>
			<Divider />

			<StyledGridContainer container spacing={2}>
				{[1, 2, 3].map((el, i) => (
					<StyledGridItems key={i} item xs={12} sm={6} md={6} lg={4} xl={4}>
						<FundingHomeCard />
					</StyledGridItems>
				))}
			</StyledGridContainer>

			<StyledDisclaimerSection>
				<Typography variant="body2" color="text.secondary">
					{sentenceCase("disclaimer: past perfomance may or may not be sustained in the future")}
				</Typography>
				<Button variant="text" color="primary">
					{sentenceCase("view all portfolios")}
				</Button>
			</StyledDisclaimerSection>
		</StyledFundsHome>
	);
};

export default FundsHome;
