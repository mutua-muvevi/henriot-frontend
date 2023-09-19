import { Box, Button, Container, Grow, Grid, Typography, Stack } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { buySelectOptionsOrderType, buySelectOptionsTimeInForce } from "../../info";
import TextfieldWrapper from "src/components/forms/textfield/textfield";
import SelectField from "src/components/forms/select/select";
import { connect } from "react-redux";

const StyledWrapper = styled(Box)(({ theme }) => ({
}));

const StyledGridContainer = styled(Grid)(({ theme }) => ({
	
}))

const StyledInputGridItem = styled(Grid)(({ theme }) => ({

}))

const INITIAL_FORM_STATE = {
	symbol: "",
	order_type: "Market",
	quantity: 1,
	time_in_force: "GTC - Goods Till Cancelled"
}

const FORM_VALIDATION = Yup.object().shape({
	symbol: Yup.string().required("Please add a symbol"),
	order_type: Yup.string().required("Please add order type"),
	quantity: Yup.number().required("Please add a Quantity"),
	time_in_force: Yup.string().required("What is the time in force?"),
})

const TradeSellOverview = ({assets}) => {

	const submitHandler = (values) => {
		console.log("VALUES ARE", values)
	}

	return (
		<StyledWrapper>{console.log("Allassets are", assets)}
			<Formik
				initialValues={{
					...INITIAL_FORM_STATE
				}}
				validationSchema={ FORM_VALIDATION }
				onSubmit = { submitHandler }
			>
				<Form>
					<StyledGridContainer container spacing={3} sx={{mt: 3}}>
						<StyledInputGridItem item  xs={6}>
							<TextfieldWrapper
								name="symbol"
								label="Symbol"
								type="text"
								size="small"
								variant="standard"
								placeholder="Enter symbol here"
								required
							/>
						</StyledInputGridItem>

						<StyledInputGridItem item  xs={6}>
							<Stack direction="column">
								<Typography variant="body1">
									Market Price
								</Typography>
								<Typography variant="body1">
									[$0.00]
								</Typography>
							</Stack>
						</StyledInputGridItem>

						<StyledInputGridItem item xs={12}>
							<SelectField
								name="order_type"
								label="Order Type"
								size="small"
								required
								options={buySelectOptionsOrderType}
							/>
						</StyledInputGridItem>

						<StyledInputGridItem item  xs={6}>
							<TextfieldWrapper
								name="quantity"
								label="Quantity"
								type="number"
								size="small"
								variant="standard"
								required
							/>
						</StyledInputGridItem>

						<StyledInputGridItem item  xs={6}>
							<Stack direction="column">
								<Typography variant="body1">
									Estimated Price
								</Typography>
								<Typography variant="body1">
									[$0.00]
								</Typography>
							</Stack>
						</StyledInputGridItem>

						<StyledInputGridItem item xs={12}>
							<SelectField
								name="time_in_force"
								label="Time in Force"
								size="small"
								required
								options={buySelectOptionsTimeInForce}
							/>
						</StyledInputGridItem>

					</StyledGridContainer>
					<StyledInputGridItem item xs={12} sm={12} md={12} lg={12} xl={12} sx={{marginTop: "20px"}}>
						<Button type="button" variant="contained" color="primary" onClick={(values) => console.log(values)}>
							Review order
						</Button>
					</StyledInputGridItem>
				</Form>
			</Formik>
		</StyledWrapper>
	)
}

const mapStateToProps = ({assets}) => ({
	assets: assets.allAssets
})

export default connect(mapStateToProps)(TradeSellOverview)