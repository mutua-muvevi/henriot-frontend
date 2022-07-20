import React from 'react';

import { Box, List, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledContentBlockOne = styled(Box)(({ theme }) => ({
	textAlign: "left",
	minWidth: "40vw",
}))

const styledMainHeaders = {
	fontWeight: "700",
	fontSize: "40px",
	marginBottom: "20px",
}

const styledSubHeaders = {
	fontWeight: "700",
	fontSize: "20px",
}

const StyledList = styled(List)(({ theme }) => ({

}))

const StyledListItem = styled(ListItem)(({ theme }) => ({

}))

const StyledListItemContent = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "left",
	alignItems: "center",
	textAlign: "left",
	marginBottom: "10px"
}))

const StyledNumbering = styled(Box)(({ theme }) => ({
	padding: "5px",
	borderRadius: "50%",
	width: "25px",
	height: "25px",
	marginRight: "10px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center"
}))

const ContentBlockOne = ({ data }) => {
	return (
		<StyledContentBlockOne>
			<Typography variant="h3" sx={styledMainHeaders} gutterBottom>
				{ data.title }
			</Typography>
			<Typography variant="h5" sx={styledSubHeaders} gutterBottom>
				{ data.subtitle }
			</Typography>
			{
				data &&
				data.paragraph &&
				data.paragraph.map((el, i) => (
					<Typography variant="body1" gutterBottom key={i}>
						{ el }
					</Typography>
				))
			}
			<StyledList>
				{
					data &&
					data.list &&
					data.list.map((el, i) => (
						<StyledListItem key={i} disablePadding>
							<StyledListItemContent>
								<StyledNumbering>
									{ i + 1 }
								</StyledNumbering>
								<Typography varaint="body1">
									{ el.text }
								</Typography>
							</StyledListItemContent>
						</StyledListItem>
					))
				}
			</StyledList>
		</StyledContentBlockOne>
	)
}

export default ContentBlockOne