import { useRef, useState } from "react";

import { Box, Button, ButtonGroup, Card, CardContent, FormGroup, FormControlLabel, Typography, Switch, TextField } from "@mui/material";
import { styled } from "@mui/system";

import { FaChevronDown,FaPlus } from "react-icons/fa";

import { columns, rows } from "./info";
import DatagridComponent from "src/components/datagrid/datagrid";
import MenuPopover from "src/components/UI/MenuPopover";

const StyledResearchWatchlistMainCard = styled(Card)(({ theme }) => ({
	minHeight: 600,
	marginTop: -30
}));

const StyledResearchWatchlistMainCardContent = styled(CardContent)(({ theme }) => ({
	marginTop: 30
}));

const StyledTopMain = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	width: "100%",
	marginTop: "10px"
}));

const StyledButtonGroup = styled(ButtonGroup)(({ theme }) => ({

}));

const StyledButtons = styled(Button)(({ theme }) => ({
	width: "150px"
}));

const StyledAdvancedFilterArea = styled(Box)(({ theme }) => ({
	backgroundColor: "grey",
	width: "100%",
	padding: "10px",
	borderRadius: theme.shape.borderRadius,
	display: "flex",
	justifyContent: "space-between",
}))

const styledChevronIcon = {
	display: "flex",
	cursor: "pointer"
}

const StyledButtonAndRadio = styled(Box)(({ theme }) => ({
	marginBottom: "10px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
}));

const StyledDefaultButton = styled(Button)(({ theme }) => ({
	marginRight: "20px"
}));

const StyledInputTickerSection = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: "70%",
	margin: "auto"
}));

const StyledAddTickerButton = styled(Button)(({ theme }) => ({
	flex:1,
}));

const buttons = ["create", "save", "rename", "remove", "clear"];

const ResearchWatchlistMain = () => {
	const anchorRef = useRef(null);

	const [open, setOpen] = useState(null);

	const handleOpen = (event) => {
		setOpen(event.currentTarget);
	};

	const handleClose = () => {
		setOpen(null);
	};


	return (
		<StyledResearchWatchlistMainCard>
			<StyledResearchWatchlistMainCardContent>
				<StyledTopMain>
					<StyledButtonGroup variant="contained">
						{
							buttons.map((el, i) => (
								<StyledButtons key={i}>
									{el}
								</StyledButtons>
							))
						}
					</StyledButtonGroup>
					<StyledAdvancedFilterArea>
						<Typography variant="body1" color="text.primary">
							Select your watchlist
						</Typography>

						<FaChevronDown
							style={styledChevronIcon}
							onClick={handleOpen}
							ref={anchorRef}
						/>

						<MenuPopover
							open={Boolean(open)}
							anchorEl={open}
							onClose={handleClose}
							sx={{
								p: "10px",
								mt: 1.5,
								ml: 0.75,
								"& .MuiMenuItem-root": {
									typography: "body2",
									borderRadius: 1,
								},
							}}>
								Some options here
						</MenuPopover>
					</StyledAdvancedFilterArea>
				</StyledTopMain>

				<StyledButtonAndRadio>
					<StyledDefaultButton
						variant="contained"
						color="primary"
						onClick={handleOpen}
						ref={anchorRef}
						endIcon={
							<FaChevronDown
								style={{
									fontSize: "inherit",
									color: "inherit"
								}}
							/>
						}
					>
						Default
					</StyledDefaultButton>
					<FormGroup>
						<FormControlLabel
							control={
								<Switch
									defaultChecked
									size="small"
									color="primary"
								/>
							}
							label="Group by Asset Classes"
						/>
					</FormGroup>
				</StyledButtonAndRadio>

				<StyledInputTickerSection>
					<TextField
						variant="standard"
						label="Search"
						placeholder="eg AAPL"
						size="small"
						sx={{
							flex:2
						}}
					/>
					<StyledAddTickerButton
						variant="contained"
						color="primary"
						startIcon={
							<FaPlus style={{
								fontSize: "inherit",
								color: "inherit"
							}}/>
						}
					>
						Add ticker
					</StyledAddTickerButton>
				</StyledInputTickerSection>

				<DatagridComponent
					title="Current account details"
					rows={rows}
					columns={columns}
				/>
			</StyledResearchWatchlistMainCardContent>
		</StyledResearchWatchlistMainCard>
	)
}

export default ResearchWatchlistMain