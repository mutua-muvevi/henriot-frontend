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

const initialValues = {
	[type.name]: "",
	[title.name]: "",
	[description.name]: "",
	[releaseDate.name]: "",
	[privacy.name]: "",
}

export default initialValues