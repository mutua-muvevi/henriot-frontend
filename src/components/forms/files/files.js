import React from 'react';

import { Box, Fab, TextField  } from "@mui/material";
import { styled } from "@mui/system";

import { useField } from "formik";



const FilesField = ({icon, name, ...otherProps}) => {
	
	const [field, meta] = useField(name)

	const configTextField = {
		...field,
		...otherProps,
		fullWidth: true,
		variant: "outlined"
	}

	if (meta && meta.touched && meta.error){
		configTextField.error = true
		configTextField.helperText = meta.error
	}

	const handleUploadClick = event => {
		console.log("I AM CLICKED");
		const file = event.target.files[0];
		const reader = new FileReader();
		const url = reader.readAsDataURL(file);
	
		// reader.onloadend = function(e) {
		//   this.setState({
		// 	selectedFile: [reader.result]
		//   });
		// }.bind(this);
		// console.log("THE PATH IA",url); // Would see a path?
	
		// this.setState({
		//   mainState: "uploaded",
		//   selectedFile: event.target.files[0],
		//   imageUploaded: 1
		// });
	  };

	  
	return (
		<Box>
			{console.log("THE FIELD IS", field)}
			<TextField
				{...configTextField}
				onChange={handleUploadClick}
			/>
		</Box>
	)
}

export default FilesField