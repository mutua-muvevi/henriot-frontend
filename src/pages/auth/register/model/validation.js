import * as Yup from "yup";

// Define validation schemas for each part of the form based on the initial values structure
const validationSchemas = [
	// Step 1: Primary Details
	// Yup.object().shape({
	Yup.object().shape({
		email_address: Yup.string().email("Please use a valid email").required("Email is required"),
		phone_number: Yup.string().required("Phone number is required"),
		street_address: Yup.string().required("Street address is required"),
		unit: Yup.string(),
		city: Yup.string().required("City is required"),
		state: Yup.string().required("State is required"),
		postal_code: Yup.string().required("Postal code is required"),
		country: Yup.string().required("Country is required"),
	}),
	// Add validation for other fields within the Primary Details section if needed
	// }),

	// Step 2: Secondary Details
	Yup.object().shape({
		given_name: Yup.string().required("Given name is required"),
		middle_name: Yup.string(),
		family_name: Yup.string().required("Family name is required"),
		date_of_birth: Yup.string().required("Date of birth is required"),
		tax_id: Yup.string().required("Tax ID is required"),
		tax_id_type: Yup.string().required("Tax ID type is required"),
		country_of_citizenship: Yup.string().required("Country of citizenship is required"),
		country_of_birth: Yup.string().required("Country of birth is required"),
		country_of_tax_residence: Yup.string().required("Country of tax residence is required"),
		funding_source: Yup.string().required("Funding source is required"),
	}),

	Yup.object().shape({
		consent: Yup.boolean(),
		enabled_assets: Yup.string(),
		
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

	Yup.object().shape({
		agreements: Yup.array().of(
			Yup.object().shape({
				agreement: Yup.string().required("Agreement is required"),
				signed_at: Yup.string().required("Signed date is required"),
				ip_address: Yup.string().required("IP address is required"),
				revision: Yup.string().required("Revision is required"),
			}),
		),
		trusted_given_name: Yup.string(),
		trusted_family_name: Yup.string(),
		trusted_email_address: Yup.string().email("Please use a valid email"),
		// documents: Yup.string(),
	}),
	// }),

	// // Step 3: Consent
	// Yup.object().shape({
	// 	consent: Yup.boolean().oneOf([true], "You must consent to continue"),
	// }),

	// // Step 4: Identity
	// Yup.object().shape({
	// 	issuingCountry: Yup.string().required("Issuing country is required"),
	// 	identificationType: Yup.string().required("Identification type is required"),
	// 	phoneVerification: Yup.string().required("Phone verification is required"),
	// 	emailVerification: Yup.string().required("Email verification is required"),
	// }),

	// Step 5: Password
	Yup.object().shape({
		password: Yup.string().required("Password is required"),
		confirmpassword: Yup.string()
			.oneOf([Yup.ref("password"), null], "Passwords must match")
			.required("Confirm password is required"),
	}),
];

export default validationSchemas;
