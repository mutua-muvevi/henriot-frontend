const initialValues = {
	email_address: "",
	phone_number: "",
	street_address: "",
	unit: "",
	city: "",
	state: "",
	postal_code: "",
	country: "",

	given_name: "",
	middle_name: "",
	family_name: "",
	date_of_birth: "",
	tax_id: "",
	tax_id_type: "",
	country_of_citizenship: "",
	country_of_birth: "",
	country_of_tax_residence: "",
	funding_source: "",

	consent: false,
	enabled_assets: "",
	is_control_person: false,
	is_affiliated_exchange_or_finra: false,
	is_politically_exposed: false,
	immediate_family_exposed: false,
	context: [
		{
			context_type: "",
			company_name: "",
			company_street_address: "",
			company_city: "",
			company_state: "",
			company_country: "",
			company_compliance_email: "",
		},
	],

	agreements: [
		{
			agreement: "",
			signed_at: "",
			ip_address: "",
			revision: "",
		},
	],
	trusted_contact: {
		trusted_given_name: "",
		trusted_family_name: "",
		trusted_email_address: "",
	},
	documents: [],

	password: "",
};

export default initialValues;
