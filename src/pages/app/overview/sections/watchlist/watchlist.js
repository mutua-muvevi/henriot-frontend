import React, { useState } from "react";

import { Box, Button, Card, Divider, Grid, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

import TextfieldWrapper from "src/components/forms/textfield/textfield";


const ContainerWrapper = styled(Card)(({ theme }) => ({
	borderRadius: theme.shape.borderRadius,
	minHeight: 300,
}));


const StyledInputGridContainer = styled(Grid)(({ theme }) => ({
	padding: "10px",
	
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
		<ContainerWrapper>
			<StyledInputGridContainer container spacing={2}>
				<StyledInputGridItemHeader item xs={12} sm={12} md={12} lg={12} xl={12}>
					<Typography variant="h4">
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
				</StyledInputGridItemHeader>

				<StyledInputGridItemBody item xs={12} sm={12} md={12} lg={12} xl={12}>
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
				</StyledInputGridItemBody>

				<StyledInputGridItemBody item xs={12} sm={12} md={12} lg={12} xl={12}>
					<Typography variant="body2">
						Stocks
					</Typography>
				</StyledInputGridItemBody>

				<StyledInputGridItemBody item xs={12} sm={12} md={12} lg={12} xl={12}>
					<Typography variant="body2">
						Stock items
					</Typography>
				</StyledInputGridItemBody>
			</StyledInputGridContainer>
		</ContainerWrapper>
	)
}

export default WatchlistSection