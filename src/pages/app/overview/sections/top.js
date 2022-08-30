import { Box, Card, Grid, Typography, Grow } from "@mui/material";
import { styled } from "@mui/system";

import SimpleCard from "../../../../components/card/simple";

import { topCardsInfo } from "../info";

const TopSectionWrapper = styled(Box)(({ theme }) => ({
	
}))

const StyledGridContainer = styled(Grid)(({ theme }) => ({
	
}))

const StyledGridItem = styled(Grid)(({ theme }) => ({

}))

const StyledCardWrapper= styled(Grid)(({ theme }) => ({
	height: 130,
	padding:"10px",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center"
}))

const StyledTextWrapper = styled(Box)(({ theme }) => ({
	position: "relative",
	zIndex: 1
}))

const headerFont = {
	fontSize: "30px"
}

const bodyFont = {
	fontSize: 20
}

const IconWrapper = styled(Box)(({ theme }) => ({
	position: "relative",
	zIndex: 0
}))

const TopSection = () => {
	return (
		<TopSectionWrapper>
			<StyledGridContainer container spacing={2}>
				{
					topCardsInfo &&
					topCardsInfo.map((el ,i) => (
						<StyledGridItem item key={i} xs={12} sm={12} md={4} lg={4} xl={4}>
							<SimpleCard>
								<StyledCardWrapper>
									<StyledTextWrapper>
										<Typography variant="h4" style={headerFont}>
											{el.numbers}
										</Typography>
										<Typography variant="body" sx={bodyFont}>
											{el.text}
										</Typography>
									</StyledTextWrapper>
									<IconWrapper>
										{el.icon}
									</IconWrapper>
								</StyledCardWrapper>
							</SimpleCard>
						</StyledGridItem>
					))
				}
			</StyledGridContainer>
		</TopSectionWrapper>
	)
}

export default TopSection