const projectModel = {
	formId: "create-project-form",
	formField: {
		investorType: {
			name: "investorType",
			label: "Type*",
			requiredErrorMsg: "Investor type is required",
			minLength: {
				length: 5,
				message: "Minimum characters required for investor type is 4",
			},
			maxLength: {
				length: 100,
				message: "Maximum characters required for investor type is 100",
			},
		},
		email: {
			name: "email",
			label: "Email*",
			requiredErrorMsg: "Your email is required",
			minLength: {
				length: 5,
				message: "Minimum characters required for email is 5",
			},
			maxLength: {
				length: 100,
				message: "Maximum characters required for email is 100",
			},
		},
		firstname: {
			name: "firstname",
			label: "Firstname*",
			requiredErrorMsg: "Your firstname is required",
			minLength: {
				length: 5,
				message: "Minimum characters required for firstname is 5",
			},
			maxLength: {
				length: 100,
				message: "Maximum characters required for firstname is 100",
			},
		},
		lastname: {
			name: "lastname",
			label: "Lastname*",
			requiredErrorMsg: "Your lastname is required",
			minLength: {
				length: 5,
				message: "Minimum characters required for lastname is 5",
			},
			maxLength: {
				length: 100,
				message: "Maximum characters required for lastname is 100",
			},
		},
		country: {
			name: "country",
			label: "Country*",
			requiredErrorMsg: "Your country is required",
			minLength: {
				length: 5,
				message: "Minimum characters required for country is 5",
			},
			maxLength: {
				length: 100,
				message: "Maximum characters required for country is 100",
			},
		},
		phoneNumber: {
			name: "phoneNumber",
			label: "Phone Number*",
			requiredErrorMsg: "Your phoneNumber is required",
			minLength: {
				length: 5,
				message: "Minimum characters required for phoneNumber is 5",
			},
			maxLength: {
				length: 100,
				message: "Maximum characters required for phoneNumber is 100",
			},
		},
		introducerCode: {
			name: "introducerCode",
			label: "Introducer Code",
			requiredErrorMsg: "Your introducerCode is required",
			minLength: {
				length: 5,
				message: "Minimum characters required for introducerCode is 5",
			},
			maxLength: {
				length: 100,
				message: "Maximum characters required for introducerCode is 100",
			},
		},

		street: {
			name: "street",
			label: "Street*",
			requiredErrorMsg: "Your street is required",
			minLength: {
				length: 5,
				message: "Minimum characters required for street is 5",
			},
			maxLength: {
				length: 100,
				message: "Maximum characters required for street is 100",
			},
		},
		city: {
			name: "city",
			label: "City*",
			requiredErrorMsg: "Your city is required",
			minLength: {
				length: 5,
				message: "Minimum characters required for city is 5",
			},
			maxLength: {
				length: 100,
				message: "Maximum characters required for city is 100",
			},
		},
		state: {
			name: "state",
			label: "State*",
			requiredErrorMsg: "Your state is required",
			minLength: {
				length: 5,
				message: "Minimum characters required for state is 5",
			},
			maxLength: {
				length: 100,
				message: "Maximum characters required for state is 100",
			},
		},
		postcode: {
			name: "postcode",
			label: "Post Code*",
			requiredErrorMsg: "Your postcode is required",
			minLength: {
				length: 5,
				message: "Minimum characters required for postcode is 5",
			},
			maxLength: {
				length: 100,
				message: "Maximum characters required for postcode is 100",
			},
		},
		dateOfBirth: {
			name: "dateOfBirth",
			label: "Date of Birth*",
			requiredErrorMsg: "Your dateOfBirth is required",
			minLength: {
				length: 5,
				message: "Minimum characters required for dateOfBirth is 5",
			},
			maxLength: {
				length: 100,
				message: "Maximum characters required for dateOfBirth is 100",
			},
		},
		passportNumber: {
			name: "passportNumber",
			label: "Passport Number*",
			requiredErrorMsg: "Your passportNumber is required",
			minLength: {
				length: 5,
				message: "Minimum characters required for passportNumber is 5",
			},
			maxLength: {
				length: 100,
				message: "Maximum characters required for passportNumber is 100",
			},
		},
		occupation: {
			name: "occupation",
			label: "Occupation*",
			requiredErrorMsg: "Your occupation is required",
			minLength: {
				length: 5,
				message: "Minimum characters required for occupation is 5",
			},
			maxLength: {
				length: 100,
				message: "Maximum characters required for occupation is 100",
			},
		},
		annualIncome: {
			name: "annualIncome",
			label: "Annual Income*",
			requiredErrorMsg: "Your annualIncome is required",
			minLength: {
				length: 5,
				message: "Minimum characters required for annualIncome is 5",
			},
			maxLength: {
				length: 100,
				message: "Maximum characters required for annualIncome is 100",
			},
		},
		valueOfAsset: {
			name: "valueOfAsset",
			label: "Value of Asset*",
			requiredErrorMsg: "Your valueOfAsset is required",
			minLength: {
				length: 5,
				message: "Minimum characters required for valueOfAsset is 5",
			},
			maxLength: {
				length: 100,
				message: "Maximum characters required for valueOfAsset is 100",
			},
		},

		consent: {
			name: "consent",
			label: "Consent*",
			requiredErrorMsg: "Your consent is required",
		},

		issuingCountry: {
			name: "issuingCountry",
			label: "Isssuing Country*",
			requiredErrorMsg: "Your issuingCountry is required",
			minLength: {
				length: 5,
				message: "Minimum characters required for issuingCountry is 5",
			},
			maxLength: {
				length: 100,
				message: "Maximum characters required for issuingCountry is 100",
			},
		},
		identificationType: {
			name: "identificationType",
			label: "Identification Type*",
			requiredErrorMsg: "Your identification Type is required",
			minLength: {
				length: 5,
				message: "Minimum characters required for identification Type is 5",
			},
			maxLength: {
				length: 100,
				message: "Maximum characters required for identification Type is 100",
			},
		},
		phoneVerification: {
			name: "phoneVerification",
			label: "Phone Verification*",
			requiredErrorMsg: "Your phone verification is required",
			minLength: {
				length: 5,
				message: "Minimum characters required for phone verification is 5",
			},
			maxLength: {
				length: 100,
				message: "Maximum characters required for phone verification is 100",
			},
		},
		emailVerification: {
			name: "emailVerification",
			label: "Email Verification*",
			requiredErrorMsg: "Your email verification is required",
			minLength: {
				length: 5,
				message: "Minimum characters required for email verification is 5",
			},
			maxLength: {
				length: 100,
				message: "Maximum characters required for email verification is 100",
			},
		},
		password: {
			name: "password",
			label:"Password*",
			requiredErrorMsg:"Password is required",
			minLength: {
				length: 8,
				message: "Password is too short - should be 8 chars minimum."
			},
			maxLength: {
				length: 500,
				message: "Maximum characters required for password is 500"
			},
		},
		confirmpassword: {
			name: "confirmpassword",
			label:"Confirm your password*",
			requiredErrorMsg:"Please retype password ",
			passwordError: "Passwords do not match",
			minLength: {
				length: 8,
				message: "Password is too short - should be 8 chars minimum."
			},
			maxLength: {
				length: 500,
				message: "Maximum characters required for password is 500"
			},
		},
	},
};

export default projectModel;
