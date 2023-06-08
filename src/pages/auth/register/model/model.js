const projectModel = {
	formId: "create-project-form",
	formField: {
		type: {
			name: "type",
			label:"Type*",
			requiredErrorMsg:"Project type is required",
				minLength: {
				length: 4,
				message: "Minimum characters required for service type is 4"
			},
			maxLength: {
				length: 50,
				message: "Maximum characters required for service type is 50"
			},
		},
		title: {
			name: "title",
			label:"Title*",
			requiredErrorMsg:"Project title is required",
				minLength: {
				length: 5,
				message: "Minimum characters required for service title is 5"
			},
			maxLength: {
				length: 50,
				message: "Maximum characters required for service title is 50"
			},
		},
		description: {
			name: "description",
			label:"description*",
			minLength: {
				length: 20,
				message: "Minimum characters required for service description is 20"
			},
			maxLength: {
				length: 1000,
				message: "Maximum characters required for service description is 500"
			},
			requiredErrorMsg:"description is required",
		},
		releaseDate: {
			name: "releaseDate",
			label:"Release date*",
			requiredErrorMsg:"Release date is required",
			minLength: {
				length: 6,
				message: "Minimum characters required for the price is 0"
			},
			maxLength: {
				length: 24,
				message: "Maxmimum amount required is up to 100 billion"
			},
		},
		privacy: {
			name: "privacy",
			label:"Privacy",
			minLength: {
				length: 4,
				message: "Minimum characters required for the privacy is 4"
			},
			maxLength: {
				length: 50,
				message: "Maxmimum characters required for the privacy is 50"
			},
		},
	}
}

export default projectModel