import { Card, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledSecondaryReview = styled(Card)(({ theme }) => ({
	padding: "20px",
	backgroundColor: theme.palette.background.neutral
}));

const StyledEntriesGrid = styled(Grid)(({ theme }) => ({
	display: "flex",
	justifyContent: "left",
	alignItems: "flex-start",
	marginBottom: "10px",
}));

const StyledEntriesGridItems = styled(Grid)(({ theme }) => ({
	display: "flex",
	justifyContent: "left",
	alignItems: "center",
}));

const keyStyles = {
	textTransform: "capitalize",
	marginRight: "10px",
};

const SecondaryReview = ({ formValues }) => {
	const { given_name, middle_name, family_name, date_of_birth, tax_id, tax_id_type, country_of_citizenship, country_of_birth, country_of_tax_residence, funding_source } = formValues;

	const previewArray = { given_name, middle_name, family_name, date_of_birth, tax_id, tax_id_type, country_of_citizenship, country_of_birth, country_of_tax_residence, funding_source };

	const entries = Object.entries(previewArray);

	return (
		<StyledSecondaryReview>
			{entries
				? entries.map((entry, i) => (
						<StyledEntriesGrid container key={i}>
							<StyledEntriesGridItems item xs={6} sm={4} md={3} lg={2} xl={2}>
								<Typography variant="body1" sx={keyStyles}>
									{entry[0]}
								</Typography>
							</StyledEntriesGridItems>

							<StyledEntriesGridItems item xs={6} sm={8} md={9} lg={10} xl={10}>
								<Typography variant="body1">{entry[1]}</Typography>
							</StyledEntriesGridItems>
						</StyledEntriesGrid>
				  ))
				: "Loading"}
		</StyledSecondaryReview>
	);
};

export default SecondaryReview;
