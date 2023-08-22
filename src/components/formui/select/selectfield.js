import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useField, useFormikContext } from "formik";
import { ListItemText } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
		},
	},
};

export default function ReusableSelect({ name, size, label, options, variant, shrink, ...otherProps }) {
	const { setFieldValue } = useFormikContext();
	const [field, meta] = useField(name);

	const handleChange = (evt) => {
		const { value } = evt.target;
		setFieldValue(name, Array.isArray(value) ? value : [value]);
	};

	const configSelect = {
		...field,
		...otherProps,
		select: true,
		onChange: handleChange,
	};

	const stylesProps = {
		fullWidth: true,
		variant: variant ? variant : "outlined",
		size: size ? size : "small",
		InputLabelProps: {
			shrink: shrink ? null : true,
		},
	};

	if (meta && meta.touched && meta.error) {
		configSelect.error = true;
		configSelect.helperText = meta.error;
	}

	return (
		<FormControl {...stylesProps}>
			<InputLabel>{label}</InputLabel>
			<Select value={name} label={label} onChange={handleChange}>
				{options.map((item) => (
					<MenuItem key={item.value} value={item.value}>
						{console.log("LABEL", item.label)}
						<ListItemText primary={item.label} />
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}
