import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import FileUploadField from "src/components/formui/file/multiple";
import { useFormikContext } from "formik";

const StyledFormContainer = styled(Box)(({ theme }) => ({}));

const DocumentsSection = ({values,activeStep}) => {
	const { setFieldValue } = useFormikContext()
	return (
		<StyledFormContainer>
			<Typography variant="h6" color="primary" sx={{ mb: "20px" }}>
				Upload Documents
			</Typography>
			
			<FileUploadField
				name="documents"
				label="documents"
				setFieldValue={setFieldValue} 
				values={values}
			/>
		</StyledFormContainer>
	);
};

export default DocumentsSection;
