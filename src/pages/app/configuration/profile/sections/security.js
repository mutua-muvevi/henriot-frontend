import { Button, IconButton, InputAdornment, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextfieldWrapper from "src/components/forms/textfield/textfield";
import { useState } from "react";
import Iconify from "src/components/iconify/iconify";

const StyledWrapper = styled(Stack)(({ theme }) => ({}));

const Security = () => {
	const [showPassword, setShowPassword] = useState(false);

	const INITIAL_STATE = {
		password: "",
		newPassword: "",
		confirmPassword: "",
	};

	const VALIDATION = Yup.object().shape({
		password: Yup.string().required("Old Password is required"),
		newPassword: Yup.string().required("New Password is required"),
		confirmpassword: Yup.string()
			.oneOf([Yup.ref("newPassword"), null], "Passwords must match")
			.required("Confirm password is required"),
	});

	const handleSubmit = (values) => {
		console.log(values);
	};

	return (
		<StyledWrapper direction="column" spacing={3}>
			<Typography variant="h6">Update Password</Typography>

			<Formik initialValues={INITIAL_STATE} validationSchema={VALIDATION} onSubmit={handleSubmit}>
				<Form id="update password">
					<Stack direction="column" spacing={3}>

						<Stack direction="column" spacing={1}>
							<Typography variant="body1">Old Password</Typography>

							<TextfieldWrapper
								name="password"
								type={showPassword ? "text" : "password"}
								fullWidth
								size="small"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
												{showPassword ? (
													<Iconify icon="fa-solid:eye" />
												) : (
													<Iconify icon="fa-solid:eye-slash" />
												)}
											</IconButton>
										</InputAdornment>
									),
								}}
							/>
						</Stack>

						<Stack direction="column" spacing={1}>
							<Typography variant="body1">New Password</Typography>

							<TextfieldWrapper
								name="newPassword"
								type={showPassword ? "text" : "password"}
								fullWidth
								size="small"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
												{showPassword ? (
													<Iconify icon="fa-solid:eye" />
												) : (
													<Iconify icon="fa-solid:eye-slash" />
												)}
											</IconButton>
										</InputAdornment>
									),
								}}
							/>
						</Stack>

						<Stack direction="column" spacing={1}>
							<Typography variant="body1">Confirm New Password</Typography>

							<TextfieldWrapper
								name="confirmpassword"
								type={showPassword ? "text" : "password"}
								fullWidth
								size="small"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
												{showPassword ? (
													<Iconify icon="fa-solid:eye" />
												) : (
													<Iconify icon="fa-solid:eye-slash" />
												)}
											</IconButton>
										</InputAdornment>
									),
								}}
							/>
						</Stack>

						<Button variant="contained" type="submit" sx={{maxWidth: 300}}>
							Save Changes 
						</Button>
					</Stack>
				</Form>
			</Formik>
		</StyledWrapper>
	);
};

export default Security;
