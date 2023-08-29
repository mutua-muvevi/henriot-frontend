const projectModel = {
	formId: "Register-User",
	formField: {
		contact: {
			email_address: {
				name: "email",
				label: "Email*",
				requiredErrorMsg: "Your email is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for email is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for email is 100",
				},
			},
			phone_number: {
				name: "phone_number",
				label: "Phone number*",
				requiredErrorMsg: "Your phone number is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for phone number is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for phone number is 100",
				},
			},
			street_address: {
				name: "street_address",
				label: "Street Address",
				minLength: {
					length: 3,
					message: "Minimum characters required for street address is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for street address is 100",
				},
			},
			city: {
				name: "city",
				label: "City*",
				// requiredErrorMsg: "Your city is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for city is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for city is 100",
				},
			},
			state: {
				name: "state",
				label: "State",
				// requiredErrorMsg: "Your phone number is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for state is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for state is 100",
				},
			},
			postal_code: {
				name: "postal_code",
				label: "Postal Code",
				// requiredErrorMsg: "Your email is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for postal code is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for postal code is 100",
				},
			},
			country: {
				name: "country",
				label: "Country*",
				requiredErrorMsg: "Your country is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for country is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for country is 100",
				},
			},
		},


		identity: {
			given_name: {
				name: "given_name",
				label: "Given Name*",
				requiredErrorMsg: "Your given name is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for given name is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for given name is 100",
				},
			},
			middle_name: {
				name: "middle_name",
				label: "Middle Name*",
				requiredErrorMsg: "Your middle_name is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for middle_name is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for middle_name is 100",
				},
			},
			family_name: {
				name: "family_name",
				label: "Family Name",
				requiredErrorMsg: "Your family_name is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for street address is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for street address is 100",
				},
			},
			date_of_birth: {
				name: "date_of_birth",
				label: "date of birth*",
				requiredErrorMsg: "Your date_of_birth is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for date of birth is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for date of birth is 100",
				},
			},
			tax_id: {
				name: "tax_id",
				label: "Tax ID",
				requiredErrorMsg: "Your tax_id is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for tax_id is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for tax_id is 100",
				},
			},
			tax_id_type: {
				name: "tax_id_type",
				label: "State",
				requiredErrorMsg: "Your tax ID type is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for tax_id_type is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for tax_id_type is 100",
				},
			},
			country_of_citizenship: {
				name: "country_of_citizenship",
				label: "Country of Citizenship",
				requiredErrorMsg: "Your country_of_citizenship is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for country of citizenship is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for country of citizenship is 100",
				},
			},
			country_of_birth: {
				name: "country_of_birth",
				label: "Country of Birth",
				requiredErrorMsg: "Your country of birth is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for country of birth is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for country of birth is 100",
				},
			},
			country_of_tax_residence: {
				name: "country_of_tax_residence",
				label: "Country of Tax Residence",
				requiredErrorMsg: "Your country of tax residence is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for country of tax residence is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for country of tax residence is 100",
				},
			},
			funding_source: {
				name: "funding_source",
				label: "Funding source*",
				requiredErrorMsg: "Your funding source is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for funding source is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for funding source is 100",
				},
			},
		},
		

		enabled_assets: {
			name: "enabled_assets",
			label: "Enabled Assets*",
			requiredErrorMsg: "Investor enabled assets is required",
			minLength: {
				length: 3,
				message: "Minimum characters required for enabled assets is 4",
			},
			maxLength: {
				length: 100,
				message: "Maximum characters required for enabled assets is 100",
			},
		},


		disclosures: {
			is_control_person: {
				name: "is_control_person",
				label: "Are you Control Person?",
				requiredErrorMsg: "Value for control person is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for control person is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for control person is 100",
				},
			},
			is_affiliated_exchange_or_finra: {
				name: "is_affiliated_exchange_or_finra",
				label: "Are you affiliated exchange or finra?",
				requiredErrorMsg: "Your affiliated exchange or finra value is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for affiliated exchange or finra is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for affiliated exchange or finra is 100",
				},
			},
			is_politically_exposed: {
				name: "is_politically_exposed",
				label: "Are You Politically Exposed?",
				requiredErrorMsg: "Your is politically exposed is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for politically exposed is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for politically exposed is 100",
				},
			},
			immediate_family_exposed: {
				name: "immediate_family_exposed",
				label: "Is any of your family exposed?",
				requiredErrorMsg: "Your immediate family exposed is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for immediate family exposed is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for immediate family exposed is 100",
				},
			},
			context: {
				context_type: {
					name: "context_type",
					label: "Context Type",
					requiredErrorMsg: "Your context type is required",
					minLength: {
						length: 3,
						message: "Minimum characters required for context_type is 3",
					},
					maxLength: {
						length: 100,
						message: "Maximum characters required for context_type is 100",
					},
				},
				company_name: {
					name: "company_name",
					label: "Company Name",
					requiredErrorMsg: "Your tax company name is required",
					minLength: {
						length: 3,
						message: "Minimum characters required for company name is 3",
					},
					maxLength: {
						length: 100,
						message: "Maximum characters required for company name is 100",
					},
				},
				company_street_address: {
					name: "company_street_address",
					label: "Copany Street Address",
					requiredErrorMsg: "Your company street address is required",
					minLength: {
						length: 3,
						message: "Minimum characters required for company street address is 3",
					},
					maxLength: {
						length: 100,
						message: "Maximum characters required for company street address is 100",
					},
				},
				company_city: {
					name: "company_city",
					label: "Company City",
					requiredErrorMsg: "Your company city is required",
					minLength: {
						length: 3,
						message: "Minimum characters required for company city is 3",
					},
					maxLength: {
						length: 100,
						message: "Maximum characters required for company city is 100",
					},
				},
				company_state: {
					name: "company_state",
					label: "Company State",
					requiredErrorMsg: "Your country of company state is required",
					minLength: {
						length: 3,
						message: "Minimum characters required for country of company state is 3",
					},
					maxLength: {
						length: 100,
						message: "Maximum characters required for country of company state is 100",
					},
				},
				company_country: {
					name: "company_country",
					label: "Company Country",
					requiredErrorMsg: "Your company country is required",
					minLength: {
						length: 3,
						message: "Minimum characters required for company country is 3",
					},
					maxLength: {
						length: 100,
						message: "Maximum characters required for company country is 100",
					},
				},
				company_compliance_email: {
					name: "company_compliance_email",
					label: "Company Compliance Email",
					requiredErrorMsg: "Your company compliance email is required",
					minLength: {
						length: 3,
						message: "Minimum characters required for company compliance email is 3",
					},
					maxLength: {
						length: 100,
						message: "Maximum characters required for company compliance email is 100",
					},
				},
			},
		},


		agreements: {
			agreement: {
				name: "agreement",
				label: "Agreement",
				requiredErrorMsg: "Your agreement is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for agreement is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for agreement is 100",
				},
			},
			signed_at: {
				name: "signed_at",
				label: "Signed at*",
				requiredErrorMsg: "Your signed_at is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for signed_at is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for signed_at is 100",
				},
			},
			street_address: {
				name: "street_address",
				label: "Street Address",
				requiredErrorMsg: "Your street address is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for street address is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for street address is 100",
				},
			},
			ip_address: {
				name: "ip_address",
				label: "ip_address",
				requiredErrorMsg: "Your ip address is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for ip address is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for ip address is 100",
				},
			},
			revision: {
				name: "revision",
				label: "Revision",
				requiredErrorMsg: "Your revision is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for revision is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for revision is 100",
				},
			}
		},


		documents: {
			agreement: {
				name: "document_type",
				label: "Agreement",
				requiredErrorMsg: "Your document type is required",
				minLength: {
					length: 2,
					message: "Minimum characters required for document type is 2",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for document type is 100",
				},
			},
			document_sub_type: {
				name: "document_sub_type",
				label: "Document Sub Type",
				requiredErrorMsg: "Your document sub type is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for document sub type is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for document sub type is 100",
				},
			},
			content: {
				name: "content",
				label: "Content",
				requiredErrorMsg: "Your content is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for content is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for content is 100",
				},
			},
			mime_type: {
				name: "mime_type",
				label: "Mime type",
				requiredErrorMsg: "MIME type is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for ip address is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for ip address is 100",
				},
			},
		},


		trusted_contact: {
			trusted_given_name: {
				name: "trusted_given_name",
				label: "Given Name",
				requiredErrorMsg: "Your trusted given name is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for trusted given name is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for trusted given name is 100",
				},
			},
			trusted_family_name: {
				name: "trusted_family_name",
				label: "Family Name",
				requiredErrorMsg: "Your trusted family name is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for trusted family name is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for trusted family name is 100",
				},
			},
			trusted_email_address: {
				name: "trusted_email_address",
				label: "Email Address",
				requiredErrorMsg: "Your email address is required",
				minLength: {
					length: 3,
					message: "Minimum characters required for email address is 3",
				},
				maxLength: {
					length: 100,
					message: "Maximum characters required for email address is 100",
				},
			},
		},
	},
};

export default projectModel;
