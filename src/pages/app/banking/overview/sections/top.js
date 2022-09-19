import { Box, Card, Grid, Typography, Grow } from "@mui/material";
import { styled } from "@mui/system";
import MarqueeComponent from "src/components/Marquee";

const TopSectionWrapper = styled(Box)(({ theme }) => ({
	
}))

const StyledGridContainer = styled(Grid)(({ theme }) => ({
	
}))

const StyledGridItemLeft = styled(Grid)(({ theme }) => ({
	textAlign: "left",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between"
}));

const StyledGridContent = styled(Grid)(({ theme }) => ({
	display: "flex",
	justifyContent: "left",
	textAlign: "left",
	alignItems: "center"
}))

const StyledGridItemRight = styled(Grid)(({ theme }) => ({
	textAlign: "right"
}))

const titleStyle = {
	fontSize: "33px !important",
	lineHeight: "39px !important",
	color: "rgba(0, 0, 0, 0.85)"
}

const subTitleStyle = {
	fontSize: "26px !important",
	lineHeight: "31px !important",
	color: "rgba(0, 0, 0, 0.85)",
	marginLeft: "5px"
}

const titleStyleTwo = {
	fontSize: "26px !important",
	lineHeight: "31px !important",
	color: "rgba(0, 0, 0, 0.85)",
}

const subTitleStyleTwo = {
	fontSize: "21px !important",
	lineHeight: "25px !important",
	color: "rgba(0, 0, 0, 0.85)",
	marginLeft: "5px"
}

const TopSection = () => {
	return (
		<TopSectionWrapper>
			<MarqueeComponent/>
			<StyledGridContainer container spacing={2}>
				<StyledGridItemLeft item xs={12} sm={12} md={8} lg={8} xl={8}>
					<StyledGridContent>
						<Typography variant="h4" gutterBottom sx={titleStyle}>
							$94,522.00
						</Typography>
						<Typography variant="h5" gutterBottom sx={subTitleStyle}>
							Equity
						</Typography>

					</StyledGridContent>
					<StyledGridContent>
						<Typography variant="h5" gutterBottom sx={titleStyleTwo}>
							$94,522.00
						</Typography>
						<Typography variant="h6" gutterBottom sx={subTitleStyleTwo}>
							Buying power
						</Typography>
					</StyledGridContent>
				</StyledGridItemLeft>
				<StyledGridItemRight item xs={12} sm={12} md={4} lg={4} xl={4}>
					<Typography variant="h4" gutterBottom color="error">
						0.93%
					</Typography>
					<Typography variant="body2" gutterBottom>
						Today Profit/Loss
					</Typography>
				</StyledGridItemRight>
			</StyledGridContainer>
		</TopSectionWrapper>
	)
}

export default TopSection