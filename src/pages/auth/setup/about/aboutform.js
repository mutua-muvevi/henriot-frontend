import React from 'react';

import { Alert, AlertTitle, Box, Button, Grid, Grow, Typography } from "@mui/material";
import { styled } from "@mui/system";

import TextfieldWrapper from "../../../../components/forms/textfield/textfield";
import SelectField from "../../../../components/forms/select/select";
import { countries } from "../../../../content/countries";
import { USAstates } from "../../../../content/states";
import { setupfields } from "../info";


const StyledAboutForm = styled(Box)(({ theme }) => ({
	marginBottom: "45px"
}));

const StyledAboutFormContentGrid = styled(Grid)(({ theme }) => ({

}));

const StyledAboutFormContentGridItem = styled(Grid)(({ theme }) => ({

}));

const AboutForm = () => {
	return (
		<StyledAboutForm>
			<StyledAboutFormContentGrid container spacing={2}>
				{
					setupfields &&
					setupfields.contactFields &&
					setupfields.contactFields.map((el, i) => (
						<StyledAboutFormContentGridItem item key={i} xl={el.xl} lg={el.lg} md={el.md} sm={el.sm} xs={el.xs}>
							<TextfieldWrapper
								name={el.name}
								label={el.label}
								type={el.type}
								placeholder={el.placeholder}
								size="small"
							/>
						</StyledAboutFormContentGridItem>
					))
				}
				<StyledAboutFormContentGridItem item xl={4} lg={4} md={6} sm={12} xs={12}>
					<SelectField
						type="text"
						name="contact.state"
						label="states"
						size="small"
						options={USAstates}
						required
					/>
				</StyledAboutFormContentGridItem>
				<StyledAboutFormContentGridItem item xl={4} lg={4} md={6} sm={12} xs={12}>
					<SelectField
						type="text"
						name="contact.country"
						label="country"
						size="small"
						options={countries}
						required
					/>
				</StyledAboutFormContentGridItem>
			</StyledAboutFormContentGrid>
		</StyledAboutForm>
	)
}

export default AboutForm