import React from 'react';
import { useFormikContext } from 'formik';

import { Stack, Typography } from '@mui/material';
import { styled } from "@mui/system";

import PrimaryReview from "./primary";
import SecondaryReview from "./secondary";
import Agreements from "./agreements";

const StyledReviewRegistrationItems = styled(Stack)(({ theme }) => ({

}));


const ReviewRegistration = (props) => {
	const { values: formValues } = useFormikContext();
	
	return (
		<Stack direction="column" spacing={3}>
			<Typography variant="h6" color="primary" gutterBottom>
				Registration Summary
			</Typography>
			<StyledReviewRegistrationItems direction="column" spacing={3}>
				<PrimaryReview formValues={formValues}/>
				<SecondaryReview formValues={formValues}/>
				<Agreements formValues={formValues}/>
			</StyledReviewRegistrationItems>
		</Stack>
	);
}

export default ReviewRegistration