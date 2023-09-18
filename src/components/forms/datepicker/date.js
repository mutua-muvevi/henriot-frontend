import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { useField } from "formik";
import dayjs from "dayjs"; // Import dayjs library
import "dayjs/locale/en"; // Import the English locale for day.js

dayjs.locale("en"); // Set the day.js locale to English

const ReusableDatePicker = ({ name, label, variant, minDate, maxDate, ...otherProps }) => {
	const [field, meta, helpers] = useField(name);

	const handleChange = (value) => {
		console.log("Value before setting:", value);
		helpers.setValue(value);
		helpers.setTouched(true);
	};


	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer components={["DatePicker"]}>
				<DatePicker
					label={label}
					value={field.value}
					onChange={handleChange}
					// minDate={minDate} // Set minDate
					// maxDate={maxDate} // Set maxDate
					variant={variant ? variant : "outlined"}
					InputLabelProps={{ shrink: true }}
					error={meta.touched && Boolean(meta.error)}
					helperText={meta.touched && meta.error} 
					sx={{ width: "100%" }}
					{...otherProps}
				/>
			</DemoContainer>
		</LocalizationProvider>
	);
};

export default ReusableDatePicker;
