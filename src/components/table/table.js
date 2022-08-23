import React from 'react';

import { Box, Paper, Table, TableContainer, TableBody, TableHead, TableRow, Typography } from "@mui/material";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from "@mui/system";

const StyledTable = styled(Box)(({ theme }) => ({

}))

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
	marginTop: "5px",
	marginBottom: "10px",
	width: "100%"
}))

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: "#242c64",
		color: theme.palette.common.white,
		textTransform: "capitalize",
		margin: 0,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
	  backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
	  border: 0,
	},
  }));

const TableComponent = ({ data, aria }) => {

	const tableHead = Object.entries(data)
	const array = []
	
	tableHead.map((el, i) => array.push(Object.keys(el[1])))
	const tableHeadRow = array[0]


	// modifying string for the table header
	const modifyString = (string) => {
		const newstring = string.split("_")

		const stringOne = newstring[0]
		const stringTwo = newstring[1] ? newstring[1] : ""

		const modifiedString = stringOne + " " + stringTwo
		return modifiedString
	  
	}

	return (
		<StyledTable>
			<StyledTableContainer component={Paper}>
				<Table stickyHeader="true" aria-label={aria}>
					<TableHead>
						<TableRow>
							<StyledTableCell>
								<Typography>
									No.
								</Typography>
							</StyledTableCell>
							{
								tableHeadRow.map((el, i) => (
									<StyledTableCell align="right" key={i}>
										<Typography>
											{ modifyString(el) }
										</Typography>
									</StyledTableCell>
								))
							}
						</TableRow>
					</TableHead>
					<TableBody>
						{
							data.map((row, i) => (
								<StyledTableRow key={i}>
									<StyledTableCell>
										{i + 1}
									</StyledTableCell>
									{
										Object.values(row).map((cell, i) => (
											<TableCell key={i} align="right">
												{cell}
											</TableCell>
										))
									}
								</StyledTableRow>
							))
						}
					</TableBody>
				</Table>
			</StyledTableContainer>
		</StyledTable>
	)
}

export default TableComponent