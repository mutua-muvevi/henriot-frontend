import React from "react";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useField } from "formik";

const StyledFileInputContainer = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(1),
}));

const FileUploadField = ({ name, label, values, setFieldValue, ...otherProps }) => {
	const [meta] = useField(name);

	const handleFileChange = (event) => {
		const selectedFiles = event.currentTarget.files;
		setFieldValue(name, selectedFiles); 
		console.log("Selected files", selectedFiles)
		console.log("name", name)
		console.log("values", values)
		console.log("documents", values.documents)
		console.log("documents type", typeof(values.documents))
		console.log("Error", meta)
	};

	return (
		<StyledFileInputContainer>
			<Typography variant="body1">{label}</Typography>
			<input type="file" onChange={handleFileChange} multiple {...otherProps} />
			{meta.touched && meta.error && (
				<Typography color="error" variant="body2">
					{meta.error}
				</Typography>
			)}
			<Button variant="outlined" color="primary" component="label" htmlFor={name}>
				Choose Files
			</Button>
		</StyledFileInputContainer>
	);
};

export default FileUploadField;