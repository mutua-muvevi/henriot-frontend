import { useState } from "react";

//mui
import { Button, Card, CardContent, Stack, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import TradingGraph from "./graph";

import { YearGraph, allTimeGraph, dayGraph, monthGraph } from "../info";

const StyledCard = styled(Card)(({ theme }) => ({
	minHeight: "50vh",
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({}));

const ChartSection = () => {
	const [selectedData, setSelectedData] = useState(dayGraph);
	const theme = useTheme();

	const handleButtonClick = (data) => {
		setSelectedData(data);
	};

	const activeButtonStyle = {
		backgroundColor: theme.palette.background.default,
		fontWeight: 600,
	};

	return (
		<StyledCard>
			<StyledCardContent>
				<Stack direction="column" spacing={3}>
					<Stack direction="row" justifyContent="space-between" alignItems="center">
						<Typography variant="h6">
							Your portfolio
						</Typography>

						<Stack direction="row" alignItems="center">
							<Button
								onClick={() => handleButtonClick(dayGraph)}
								sx={selectedData === dayGraph ? activeButtonStyle : {}}
							>
								1D
							</Button>
							<Button
								onClick={() => handleButtonClick(monthGraph)}
								sx={selectedData === monthGraph ? activeButtonStyle : {}}
							>
								1M
							</Button>
							<Button
								onClick={() => handleButtonClick(YearGraph)}
								sx={selectedData === YearGraph ? activeButtonStyle : {}}
							>
								1Y
							</Button>
							<Button
								onClick={() => handleButtonClick(allTimeGraph)}
								sx={selectedData === allTimeGraph ? activeButtonStyle : {}}
							>
								All
							</Button>
							<Button sx={activeButtonStyle}>Reset Account</Button>
						</Stack>
					</Stack>

					<Stack direction="column">
						<Typography
							variant="h5"
							color="text.primary"
							sx={{ display: "flex", marginRight: "5px", alignItems: "Center" }}
						>
							<span>
								<Typography variant="h6" color="text.secondary">
									$
								</Typography>
							</span>
							100,000.00
						</Typography>

						<Typography variant="subtitle1" color="text.secondary">
							September 19, 01:06 AM EAT
						</Typography>
					</Stack>

					<TradingGraph data={selectedData} />
				</Stack>
			</StyledCardContent>
		</StyledCard>
	);
};

export default ChartSection;
