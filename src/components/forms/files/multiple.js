import React, { useState } from "react";
import { Button, Typography, Box, Grid, IconButton, Card, CardHeader, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import { useField } from "formik";
import Iconify from "src/components/iconify/iconify";

const StyledFileInputContainer = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(1),
}));

const Input = styled("input")({
	display: "none",
});

const StyledUploadButton = styled(Button)({
	cursor: "pointer",
});

const FilesGrid = styled(Grid)(({ theme }) => ({}));

const FileGridItems = styled(Grid)(({ theme }) => ({}));

const StyledCard = styled(Card)(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
}));

const FileListText = styled(Typography)({
	flex: 1,
	overflow: "hidden",
	textOverflow: "ellipsis",
	whiteSpace: "nowrap",
});

const MultipleFileField = ({ name, label, values, setFieldValue, ...otherProps }) => {
	const [meta] = useField(name);
	const [selectedFiles, setSelectedFiles] = useState([]);

	const handleFileChange = (event) => {
		const newFiles = Array.from(event.currentTarget.files);
		setSelectedFiles([...selectedFiles, ...newFiles]);
		setFieldValue(name, [...selectedFiles, ...newFiles]);
	};

	const removeFile = (index) => {
		const updatedFiles = [...selectedFiles];
		updatedFiles.splice(index, 1);
		setSelectedFiles(updatedFiles);
		setFieldValue(name, updatedFiles);
	};

	return (
		<StyledFileInputContainer>
			<Typography variant="body1">{label}</Typography>
			<label htmlFor={name}>
				<Input type="file" id={name} onChange={handleFileChange} multiple {...otherProps} />
				<StyledUploadButton component="span" variant="contained" color="primary" endIcon={<Iconify icon="line-md:upload-loop" />}>
					Choose Files
				</StyledUploadButton>
			</label>
			<FilesGrid container spacing={3}>
				{selectedFiles.map((file, index) => (
					<FileGridItems item xs={6} sm={6} md={4} lg={3} xl={3} key={index}>
						<StyledCard>
							<CardHeader
								action={
									<IconButton onClick={() => removeFile(index)} color="error">
										<Iconify icon="heroicons-solid:x" />
									</IconButton>
								}
							/>
							<CardContent>
								<FileListText>{file.name}</FileListText>
							</CardContent>
						</StyledCard>
					</FileGridItems>
				))}
			</FilesGrid>
			{meta.touched && meta.error && (
				<Typography color="error" variant="body2">
					{meta.error}
				</Typography>
			)}
		</StyledFileInputContainer>
	);
};

export default MultipleFileField;
