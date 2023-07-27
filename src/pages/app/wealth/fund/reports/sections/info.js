import { IconButton, Stack } from "@mui/material";
import { BsFillFileEarmarkExcelFill, BsFillFileEarmarkTextFill, BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";
import TooltipComponent from "src/components/UI/Tooltip";

const columnWidth = 100

export const columns = [
	{
		field: "tooltip",
		headerName: "",
		minWidth: columnWidth,
		flex: 1,
		renderCell: (cellvalues) => {
			return(
				<TooltipComponent
					icon={<FaInfoCircle/>}
				/>
			)
		}
	},
	{
		field: "text",
		headerName: "",
		minWidth: columnWidth,
		type: "string",
		flex: 5
	},
	{
		field: "files",
		headerName: "",
		minWidth: columnWidth,
		flex: 1,
		renderCell: (cellvalues) => {
			return(
				<Stack spacing={1} direction="right" justifyContent="right">
					<IconButton
						color="primary"
					>
						<BsFillFileEarmarkExcelFill/>
					</IconButton>
					<IconButton
						color="primary"
					>
						<BsFillFileEarmarkPdfFill/>
					</IconButton>
					<IconButton
						color="primary"
					>
						<BsFillFileEarmarkTextFill/>
					</IconButton>
				</Stack>
			)
		}
	},
];

export const rows = [
	{ 
		id: 1,
		text: "Previous Month",
	},
	{
		id: 2,
		text: "Previous Quater",
	},
	{
		id: 3,
		text: "Previous Calendar Year",
	},
	{ 
		id: 4,
		text: "Month To Date",
	},
	{ 
		id: 5,
		text: "Year To date ",
	},
	{ 
		id: 4,
		text: "Since inception",
	},
];