import { Box, Card, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { FaQuestion } from "react-icons/fa"
import DatagridComponent from "src/components/datagrid/datagrid";
import TooltipComponent from "src/components/Tooltip";
import { columns, rows } from "./info";

const StyledFundsReportLeft = styled(Card)(({ theme }) => ({

}));

const StyledCardTitle = styled(Box)(({ theme }) => ({
	padding: "10px",
}));

const StyledTopStack = styled(Stack)(({ theme }) => ({

}));

const iconStyles = {

}

const StyledDatagridSection = styled(Box)(({ theme }) => ({

}));

const FundsReportLeft = () => {
	return (
		<StyledFundsReportLeft>
			<StyledCardTitle>
				<StyledTopStack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<Typography variant="h5" color="text.primary">
						Default Reports
					</Typography>
					<TooltipComponent
						icon={<FaQuestion style={iconStyles}/>}
						title="Some tooltip information here"
					/>
				</StyledTopStack>
			</StyledCardTitle>
			<StyledDatagridSection>
				<DatagridComponent
					title=""
					rows={rows}
					columns={columns}
					action={false}
					mt="0px"
				/>
			</StyledDatagridSection>
		</StyledFundsReportLeft>
	)
}

export default FundsReportLeft