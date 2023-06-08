import * as Yup from 'yup';
//import moment from 'moment';
import model from "./model"

const {
	formField: {
		type,
		title,
		description,
		releaseDate,
		privacy
	}
} = model

const validation = [
	Yup.object().shape({
		[type.name]: Yup
			.string()
			.min(type.minLength.length, `${type.minLength.message}`)
			.max(type.maxLength.length, `${type.maxLength.message}`)
			.required(`${type.requiredErrorMsg}`),
		[title.name]: Yup
			.string()
			.min(title.minLength.length, `${title.minLength.message}`)
			.max(title.maxLength.length, `${title.maxLength.message}`)
			.required(`${title.requiredErrorMsg}`),
		[description.name]: Yup
			.string()
			.min(description.minLength.length, `${description.minLength.message}`)
			.max(description.maxLength.length, `${description.maxLength.message}`)
			.required(`${description.requiredErrorMsg}`),
		[releaseDate.name]: Yup
			.string()
			.min(releaseDate.minLength.length, `${releaseDate.minLength.message}`)
			.max(releaseDate.maxLength.length, `${releaseDate.maxLength.message}`)
			.required(`${releaseDate.requiredErrorMsg}`),
		[privacy.name]: Yup
			.string()
			.min(privacy.minLength.length, `${privacy.minLength.message}`)
			.max(privacy.maxLength.length, `${privacy.maxLength.message}`),
	}),
]

export default validation