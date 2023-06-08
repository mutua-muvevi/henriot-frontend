import { useState } from 'react'

const PreviewServiceImage = ({style, image}) => {

	const [preview, setPreview] = useState(null);

	const reader = new FileReader()
	reader.readAsDataURL(image)
	reader.onload = () => {
		setPreview(reader.result)
	}

	return (
		<div>
			{
				preview ?
					<img src={preview} alt="preview" style={style}/>
					: "Loading"
			}
		</div>
	)
}

export default PreviewServiceImage