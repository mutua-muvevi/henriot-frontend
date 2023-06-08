import model from "./model"

const {
	formField: {
		investorType,
		email,
		firstname,
		lastname,
		country,
		phoneNumber,
		introducerCode,

		street,
		city,
		state,
		postcode,
		dateOfBirth,
		passportNumber,
		occupation,
		annualIncome,
		valueOfAsset,

		consent,

		issuingCountry,
		identificationType,
		phoneVerification,
		emailVerification
	}
} = model

const initialValues = {
	[investorType.name]: "",
	[email.name]: "",
	[firstname.name]: "",
	[lastname.name]: "",
	[country.name]: "",
	[phoneNumber.name]: "",
	[introducerCode.name]: "",

	[street.name]: "",
	[city.name]: "",
	[state.name]: "",
	[postcode.name]: "",
	[dateOfBirth.name]: "",
	[passportNumber.name]: "",
	[occupation.name]: "",
	[annualIncome.name]: "",
	[valueOfAsset.name]: "",
	
	[consent.name]: "",
	
	[issuingCountry.name]: "",
	[identificationType.name]: "",
	[phoneVerification.name]: "",
	[emailVerification.name]: "",
}

export default initialValues