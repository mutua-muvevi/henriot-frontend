import React, { useState } from 'react';

import { useField, ErrorMessage } from "formik";

import { Box, IconButton, TextField } from '@mui/material';
import { styled } from "@mui/styles";

import { FaCloudUploadAlt } from "react-icons/fa";

const StyledFileInputWrapper = styled(Box)(({ theme }) => ({

}))

const FileField = ({ setFieldValue, name}) => {

	const [field, meta] = useField(name)

	const configTextField = {
		...field,
		fullWidth: true,
		variant: "outlined"
	}

	if (meta && meta.touched && meta.error){
		configTextField.error = true
		configTextField.helperText = meta.error
	}

	const handleChange = e => {
		setFieldValue(name, e.currentTarget.files[0])
		console.log(e.target.files[0])
	}

	return (
		<StyledFileInputWrapper>
			<input
				accept=".pdf, .doc, .docx, .txt, .rtf"
				type="file"
				id="reusable file upload"
				onChange={handleChange}
			/>
		</StyledFileInputWrapper>
	)
}

export default FileField