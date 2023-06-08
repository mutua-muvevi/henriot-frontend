import React from 'react';
import { TextField } from '@mui/material';
import { useField } from 'formik';

const DateTimePicker = ({ name, variant, multiline, size, shrink, ...otherProps }) => {
	const [field, meta] = useField(name);

	const configDateTimePicker = {
		...field,
		...otherProps,
		type: 'date',
		fullWidth: true,
		variant: variant ? variant : "outlined",
		size: size ? size : "small",
		InputLabelProps: {
			shrink: true
		}
	};

	if(meta && meta.touched && meta.error) {
		configDateTimePicker.error = true;
		configDateTimePicker.helperText = meta.error;
	}

	return (
		<TextField
			{...configDateTimePicker}
		/>
	);
};

export default DateTimePicker;