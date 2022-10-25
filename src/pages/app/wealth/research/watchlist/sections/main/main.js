import { useRef, useState } from "react";

import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { columns, rows } from "./info";
import { BsXLg } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import DatagridComponent from "src/components/datagrid/datagrid";
import MenuPopover from "src/components/MenuPopover";

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
	alignItems: "flex-end",
	width: "100%",
}));

const styledIcons = {
	fontSize: "16px"
}

const StyledAdvancedFilterArea = styled(Box)(({ theme }) => ({
	backgroundColor: "grey",
	width: "100%",
	padding: "10px",
	borderRadius: theme.shape.borderRadius,
	display: "flex",
	justifyContent: "space-between",
	marginTop: 10
}))

const styledChevronIcon = {
	display: "flex",
	cursor: "pointer"
}

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
					<Button
						variant="contained"
						color="primary"
						startIcon={<BsXLg style={styledIcons}/>}
					>
						Reset Filters
					</Button>
					<StyledAdvancedFilterArea>
						<Typography variant="body1" color="text.primary">
							Advanced Filter
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