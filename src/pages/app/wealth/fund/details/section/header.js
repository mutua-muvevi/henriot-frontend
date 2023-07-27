import { sentenceCase } from "change-case";

import { Box, Grid, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import SelectField from "src/components/forms/select/select";
import TooltipComponent from "src/components/UI/Tooltip";

const StyledFundDetailsHeader = styled(Box)(({ theme }) => ({
	borderBottom: "1px solid grey"
}));

const StyledFundDetailsHeaderGrid = styled(Grid)(({ theme }) => ({
	marginTop: 10,
	marginBottom: 10,
}));

const StyledFundDetailsHeaderGridItems = styled(Grid)(({ theme }) => ({

}));

const textGridItem = {
	display: "flex",
	flexDirection: "column"
}

const StyledTextComponent = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "end",
	textAlign: "left"
}));

const StyledTextIcon = styled(Box)(({ theme }) => ({
	marginLeft: "10px",
	display: "flex",
	alignItems: "center",
	textAlign: "center"
}));

const LeftMostComponent = () => {
	return (
		<Box
			sx={textGridItem}
		>
			<Typography variant="body1" color="text.primary">
				NAV as at 13-september-2022
			</Typography>
			<StyledTextComponent>
				<Typography variant="h5" color="#000000">
					$10.9
				</Typography>
				<StyledTextIcon>
					<BsChevronDown style={{ marginRight: "5px" }}/>
					<Typography variant="body1" color="success">
						0.67(1.9%)
					</Typography>
				</StyledTextIcon>
			</StyledTextComponent>
		</Box>
	)
};

const NextToLeftMostComponent = () => {
	return (
		<Box
			sx={textGridItem}
		>
			<Box sx={{
					display: "flex",
					alignItems: "center",
					textAlign:"center"
				}}
			>

				<Typography variant="body1" color="text.primary">
					SAGR
				</Typography>
				<TooltipComponent
					title="Fome information about this item"
					icon={<FaInfoCircle style={{fontSize: "16px"}} />}
				/>
				<Typography variant="body2" color="text.primary">
					Since Inception
				</Typography>
			</Box>
			<StyledTextComponent>
				<Typography variant="h5" color="#000000">
					$10.9
				</Typography>
			</StyledTextComponent>
		</Box>
	)
};

const StyledCategoryComponent = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "left",
	textAlign: "left"
}))

const CategoryComponent = () => {
	const selectFieldItems = [{Name: "Equity Fund"}]

	
	const INITIAL_FORM_STATE = {
		category: ""
	}

	const FORM_VALIDATION = Yup.object().shape({
		category: Yup.string()
	})

	const submitHandler = (values) => {
		console.log("VALUES ARE", values)
	}

	return (
		<StyledCategoryComponent>
			<Typography variant="body1" color="text.primary" sx={{mr:2}}>
				Category
			</Typography>
			<Formik
				initialValues={{
					...INITIAL_FORM_STATE
				}}
				validationSchema={ FORM_VALIDATION }
				onSubmit = { submitHandler }
				>
				<Form>
					<SelectField
						sx={{ width:200 }}
						name="category"
						label="Category"
						size="small"
						required
						options={selectFieldItems}
					/>
				</Form>
			</Formik>
		</StyledCategoryComponent>
	)
};

const StyledButtonComponent = styled(Button)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center",
	width: "100%",
	backgroundColor: "#65cfbb"
}))

const ButtonComponent = () => {
	return (
		<StyledButtonComponent>
			<Typography variant="h6" color="text.primary">
				{sentenceCase("invest now")}
			</Typography>
		</StyledButtonComponent>
	)
};

const stackComponentsItems = [
	<LeftMostComponent/>,
	<NextToLeftMostComponent/>,
	<CategoryComponent/>,
	<ButtonComponent/>
]

const FundDetailsHeader = () => {
  return (
	<StyledFundDetailsHeader>
		<StyledFundDetailsHeaderGrid container spacing={4}>
			{
				stackComponentsItems.map((el, i) => (
					<StyledFundDetailsHeaderGridItems item key={i} xs={12} sm={6} md={4} lg={3} xl={3}>
						{el}
					</StyledFundDetailsHeaderGridItems>
				))
			}
		</StyledFundDetailsHeaderGrid>
	</StyledFundDetailsHeader>
  )
}

export default FundDetailsHeader