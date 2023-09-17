import React from "react";

import { useField } from "formik";
import { Autocomplete, TextField } from "@mui/material";

const MultipleValues = ({ name, variant, defaultValue, ...otherProps }) => {
	const [field, meta] = useField(name);

	const configTextField = {
		...field,
		...otherProps,
		fullWidth: true,
		variant: variant ? variant : "outlined",
		InputLabelProps: {
			shrink: true,
		},
		defaultValue: defaultValue ? defaultValue : "",
	};

	if (meta && meta.touched && meta.error) {
		configTextField.error = true;
		configTextField.helperText = meta.error;
	}

	return (
		<div>
			<Autocomplete
				multiple
				id="tags-standard"
				renderInput={(params) => (
					<TextField {...configTextField} />
				)}
			/>
			P
		</div>
	);
};

export default MultipleValues;
