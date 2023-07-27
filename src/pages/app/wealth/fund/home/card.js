import { Link } from "react-router-dom";
import { sentenceCase } from "change-case";
import { Box, Button, ButtonGroup, Card, Grid, Divider, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { FaEye, FaTachometerAlt, FaInfoCircle } from "react-icons/fa";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import TooltipComponent from "src/components/UI/Tooltip";

import { buttonGroupCardItems } from "./info";

const StyledFundingHomeCard = styled(Card)(({ theme }) => ({
	height: 362,
}));

const StyledCardHeader = styled(Box)(({ theme }) => ({
	borderBottom: "1px solid grey",
	padding: "10px",
}));

const StyledCardHeaderTop = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	textAlign: "left",
}));

const iconStyles = {
	fontSize: "20px",
};

const StyledCardHeaderBottom = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	textAlign: "left",
}));

const StyledTextPercentagesHeader = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "end",
	textAlign: "left",
}));

const StyledTextIcon = styled(Box)(({ theme }) => ({
	marginLeft: "10px",
	display: "flex",
	alignItems: "center",
	textAlign: "center",
}));

const StyledCardMiddle = styled(Box)(({ theme }) => ({}));

const StyledCardMiddleUpperStack = styled(Stack)(({ theme }) => ({
	padding: "10px",
}));

const StyledButtonGroupContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center",
}));

const StyledButtonGroup = styled(ButtonGroup)(({ theme }) => ({}));

const StyledLeftRightText = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	textAlign: "left",
	padding: "10px",
	minHeight: 80,
	marginTop: "20px",
	marginBottom: "20px",
}));

const StyledLeftRightLeftText = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "start",
	textAlign: "left",
}));

const StyledLeftRightRightText = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	textAlign: "left",
}));

const StyledCardBottomGrid = styled(Grid)(({ theme }) => ({}));

const StyledCardBottomGridItems = styled(Grid)(({ theme }) => ({
	height: 50,
}));

const FundingHomeCard = () => {
	return (
		<StyledFundingHomeCard>
			<StyledCardHeader>
				<StyledCardHeaderTop>
					<Typography variant="subtitle1" color="primary">
						Henriot active equity fund
					</Typography>
					<FaEye style={iconStyles} />
				</StyledCardHeaderTop>

				<StyledCardHeaderBottom>
					<Typography variant="body1" color="success">
						NAV as at 13-september-2022
					</Typography>
					<StyledTextPercentagesHeader>
						<Typography variant="subtitle1" color="#000000">
							$10.9
						</Typography>
						<StyledTextIcon>
							<BsChevronDown style={{ marginRight: "5px" }} />
							<Typography variant="body1" color="success">
								0.67(1.9%)
							</Typography>
						</StyledTextIcon>
					</StyledTextPercentagesHeader>
				</StyledCardHeaderBottom>
			</StyledCardHeader>

			<StyledCardMiddle>
				<StyledCardMiddleUpperStack
					direction="row"
					justifyContent="space-around"
					alignItems="center"
					divider={<Divider orientation="vertical" flexItem />}
				>
					<Box>
						<Typography variant="subtitle1" color="success">
							{sentenceCase("monthly")}
						</Typography>
						<Typography variant="subtitle1" color="success">
							1.8%
						</Typography>
					</Box>
					<Box>
						<Box sx={{ display: "flex", textAlign: "right", alignItems: "end" }}>
							<Typography variant="subtitle1" color="success">
								{sentenceCase("very high")}
							</Typography>
							<TooltipComponent
								title="Some action on hover"
								icon={<FaInfoCircle style={{ fontSize: "16px" }} />}
							/>
						</Box>
						<FaTachometerAlt style={{ fontSize: "22px" }} />
					</Box>
				</StyledCardMiddleUpperStack>

				<StyledButtonGroupContainer>
					<StyledButtonGroup variant="outlined" color="primary" aria-label="Fund filters">
						{buttonGroupCardItems.map((el, i) => (
							<Button key={i}>
								<Typography variant="body2" sx={{ color: "text.primary" }}>
									{el.label}
								</Typography>
							</Button>
						))}
					</StyledButtonGroup>
				</StyledButtonGroupContainer>

				<StyledLeftRightText>
					<StyledLeftRightLeftText>
						<Typography variant="body1" color="text.primary">
							CAGR
						</Typography>
						<Typography variant="body1" color="text.primary">
							{sentenceCase("since inspection")}
						</Typography>
						<Typography variant="h5" color="success">
							18.22%
						</Typography>
					</StyledLeftRightLeftText>
					<StyledLeftRightRightText>
						<Typography variant="body1" color="text.primary">
							{sentenceCase("Lorem ipsum text placeholder")}
						</Typography>
						<Typography variant="body1" color="text.primary">
							Benchmark Return
						</Typography>
						<Typography variant="h5" color="text.primary">
							18.26
						</Typography>
					</StyledLeftRightRightText>
				</StyledLeftRightText>
			</StyledCardMiddle>

			<StyledCardBottomGrid container>
				<StyledCardBottomGridItems item xs={6}>
					<Button
						variant="outlined"
						type="button"
						sx={{
							width: "100%",
							height: "100%",
						}}
					>
						<Link
							to="/admin/wealth-management/fund/details"
							style={{
								textDecoration: "none",
								color: "inherit",
								margin: "0px",
							}}
						>
							<Typography variant="body1" color="primary">
								{sentenceCase("funds details")}
							</Typography>
						</Link>
					</Button>
				</StyledCardBottomGridItems>

				<StyledCardBottomGridItems item xs={6}>
					<Button variant="contained" sx={{ width: "100%", height: "100%" }}>
						<Typography variant="body1" color="#fff">
							{sentenceCase("invest now")}
						</Typography>
					</Button>
				</StyledCardBottomGridItems>
			</StyledCardBottomGrid>
		</StyledFundingHomeCard>
	);
};

export default FundingHomeCard;
