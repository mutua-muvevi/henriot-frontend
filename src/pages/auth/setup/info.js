export const setupfields = {
	contactFields : [
		{
			name: "email_address",
			label: "Email address",
			placeholder: "Email address",
			type: "email",
			required: true,
			inputprops: {}
		},
		{
			name: "phone_number",
			label: "Phone Number",
			placeholder: "Phone Number",
			type: "text",
			required: true,
			inputprops: {}
		},
		{
			name: "street_address",
			label: "Street Address",
			placeholder: "Street Address",
			type: "text",
			required: true,
			inputprops: {}
		},
		{
			name: "unit",
			label: "Unit",
			placeholder: "Unit",
			type: "text",
			required: true,
			inputprops: {}
		},
		{
			name: "postal_code",
			label: "Postal Code",
			placeholder: "Postal Code",
			type: "text",
			required: true,
			inputprops: {}
		},
		{
			name: "state",
			label: "Your State",
			placeholder: "Your State",
			type: "text",
			required: true,
			inputprops: {}
		},
		{
			name: "city",
			label: "Your City",
			placeholder: "Your City",
			type: "text",
			required: true,
			inputprops: {}
		},
		{
			name: "country",
			label: "Your Country",
			placeholder: "Your Country",
			type: "text",
			required: true,
			inputprops: {}
		},
	],
	identityFields : [
		{
			name: "given_name",
			label: "First Name",
			placeholder: "First Name",
			type: "text",
			required: true,
			inputprops: {}
		},
		{
			name: "middle_name",
			label: "Middlename",
			placeholder: "Middlename",
			type: "text",
			required: false,
			inputprops: {}
		},
		{
			name: "family_name",
			label: "Family Name",
			placeholder: "Family Name",
			type: "text",
			required: true,
			inputprops: {}
		},
		{
			name: "date_of_birth",
			label: "Date of birth",
			placeholder: "Date of birth",
			type: "text",
			required: true,
			inputprops: {}
		},
		{
			name: "tax_id",
			label: "Tax ID",
			placeholder: "Tax ID",
			type: "text",
			required: true,
			inputprops: {}
		},
		{
			name: "tax_id_type",
			label: "Tax ID Type",
			placeholder: "Tax ID Type",
			type: "text",
			required: true,
			inputprops: {}
		},
		{
			name: "country_of_citizenship",
			label: "Country of citizenship",
			placeholder: "Country of citizenship",
			type: "text",
			required: true,
			inputprops: {}
		},
		{
			name: "country_of_birth",
			label: "Country of birth",
			placeholder: "Country of birth",
			type: "text",
			required: true,
			inputprops: {}
		},
		{
			name: "country_of_tax_residence",
			label: "Country of Tax residence",
			placeholder: "Country of Tax residence",
			type: "text",
			required: true,
			inputprops: {}
		},
		{
			name: "funding_source",
			label: "Funding Source",
			placeholder: "Funding Source",
			type: "text",
			required: true,
			inputprops: {}
		},
	],
	enabledAssets: {
		name: "enabled_assets",
		label: "Enabled assets",
		placeholder: "Enabled assets",
		type: "text",
		required: true,
		inputprops: {}
	},
}


export const selectFields = {
	salutation : ["Mr.", "Mrs.", "Miss"],
	phoneType: [
		"Home",
		"Mobile",
		"Work",
		"Business",
	],

}