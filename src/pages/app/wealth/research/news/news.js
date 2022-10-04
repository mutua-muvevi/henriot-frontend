import { Box, ButtonGroup, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

import ResearchNewsHome from "./home/home";

import { buttonGroupItems } from "./info";
import NewsMarquee from "./marquee"

const StyledResearchNews = styled(Box)(({ theme }) => ({
	marginTop: "30px"
}));

const StyledButtonGroup = styled(ButtonGroup)(({ theme }) => ({
	marginTop: "10px"
}));

const ResearchNews = () => {
	return (
		<StyledResearchNews>
			<NewsMarquee/>
			<StyledButtonGroup variant="outlined" color="primary" aria-label="Fund filters">
				{buttonGroupItems.map((el, i) => (
					<Button key={i}>
						<Typography variant="body2" sx={{ color: "text.primary" }}>
							{el.label}
						</Typography>
					</Button>
				))}
			</StyledButtonGroup>
			<ResearchNewsHome/>
		</StyledResearchNews>
	)
}

export default ResearchNews