import { Card, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledProjectPrimaryReview = styled(Card)(({ theme }) => ({
	padding: "10px",
	marginBottom: "20px"
}));

const StyledEntriesGrid = styled(Grid)(({ theme }) => ({
	display: "flex",
	justifyContent: "left",
	alignItems: "flex-start",
	marginBottom: "10px"
}));

const StyledEntriesGridItems = styled(Grid)(({ theme }) => ({
	display: "flex",
	justifyContent: "left",
	alignItems: "center"
}));

const keyStyles = {
	textTransform: "capitalize",
	marginRight:"10px"
}

const ProjectPrimaryReview = ({ formValues }) => {

	const { type, title, releaseDate, description, privacy } = formValues

	const previewArray = {type, title, releaseDate, description, privacy}
	
	const entries = Object.entries(previewArray)
	
	return (
		<StyledProjectPrimaryReview>
			{
				entries ?
				entries.map((entry, i) => (
					<StyledEntriesGrid container key={i}>
						<StyledEntriesGridItems item xs={6} sm={4} md={3} lg={2} xl={2}>
							<Typography variant="body1" sx={keyStyles}>
								{entry[0]}
							</Typography>
						</StyledEntriesGridItems>
						
						<StyledEntriesGridItems item xs={6} sm={8} md={9} lg={10} xl={10}>
							<Typography variant="body1">
								{entry[1]}
							</Typography>
						</StyledEntriesGridItems>
					</StyledEntriesGrid>
				)) : "Loading"
			}
		</StyledProjectPrimaryReview>
	)
}

export default ProjectPrimaryReview