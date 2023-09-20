import React from "react";

import { useField } from "formik";
import { FormControl, FormControlLabel, FormLabel, Stack, Switch, Typography } from "@mui/material";

const SwitchField = ({ name, label, defaultChecked, ...otherProps }) => {
	const [field, meta] = useField(name);

	const configTextField = {
		...field,
		...otherProps,
		fullWidth: true,
		InputLabelProps: {
			shrink: true,
		},
		defaultChecked: defaultChecked ? true : null,
	};

	if (meta && meta.touched && meta.error) {
		configTextField.error = true;
		configTextField.helperText = meta.error;
	}

	return (
		<>
			<Stack direction="column">
                <Typography variant="body1" color="text.secondary">
                    {label}
                </Typography>
			    <Switch {...configTextField} />
            </Stack>
		</>
	);
};

export default SwitchField;
