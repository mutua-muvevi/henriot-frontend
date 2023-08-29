import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useField } from "formik";
import dayjs from "dayjs"; // Import dayjs library
import "dayjs/locale/en"; // Import the English locale for day.js

dayjs.locale("en"); // Set the day.js locale to English

const ReusableDatePicker = ({ name, label, variant, ...otherProps }) => {
	const [field, meta, helpers] = useField(name);

	const handleChange = (value) => {
		helpers.setValue(value);
		helpers.setTouched(true);
		console.log("Value", value, "Meta", meta, "Helpers", helpers)
	};

// 	const minDate = dayjs("1900-01-01").toDate(); 
// const maxDate = dayjs("2005-12-31").toDate();

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer components={["DatePicker"]}>
				<DatePicker
					label={label}
					value={field.value}
					onChange={handleChange}
					{...otherProps}
					variant={variant ? variant : "outlined"}
					InputLabelProps={{ shrink: true }}
					error={meta.error}
					helperText={meta.error}
				/>
			</DemoContainer>
		</LocalizationProvider>
	);
};

export default ReusableDatePicker;
