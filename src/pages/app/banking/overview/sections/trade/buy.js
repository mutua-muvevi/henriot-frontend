import { Box, Button, Container, Grow, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { buyInputs, buySelectOptionsOrderType, buySelectOptionsTimeInForce } from "../../info";
import TextfieldWrapper from "src/components/forms/textfield/textfield";
import SelectField from "src/components/forms/select/select";

const StyledContainer = styled(Box)(({ Container }) => ({
	margin: "30px 20px 20px 20px"
}));

const StyledInputGridContainer = styled(Grid)(({ theme }) => ({
	
}))

const StyledInputGridItem = styled(Grid)(({ theme }) => ({

}))

const INITIAL_FORM_STATE = {
	symbol: "",
	order_type: "",
	quantity: "",
	time_in_force: ""
}

const FORM_VALIDATION = Yup.object().shape({
	symbol: Yup.string().required("Please add a symbol"),
	order_type: Yup.string().required("Please add order type"),
	quantity: Yup.number().required("Please add a Quantity"),
	time_in_force: Yup.string().required("What is the time in force?"),
})

const TradeBuyOverview = () => {

	const submitHandler = (values) => {
		console.log("VALUES ARE", values)
	}

	return (
		<StyledContainer>
			<Formik
				initialValues={{
					...INITIAL_FORM_STATE
				}}
				validationSchema={ FORM_VALIDATION }
				onSubmit = { submitHandler }
			>
				<Form>
					<StyledInputGridContainer container spacing={2}>
						{
							buyInputs.map((el, i) => (
								<StyledInputGridItem item key={i} xs={12} sm={12} md={12} lg={12} xl={12}>
									<TextfieldWrapper
										name={el.name}
										label={el.label}
										type={el.text}
										size="small"
										variant="standard"
										required
									/>
								</StyledInputGridItem>
							))
						}

						<StyledInputGridItem item xs={12} sm={12} md={12} lg={12} xl={12}>
							<SelectField
								name="order_type"
								label="Order Type"
								size="small"
								variant="standard"
								required
								options={buySelectOptionsOrderType}
							/>
						</StyledInputGridItem>

						<StyledInputGridItem item xs={12} sm={12} md={12} lg={12} xl={12}>
							<SelectField
								name="time_in_force"
								label="Time in Force"
								size="small"
								variant="standard"
								required
								options={buySelectOptionsTimeInForce}
							/>
						</StyledInputGridItem>

					</StyledInputGridContainer>
					<StyledInputGridItem item xs={12} sm={12} md={12} lg={12} xl={12} sx={{marginTop: "20px"}}>
						<Button type="button" variant="contained" color="primary" onClick={(values) => console.log(values)}>
							Review order
						</Button>
					</StyledInputGridItem>
				</Form>
			</Formik>
		</StyledContainer>
	)
}

export default TradeBuyOverview