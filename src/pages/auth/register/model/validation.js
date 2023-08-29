import * as Yup from "yup";
import { enabledAssetsSelectOptions, fundsSourceSelectOptions } from "../forms/info";

// Define validation schemas for each part of the form based on the initial values structure
const validationSchemas = [
	// Step 1: Primary Details
	// Yup.object().shape({
	Yup.object().shape({
		email_address: Yup.string().email("Please use a valid email").required("Email is required"),
		phone_number: Yup.string().required("Phone number is required"),
		street_address: Yup.string().required("Street address is required"),
		city: Yup.string().required("City is required"),
		state: Yup.string().required("State is required"),
		postal_code: Yup.string()
			.max(12, "Maximum characters for postal code is 12")
			.required("Postal code is required"),
		country: Yup.string().required("Country is required"),
	}),
	// Add validation for other fields within the Primary Details section if needed
	// }),

	// Step 2: Secondary Details
	Yup.object().shape({
		given_name: Yup.string().required("Given name is required"),
		middle_name: Yup.string(),
		family_name: Yup.string().required("Family name is required"),
		date_of_birth: Yup.date()
			.required("Date of birth is required")
			.min(new Date("1900-01-01"), "Date of birth must be after 1900-01-01")
			.max(new Date("2005-12-31"), "Date of birth must be before 2005-12-31"),
		tax_id: Yup.string().required("Tax ID is required"),
		tax_id_type: Yup.string().required("Tax ID type is required"),
		country_of_citizenship: Yup.string().required("Country of citizenship is required"),
		country_of_birth: Yup.string().required("Country of birth is required"),
		country_of_tax_residence: Yup.string().required("Country of tax residence is required"),
		funding_source: Yup.array()
			.min(1, "Funding source is required")
			.of(
				Yup.string().oneOf(
					fundsSourceSelectOptions.map((option) => option.value),
					"Invalid option"
				)
			),
	}),

	//Step 3: other details
	Yup.object().shape({
		consent: Yup.boolean(),
		enabled_assets: Yup.array()
			.min(1, "Enabled assets field is required")
			.of(
				Yup.string().oneOf(
					enabledAssetsSelectOptions.map((option) => option.value),
					"Invalid option"
				)
			),

		is_control_person: Yup.boolean(),
		is_affiliated_exchange_or_finra: Yup.boolean(),
		is_politically_exposed: Yup.boolean(),
		immediate_family_exposed: Yup.boolean(),
		context: Yup.array().of(
			Yup.object().shape({
				context_type: Yup.string(),
				company_name: Yup.string(),
				company_street_address: Yup.string(),
				company_city: Yup.string(),
				company_state: Yup.string(),
				company_country: Yup.string(),
				company_compliance_email: Yup.string().email("Please use a valid email"),
			})
		),
	}),

	//Step 4: agreements
	Yup.object().shape({
		agreements: Yup.array().of(
			Yup.object().shape({
				agreement: Yup.string().required("Agreement is required"),
				signed_at: Yup.string().required("Signed date is required"),
				ip_address: Yup.string().required("IP address is required"),
			})
		),
		trusted_given_name: Yup.string(),
		trusted_family_name: Yup.string(),
		trusted_email_address: Yup.string().email("Please use a valid email"),
	}),

	// Step 5: Documents Section
	Yup.object().shape({
		documents: Yup.mixed().test("fileList", "Please select at least one file", (value) => {
			if (!value) {
				// Handle the case when value is null or undefined
				return false;
			}

			// Convert FileList to an array
			const filesArray = Array.from(value);

			// Check if there's at least one file
			return filesArray.length > 0;
		}),
	}),

	// Step 6: Password
	Yup.object().shape({
		password: Yup.string().required("Password is required"),
		confirmpassword: Yup.string()
			.oneOf([Yup.ref("password"), null], "Passwords must match")
			.required("Confirm password is required"),
	}),
];

export default validationSchemas;
