import { Box, Card, Stack, Grid, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import { BsPersonCircle } from "react-icons/bs";

const StyledFundDetailsUpperSection = styled(Grid)(({ theme }) => ({

}));

const StyledFundDetailsUpperSectionItem = styled(Grid)(({ theme }) => ({

}));

const StyledLeftCardsDetailsItem = styled(Card)(({ theme }) => ({
	minHeight: 250,
	padding: "10px",
}));

const StyledFundManagersContent = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "left",
	alignItems: "center",
	textAlign: "left"
}))

const StyledRightCardsDetailsItem = styled(Card)(({ theme }) => ({
	minHeight: 514,
	padding: "10px",
}));

const StyledPerfomanceCardItem = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center",
	backgroundColor: "#DFE3E8",
	height: 120,
	width: 200,
	borderRadius: theme.shape.borderRadius
}));

const FundDetailsUpperSection = () => {
	return (
		<StyledFundDetailsUpperSection container spacing={2}>
			<StyledFundDetailsUpperSectionItem item xs={12} sm={12} md={12} lg={5} xl={5}>

				<Stack direction="column" spacing={2}>

					<StyledLeftCardsDetailsItem>
						<Typography variant="h5" color="primary">
							Fund managers
						</Typography>
						<Container maxWidth="xl">
							<Stack direction="column" sx={{my:"10px"}} spacing={2}>
								{
									[1,2,3].map((el, i) => (
										<StyledFundManagersContent>
											<BsPersonCircle style={{fontSize: "35px", marginRight: "10px"}}/>
											<Box>
												<Typography variant="subtitle1" color="text.primary">
													Person Name A
												</Typography>
												<Typography variant="body1" color="text.primary">
													Person profession DEtails
												</Typography>
											</Box>
										</StyledFundManagersContent>
									))
								}
							</Stack>
						</Container>
					</StyledLeftCardsDetailsItem>
					
					<StyledLeftCardsDetailsItem>
						<Typography variant="h5" color="primary" gutterBottom>
							Fund managers
						</Typography>
						{
							[1,2].map((el, i) => (
								<Typography key={i} variant="body1" color="text.primary" gutterBottom>
									Lorem Ipsum Cillum labore tempor id nostrud amet Lorem cupidatat ea laboris aliquip et. Eu anim exercitation deserunt occaecat occaecat occaecat commodo enim veniam et. Lorem quis aliquip sunt eu ex. Non ex labore laboris dolor. Dolore esse minim amet ullamco ad minim do.
								</Typography>
							))
						}
					</StyledLeftCardsDetailsItem>
				</Stack>

			</StyledFundDetailsUpperSectionItem>

			<StyledFundDetailsUpperSectionItem item xs={12} sm={12} md={12} lg={7} xl={7}>
				<StyledRightCardsDetailsItem>
					<Typography variant="h5" color="primary" gutterBottom>
						perfomance
					</Typography>
					<Stack
						direction="row"
						spacing={3}
						justifyContent="left"
						alignItems="center"
						sx={{mb:"20px"}}
					>
						{
							[1,2,3].map((el, i) => (
								<StyledPerfomanceCardItem>
									<Typography variant="subtitle1" color="text.primary">
										Topic header
									</Typography>
									<Typography variant="body1" color="text.primary">
										Body section
									</Typography>
								</StyledPerfomanceCardItem>
							))
						}
					</Stack>
					<Typography variant="body2" color="text.primary">
						NAV perfomance
					</Typography>
				</StyledRightCardsDetailsItem>
			</StyledFundDetailsUpperSectionItem>
		</StyledFundDetailsUpperSection>
	)
}

export default FundDetailsUpperSection