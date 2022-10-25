import React from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useField } from 'formik';

const RadioField = ({
	name,
	label,
	legend,
	radioItems,
	defaultValue,
	...otherProps
}) => {
	const [field, meta] = useField(name);

	const configFormControl = {}

	const configCheckbox = {
		...field
	};


	if(meta && meta.touched && meta.error) {
		configFormControl.error = true;
		configFormControl.helperText = meta.error;
	}

	return (
		<FormControl>
			<FormLabel component="legend">{label}</FormLabel>
			<RadioGroup name={name} {...configCheckbox} row defaultValue={defaultValue}>
				{
					radioItems.map((el, i) => (
						<React.Fragment key={i}>
							{el}
						</React.Fragment>
					))
				}
			</RadioGroup>
		</FormControl>
	);
};

export default RadioField;