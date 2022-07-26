import { FaUser } from "react-icons/fa";
import { BsFillPhoneFill } from "react-icons/bs";

const iconStyles = {
	fontSize: "50px"
}

export const setupfields = {
	contactFields : [
		{
			name: "email_address",
			label: "Email address",
			placeholder: "Email address",
			type: "email",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "phone_number",
			label: "Phone Number",
			placeholder: "Phone Number",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "street_address",
			label: "Street Address",
			placeholder: "Street Address",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "unit",
			label: "Unit",
			placeholder: "Unit",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "postal_code",
			label: "Postal Code",
			placeholder: "Postal Code",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "state",
			label: "Your State",
			placeholder: "Your State",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "city",
			label: "Your City",
			placeholder: "Your City",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "country",
			label: "Your Country",
			placeholder: "Your Country",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
	],

	identityFields : [
		{
			name: "given_name",
			label: "First Name",
			placeholder: "First Name",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "middle_name",
			label: "Middlename",
			placeholder: "Middlename",
			type: "text",
			required: false,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "family_name",
			label: "Family Name",
			placeholder: "Family Name",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "date_of_birth",
			label: "Date of birth",
			placeholder: "Date of birth",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "tax_id",
			label: "Tax ID",
			placeholder: "Tax ID",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "tax_id_type",
			label: "Tax ID Type",
			placeholder: "Tax ID Type",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "country_of_citizenship",
			label: "Country of citizenship",
			placeholder: "Country of citizenship",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "country_of_birth",
			label: "Country of birth",
			placeholder: "Country of birth",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "country_of_tax_residence",
			label: "Country of Tax residence",
			placeholder: "Country of Tax residence",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "funding_source",
			label: "Funding Source",
			placeholder: "Funding Source",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
	],

	enabledAssets: {
		name: "enabled_assets",
		label: "Enabled assets",
		placeholder: "Enabled assets",
		type: "text",
		required: true,
		inputprops: {},
		xl: 4,
		lg: 4,
		md: 6,
		sm: 12,
		xs: 12
	},

	disclosures: [
		{
			name: "is_control_person",
			label: "Is this the control person?",
			placeholder: "Control Person?",
			type: "checkbox",
			// required: true,
			inputprops: {},
			xl: 12,
			lg: 12,
			md: 12,
			sm: 12,
			xs: 12
		},
		{
			name: "is_affiliated_exchange_or_finra",
			label: "Is this an affilliate exchange or Finra?",
			placeholder: "Affilliate exchange or Finra?",
			type: "checkbox",
			// required: true,
			inputprops: {},
			xl: 12,
			lg: 12,
			md: 12,
			sm: 12,
			xs: 12
		},
		{
			name: "is_politically_exposed",
			label: "Is this person politically exposed?",
			placeholder: "Politically exposed person?",
			type: "checkbox",
			// required: true,
			inputprops: {},
			xl: 12,
			lg: 12,
			md: 12,
			sm: 12,
			xs: 12
		},
		{
			name: "immediate_family_exposed",
			label: "Is immediate family exposed?",
			placeholder: "Immediate family exposed?",
			type: "checkbox",
			// required: true,
			inputprops: {},
			xl: 12,
			lg: 12,
			md: 12,
			sm: 12,
			xs: 12
		},
	],

	disclosuresContext: [
		{
			name: "context_type",
			label: "Context Type",
			placeholder: "Context Type",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "company_name",
			label: "Company name",
			placeholder: "Company name",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "company_street_address",
			label: "Company Street Address",
			placeholder: "Company Street Address",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "company_city",
			label: "Company City",
			placeholder: "Company City",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "company_state",
			label: "Company State",
			placeholder: "Company State",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "company_country",
			label: "Company Country",
			placeholder: "Company Country",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "company_compliance_email",
			label: "Company Compliance Email",
			placeholder: "Company Compliance Email",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
	],

	agreements: [
		{
			name: "agreement",
			label: "Agreement",
			placeholder: "Agreement",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "signed_at",
			label: "Signed at",
			placeholder: "Signed at",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "ip_address",
			label: "IP Address",
			placeholder: "IP Address",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "revision",
			label: "Revision",
			placeholder: "Revision",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
	],

	documents: [
		{
			name: "document_type",
			label: "Document type",
			placeholder: "Document type",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "document_sub_type",
			label: "Document Subtype",
			placeholder: "Document Subtype",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "content",
			label: "Document content",
			placeholder: "Document content",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
		{
			name: "mime_type",
			label: "Document MIME type",
			placeholder: "Document MIME type",
			type: "text",
			required: true,
			inputprops: {},
			xl: 4,
			lg: 4,
			md: 6,
			sm: 12,
			xs: 12
		},
	],

	trustedContact: [
		{
			name: "given_name",
			label: "Firstname",
			placeholder: "Firstname",
			type: "text",
			required: true,
			inputprops: {},
			xl: 12,
			lg: 12,
			md: 12,
			sm: 12,
			xs: 12
		},
		{
			name: "middle_name",
			label: "Middlename",
			placeholder: "Middlename",
			type: "text",
			inputprops: {},
			xl: 12,
			lg: 12,
			md: 12,
			sm: 12,
			xs: 12
		},
		{
			name: "family_name",
			label: "Family name",
			placeholder: "Family name",
			type: "text",
			inputprops: {},
			xl: 12,
			lg: 12,
			md: 12,
			sm: 12,
			xs: 12
		},
	]

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

export const rightSideInformation = {
	information: {
		icon: <FaUser style={iconStyles}/>,
		title: "Why do we collect Contact Information?",
		description: `
			We are required to collect the personal information in this application to comply with 
			government anti-money laundering regulations. We understand that confidentiality and 
			security of the personal information that you share with us is important.
		`
	},
	phone: {
		icon: <BsFillPhoneFill style={iconStyles}/>,
		title: "Why do we collect Identity Information?",
		description: `
			We are required to collect the personal information in this application to comply with 
			government anti-money laundering regulations. We understand that confidentiality and 
			security of the personal information that you share with us is important.
		`		
	}
}