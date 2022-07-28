import React from 'react';

import { Alert, AlertTitle, Box, Button, Grid, Grow } from "@mui/material";
import { styled } from "@mui/system";

import TextfieldWrapper from "../../../components/forms/textfield/textfield";
import SelectField from "../../../components/forms/select/select";
import { countries } from "../../../content/countries";
import { setupfields } from "./info";


const StyledIdentityForm = styled(Box)(({ theme }) => ({
	
}));

const StyledIdentityFormContentGrid = styled(Grid)(({ theme }) => ({

}));

const StyledIdentityFormContentGridItem = styled(Grid)(({ theme }) => ({

}));

const IdentityForm = () => {
	return (
		<StyledIdentityForm>
			<StyledIdentityFormContentGrid container spacing={2}>
				{
					setupfields &&
					setupfields.identityFields &&
					setupfields.identityFields.map((el, i) => (
						<StyledIdentityFormContentGridItem key={i} item xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
							<TextfieldWrapper
								name={el.name}
								label={el.label}
								type={el.type}
								placeholder={el.placeholder}
								size="small"
							/>
						</StyledIdentityFormContentGridItem>
					))
				}
				<StyledIdentityFormContentGridItem item  xl={4} lg={4} md={6} sm={12} xs={12}>
					<SelectField
						type="text"
						name="identity.country_of_citizenship"
						label="Country of citizenship"
						size="small"
						options={countries}
						required
					/>
				</StyledIdentityFormContentGridItem>
				<StyledIdentityFormContentGridItem item  xl={4} lg={4} md={6} sm={12} xs={12}>
					<SelectField
						type="text"
						name="identity.country_of_birth"
						label="Country of birth"
						size="small"
						options={countries}
						required
					/>
				</StyledIdentityFormContentGridItem>
				<StyledIdentityFormContentGridItem item  xl={4} lg={4} md={6} sm={12} xs={12}>
					<SelectField
						type="text"
						name="identity.country_of_tax_residence"
						label="Country of tax residence"
						size="small"
						options={countries}
						required
					/>
				</StyledIdentityFormContentGridItem>
			</StyledIdentityFormContentGrid>
		</StyledIdentityForm>
	)
}

export default IdentityForm