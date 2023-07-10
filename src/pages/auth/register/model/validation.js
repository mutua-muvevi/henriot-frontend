import * as Yup from 'yup';
//import moment from 'moment';
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
		emailVerification,

		password,
		confirmpassword,
	}
} = model

const validation = [
	Yup.object().shape({
		[investorType.name]: Yup
			.string()
			.min(investorType.minLength.length, `${investorType.minLength.message}`)
			.max(investorType.maxLength.length, `${investorType.maxLength.message}`)
			.required(`${investorType.requiredErrorMsg}`),
		[email.name]: Yup
			.string()
			.email("Please use a valid email")
			.min(email.minLength.length, `${email.minLength.message}`)
			.max(email.maxLength.length, `${email.maxLength.message}`)
			.required(`${email.requiredErrorMsg}`),
		[firstname.name]: Yup
			.string()
			.min(firstname.minLength.length, `${firstname.minLength.message}`)
			.max(firstname.maxLength.length, `${firstname.maxLength.message}`)
			.required(`${firstname.requiredErrorMsg}`),
		[lastname.name]: Yup
			.string()
			.min(lastname.minLength.length, `${lastname.minLength.message}`)
			.max(lastname.maxLength.length, `${lastname.maxLength.message}`)
			.required(`${lastname.requiredErrorMsg}`),
		[country.name]: Yup
			.string()
			.min(country.minLength.length, `${country.minLength.message}`)
			.max(country.maxLength.length, `${country.maxLength.message}`)
			.required(`${country.requiredErrorMsg}`),
		[phoneNumber.name]: Yup
			.string()
			.min(phoneNumber.minLength.length, `${phoneNumber.minLength.message}`)
			.max(phoneNumber.maxLength.length, `${phoneNumber.maxLength.message}`)
			.required(`${phoneNumber.requiredErrorMsg}`),
		[introducerCode.name]: Yup
			.string()
			.min(introducerCode.minLength.length, `${introducerCode.minLength.message}`)
			.max(introducerCode.maxLength.length, `${introducerCode.maxLength.message}`)
	}),

	Yup.object().shape({
		[street.name]: Yup
			.string()
			.min(street.minLength.length, `${street.minLength.message}`)
			.max(street.maxLength.length, `${street.maxLength.message}`)
			.required(`${street.requiredErrorMsg}`),
		[city.name]: Yup
			.string()
			.min(city.minLength.length, `${city.minLength.message}`)
			.max(city.maxLength.length, `${city.maxLength.message}`)
			.required(`${city.requiredErrorMsg}`),
		[state.name]: Yup
			.string()
			.min(state.minLength.length, `${state.minLength.message}`)
			.max(state.maxLength.length, `${state.maxLength.message}`)
			.required(`${state.requiredErrorMsg}`),
		[postcode.name]: Yup
			.string()
			.min(postcode.minLength.length, `${postcode.minLength.message}`)
			.max(postcode.maxLength.length, `${postcode.maxLength.message}`)
			.required(`${postcode.requiredErrorMsg}`),
		[dateOfBirth.name]: Yup
			.string()
			.min(dateOfBirth.minLength.length, `${dateOfBirth.minLength.message}`)
			.max(dateOfBirth.maxLength.length, `${dateOfBirth.maxLength.message}`)
			.required(`${dateOfBirth.requiredErrorMsg}`),
		[passportNumber.name]: Yup
			.string()
			.min(passportNumber.minLength.length, `${passportNumber.minLength.message}`)
			.max(passportNumber.maxLength.length, `${passportNumber.maxLength.message}`)
			.required(`${passportNumber.requiredErrorMsg}`),
		[occupation.name]: Yup
			.string()
			.min(occupation.minLength.length, `${occupation.minLength.message}`)
			.max(occupation.maxLength.length, `${occupation.maxLength.message}`)
			.required(`${occupation.requiredErrorMsg}`),
		[annualIncome.name]: Yup
			.string()
			.min(annualIncome.minLength.length, `${annualIncome.minLength.message}`)
			.max(annualIncome.maxLength.length, `${annualIncome.maxLength.message}`)
			.required(`${annualIncome.requiredErrorMsg}`),
		[valueOfAsset.name]: Yup
			.string()
			.min(valueOfAsset.minLength.length, `${valueOfAsset.minLength.message}`)
			.max(valueOfAsset.maxLength.length, `${valueOfAsset.maxLength.message}`)
			.required(`${valueOfAsset.requiredErrorMsg}`),
	}),

	Yup.object().shape({
		[consent.name]: Yup
			.boolean()
			.required(`${consent.requiredErrorMsg}`),
	}),

	Yup.object().shape({
		[issuingCountry.name]: Yup
			.string()
			.min(issuingCountry.minLength.length, `${issuingCountry.minLength.message}`)
			.max(issuingCountry.maxLength.length, `${issuingCountry.maxLength.message}`)
			.required(`${issuingCountry.requiredErrorMsg}`),
		[identificationType.name]: Yup
			.string()
			.min(identificationType.minLength.length, `${identificationType.minLength.message}`)
			.max(identificationType.maxLength.length, `${identificationType.maxLength.message}`)
			.required(`${identificationType.requiredErrorMsg}`),
		[phoneVerification.name]: Yup
			.string()
			.min(phoneVerification.minLength.length, `${phoneVerification.minLength.message}`)
			.max(phoneVerification.maxLength.length, `${phoneVerification.maxLength.message}`)
			.required(`${phoneVerification.requiredErrorMsg}`),
		[emailVerification.name]: Yup
			.string()
			.min(emailVerification.minLength.length, `${emailVerification.minLength.message}`)
			.max(emailVerification.maxLength.length, `${emailVerification.maxLength.message}`)
			.required(`${emailVerification.requiredErrorMsg}`),
	}),

	Yup.object().shape({
		[password.name]: Yup
			.string()
			.min(password.minLength.length, `${password.minLength.message}`)
			.max(password.maxLength.length, `${password.maxLength.message}`)
			.required(`${password.requiredErrorMsg}`),
		[confirmpassword.name]: Yup
			.string()
			.oneOf(
				[Yup.ref("password"), null],
				confirmpassword.passwordError
			)
			.required(`${confirmpassword.requiredErrorMsg}`),
	}),
]

export default validation