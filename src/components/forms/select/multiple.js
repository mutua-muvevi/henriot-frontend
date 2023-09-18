import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useField, useFormikContext } from "formik";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
		},
	},
};

export default function MultipleSelectCheckmarks({ name, size, label, options, variant, shrink, ...otherProps }) {
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

	}

	if (meta && meta.touched && meta.error) {
		configSelect.error = true;
		configSelect.helperText = meta.error;
	}

	return (
		<div>
			<FormControl {...stylesProps}>
				<InputLabel>{label}</InputLabel>
				<Select
					multiple
					value={field.value || []}
					onChange={handleChange}
					input={<OutlinedInput label={label} />}
					renderValue={(selected) =>
						selected
							.map((value) => {
								const selectedOption = options.find((option) => option.value === value);
								return selectedOption ? selectedOption.label : "";
							})
							.join(", ")
					}
					MenuProps={MenuProps}
				>
					{options.map((item) => (
						<MenuItem key={item.value} value={item.value}>
							<Checkbox checked={field.value?.indexOf(item.value) > -1} size="small" />
							<ListItemText primary={item.label} />
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}