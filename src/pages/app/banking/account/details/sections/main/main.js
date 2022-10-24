import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { columns, rows } from "./info";
import { BsXLg } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import DatagridComponent from "src/components/datagrid/datagrid";

const StyledAccountDetailsMainCard = styled(Card)(({ theme }) => ({
	minHeight: 600,
	marginTop: -30
}));

const StyledAccountDetailsMainCardContent = styled(CardContent)(({ theme }) => ({
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

}

const AccountDetailsMain = () => {
	return (
		<StyledAccountDetailsMainCard>
			<StyledAccountDetailsMainCardContent>
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
						<FaChevronDown style={styledChevronIcon}/>
					</StyledAdvancedFilterArea>
				</StyledTopMain>
				<DatagridComponent
					title="Current account details"
					rows={rows}
					columns={columns}
				/>
			</StyledAccountDetailsMainCardContent>
		</StyledAccountDetailsMainCard>
	)
}

export default AccountDetailsMain