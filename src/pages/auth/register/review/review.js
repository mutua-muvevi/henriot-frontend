import React from 'react';
import { useFormikContext } from 'formik';

import { Box, Typography } from '@mui/material';
import { styled } from "@mui/system";

import ServicePrimaryReview from "./primary";

const StyledReviewServiceItems = styled(Box)(({ theme }) => ({

}));


const ReviewService = (props) => {
	const { values: formValues } = useFormikContext();
	
	return (
		<React.Fragment>
			<Typography variant="h6" color="primary" gutterBottom>
				Project summary
			</Typography>
			<StyledReviewServiceItems>
				<ServicePrimaryReview formValues={formValues}/>
			</StyledReviewServiceItems>
		</React.Fragment>
	);
}

export default ReviewService