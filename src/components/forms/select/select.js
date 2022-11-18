import React from 'react';
import { TextField, MenuItem } from '@mui/material';

import { useField, useFormikContext } from 'formik';

const SelectField = ({ name, options, variant, ...otherProps }) => {
	
	const { setFieldValue } = useFormikContext();
	const [field, meta] = useField(name);

	const handleChange = evt => {
		const { value } = evt.target;
		setFieldValue(name, value);
	};

	const configSelect = {
		...field,
		...otherProps,
		select: true,
		fullWidth: true,
		variant: variant ? variant : "outlined",
		onChange: handleChange,
		InputLabelProps:{
			shrink: true
		}
	};

	if (meta && meta.touched && meta.error) {
		configSelect.error = true;
		configSelect.helperText = meta.error;
	}

	return (
		<TextField {...configSelect}>
			{options.map((item, pos) => {
				return (
				<MenuItem key={pos} value={item.Name}>
					{item.Name}
					{console.log(options)}
				</MenuItem>
				)
			})}
		</TextField>
	);
};

export default SelectField;