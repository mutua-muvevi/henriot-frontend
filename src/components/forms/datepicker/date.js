import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useField } from "formik";

const ReusableDatePicker = ({ name, label, variant, ...otherProps }) => {
	const [field, meta, helpers] = useField(name);

	const handleChange = (value) => {
		helpers.setValue(value);
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer components={["DatePicker"]}>
				<DatePicker
					label={label}
					value={field.value}
					onChange={handleChange}
					{...otherProps}
					fullWidth
					variant={variant ? variant : "outlined"}
					InputLabelProps={{
						shrink: true,
					}}
					error={meta.touched && meta.error}
					helperText={meta.touched && meta.error ? meta.error : null}
				/>
			</DemoContainer>
		</LocalizationProvider>
	);
}

export default ReusableDatePicker;