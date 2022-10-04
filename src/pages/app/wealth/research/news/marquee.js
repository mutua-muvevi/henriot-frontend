import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import Marquee from "react-fast-marquee";
import { marqueeItems } from "./info"

const StyledMarqueeItems = styled(Stack)(({ theme }) => ({
	marginRight: "10px",
}))

const fontStyles = {
	marginRight: "10px"
}

const NewsMarquee = () => {
	return (
		<Marquee
			gradient={false}
			pauseOnHover={true}
		>
			{
				marqueeItems ?
				marqueeItems.map((el, i) => (
					<StyledMarqueeItems key={i} direction="row" alignItems="center" >
						<Typography variant="body2" color="text.primary" sx={{fontWeight:"bold"}} style={fontStyles}>
							{el.title}
						</Typography>
						<Typography variant="body2" color="text.primary" sx={fontStyles}>
							{el.number}
						</Typography>
						<Stack direction="row" alignItems="center" sx={{color: el.color}}>
							<Typography variant="body2" color={el.color} sx={fontStyles}>
								{el.percentage}
							</Typography>
							{el.icon}
						</Stack>
					</StyledMarqueeItems>
				)): "Loading"
			}
		</Marquee>
	)
}

export default NewsMarquee