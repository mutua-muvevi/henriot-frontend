import { Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import SideChart from "./sections/sidechart";
import AssetClassChart from "./sections/assetclasschart";
import PositionDataGrid from "./sections/datagrid";

import {  assetClassChartData, sideChartData } from "./info";

const StyledWrapper = styled(Stack)(({ theme }) => ({

}))

const TradingPosition = () => {



	return (
		<StyledWrapper direction="column" spacing={3}>
			<Stack direction="column">
				<Typography variant="h3">
					Your Position
				</Typography>
				<Typography variant="subtitle1" color="text.secondary">
					View and manage your 0 positions.
				</Typography>
			</Stack>

			<div>
				<Grid container>
					<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
						<AssetClassChart data={assetClassChartData}/>
					</Grid>

					<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
						<SideChart data={sideChartData}/>
					</Grid>
				</Grid>
			</div>

			

			<PositionDataGrid />
		</StyledWrapper>
	)
}

export default TradingPosition