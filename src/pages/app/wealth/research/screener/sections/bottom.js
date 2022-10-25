import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)(({ theme }) => ({
	marginTop: "30px"
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({

}));

const spanStyle = {
	padding: "2px",
	fontSize: "14px",
	color: "white",
	backgroundColor: "#54D62C",
	marginLeft: "10px",
	borderRadius: "3px"
}

const ResearchScreenerBottom = () => {
	return (
		<StyledCard>
			<StyledCardContent>
				<Typography variant="body2" color="text.secondary">
					Some additional information here
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Order status
					<span style={spanStyle}>
						processed
					</span>
				</Typography>
			</StyledCardContent>
		</StyledCard>
	)
}

export default ResearchScreenerBottom