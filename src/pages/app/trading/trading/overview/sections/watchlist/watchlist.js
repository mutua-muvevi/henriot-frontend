import React, { useState } from "react";

import { Box, Button, Card, CardContent, Divider, Grid, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

import TextfieldWrapper from "src/components/forms/textfield/textfield";


const StyledCard = styled(Card)(({ theme }) => ({
	borderRadius: theme.shape.borderRadius,
	minHeight: 300,
}));


const StyledCardContent = styled(CardContent)(({ theme }) => ({

}))

const StyledInputGridItemHeader = styled(Grid)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "bottom",
	textAlign: "left",
}))

const StyledInputGridItemBody = styled(Grid)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	textAlign: "left",
	paddingLeft: "10px",
	paddingRight: "10px",
}))

const WatchlistSection = () => {

	const [showInput, setShowInput] = useState(false);
	const [watchlistItem, setWatchlistItem] = useState([]);

	const handleShowIput = () => {
		console.log("BEFORE",showInput)
		setShowInput(true)
		console.log("AFTER",showInput)
	}

	const handleAddtoWatchlist = () => {
		console.log("Item added")
	}

	return (
		<StyledCard>

			<StyledCardContent >
				<Stack direction="column" spacing={3}>
					<Stack direction="row" alignItems="flex-end" justifyContent="space-between">
						<Typography variant="h6">
							Watchlist
						</Typography>
						{
							showInput === true ? (
								<Button variant="contained" type="submit" onClick={handleAddtoWatchlist}>
									Add to Watchlist
								</Button>

							) : (
								<Button variant="contained" type="button" onClick={handleShowIput}>
									Edit Watchlist
								</Button>
							)
						}
					</Stack>
				</Stack>

				<TextField
					name="search"
					label="search"
					type="text"
					size="small"
					variant="standard"
					sx={{
						width: "100%"
					}}
				/>
				<Typography variant="body2">
					Stocks
				</Typography>
			</StyledCardContent>
		</StyledCard>
	)
}

export default WatchlistSection