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
	}

	return (
		<TextField 
			{...configTextField}
		/>
	)
}

export default TextfieldWrapper