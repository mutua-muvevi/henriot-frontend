import React from 'react';

import { useField } from "formik";
import { TextField } from "@mui/material";

const TextfieldWrapper = ({name, variant, ...otherProps}) => {

	const [field, meta] = useField(name)

	const configTextField = {
		...field,
		...otherProps,
		fullWidth: true,
		variant: variant ? variant : "outlined",
		InputLabelProps:{
			shrink: true
		}
	}

	if (meta && meta.touched && meta.error){
		configTextField.error = true
		configTextField.helperText = meta.error
		console.log("FIELD NAME", name)
	}

	return (
		<TextField 
			{...configTextField}
		/>
	)
}

export default TextfieldWrapper