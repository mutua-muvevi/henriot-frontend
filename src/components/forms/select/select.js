import React from "react";
import { TextField, MenuItem, FormControl, InputLabel, Select } from "@mui/material";

import { useField, useFormikContext } from "formik";
import Scrollbar from "src/components/UI/Scrollbar";

const SelectField = ({ name, label, height, options, variant, ...otherProps }) => {
	const ITEM_HEIGHT = height ? height : 50;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			},
		},
	};
	const { setFieldValue } = useFormikContext();
	const [field, meta] = useField(name);

	const handleChange = (evt) => {
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
		MenuProps: { MenuProps },
		InputLabelProps: {
			shrink: false,
		},
	};

	if (meta && meta.touched && meta.error) {
		configSelect.error = true;
		configSelect.helperText = meta.error;
	}

	return (
		<FormControl sx={{ width: "100%" }} size="small">
			<InputLabel>{label}</InputLabel>
			<Select
				{...configSelect}
				MenuProps={MenuProps}
			>
				{options.map((item, pos) => {
					return (
						<MenuItem key={pos} value={item.Name}>
							{item.Label ? item.Label : item.Name}
						</MenuItem>
					);
				})}
			</Select>
		</FormControl>
	);
};

export default SelectField;
