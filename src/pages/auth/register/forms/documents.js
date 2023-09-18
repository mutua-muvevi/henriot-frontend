import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useFormikContext } from "formik";

import MultipleFileField from "src/components/forms/files/multiple";

const StyledFormContainer = styled(Box)(({ theme }) => ({}));

const DocumentsSection = ({values,activeStep}) => {
	const { setFieldValue } = useFormikContext()
	return (
		<StyledFormContainer>
			<Typography variant="h6" color="primary" sx={{ mb: "20px" }}>
				Upload Documents
			</Typography>
			
			<MultipleFileField
				name="documents"
				label="My documents"
				setFieldValue={setFieldValue} 
				values={values}
			/>
		</StyledFormContainer>
	);
};

export default DocumentsSection;
