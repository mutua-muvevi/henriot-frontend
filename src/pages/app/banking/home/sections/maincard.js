import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

import { sentenceCase } from "change-case";
import { Link } from "react-router-dom";

const StyledCard = styled(Card)(({ theme }) => ({

}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({

}));

const SingleColumnBox = styled(Box)(({ theme }) => ({
	overflowY: "scroll",
	height: 150,
	marginTop: "10px"
}));

const SingleColumnBoxItem = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	marginRight: "5px"
}));

const MultipleColumnBoxItem = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	marginRight: "5px"
}));

const linkStyles = {
	textDecoration: "none",
	color: "initial"
}

const BankingMainCard = ({ data }) => {
  return (
	<StyledCard>
		<StyledCardContent>
			<Typography variant="subtitle1" color="text.secondary">
				{sentenceCase(data.title)}
			</Typography>
			<SingleColumnBox>
				{
					data.body.singleColumn ?
					data.body.singleColumn.map((el, i) => (
						<SingleColumnBoxItem key={i}>
							<Typography variant="body2" color="text.primary" >
								{el.key}
							</Typography>
							<Typography variant="body2" color="text.primary" >
								{el.value}
							</Typography>
						</SingleColumnBoxItem>
					)) : ""
				}
				{
					data.body.multipleColumns ?
					data.body.multipleColumns.map((el, i) => (
						<MultipleColumnBoxItem key={i}>
							<Box>
								<Typography variant="body2" color="text.primary" >
									{el.title}
								</Typography>
							</Box>
						</MultipleColumnBoxItem>
					)) : ""
				}
			</SingleColumnBox>
			<Link to="/admin/banking/current-account/details" style={linkStyles}>
				<Button variant="text" color="primary">
					{sentenceCase("Details")}
				</Button>
			</Link>
		</StyledCardContent>
	</StyledCard>
  )
}

export default BankingMainCard