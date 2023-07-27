import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { FaInfoCircle } from "react-icons/fa";
import TooltipComponent from "src/components/UI/Tooltip";

const StyledTermDepositBorrowUnSecuredBodyLeft = styled(Stack)(({ theme }) => ({

}));

const iconStyle = {}

const StyledStackedForm = styled(Stack)(({ theme }) => (({
	width:"100%"
})))

const buttonItems = ["3 Months","6 Months","12 Months"]

const TermDepositBorrowUnSecuredBodyLeft = () => {
	return (
		<StyledTermDepositBorrowUnSecuredBodyLeft
			direction="column"
			alignItems="left"
			spacing={2}
		>
			<Typography variant="h5" color="text.primary">
				I wannt to borrow
			</Typography>

			<StyledStackedForm
				direction="row"
				justifyContent="left"
				alignItems="center"

			>
				<TextField
					size="small"
					label="Amount"
					sx={{width:"66%"}}
				/>
				<FormControl sx={{width:"33%"}}>
					<InputLabel id="demo-simple-select-label">Bitcoin</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						label="Amount"
						size="small"
					>
						<MenuItem value={10}>Bitcoin</MenuItem>
						<MenuItem value={20}>Eretherum</MenuItem>
						<MenuItem value={30}>Dodgecoin</MenuItem>
					</Select>
				</FormControl>
			</StyledStackedForm>
			
			<Box>
				<Stack
					direction="row"
					justifyContent="left"
					alignItems="center"
				>

					<Typography variant="h5" color="text.primary" sx={{mr:"5px"}}>
						Long Term
					</Typography>
					<TooltipComponent
						title="Some useful text here"
						icon={<FaInfoCircle style={iconStyle}/>}
					/>
				</Stack>
				<Typography variant="body2" color="text.secondary">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
					Maecenas accumsan tortor turpis, id placerat urna 
					ullamcorper id. Nulla turpis dui, pretium in dapibus id, 
					dapibus a orci. Quisque vel eleifend lorem. 
					Suspendisse et consequat dolor.
				</Typography>
			</Box>

			<Stack
				direction="row"
				justifyContent="left"
				spacing={2}
				alignItems="center"
			>
				{
					buttonItems.map((el, i) => (
						<Button
							key={i}
							variant="contained"
							color="primary"
							sx={{color:"white"}}
						>
							{el}
						</Button>
					))
				}
			</Stack>
		</StyledTermDepositBorrowUnSecuredBodyLeft>
	)
}

export default TermDepositBorrowUnSecuredBodyLeft