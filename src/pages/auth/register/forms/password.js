import { useState } from "react";

import { Box, Grid, Typography, InputAdornment, IconButton } from "@mui/material";
import { styled } from "@mui/system";

import TextfieldWrapper from "../../../../components/forms/textfield/textfield";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const StyledFormContainer = styled(Box)(({ theme }) => ({}));

const PasswordInfo = (props) => {
	const {
		formField: { password, confirmpassword },
	} = props;
	const [showPassword, setShowPassword] = useState(false);

	return (
		<StyledFormContainer>
			<Typography variant="h6" color="primary" sx={{ mb: "20px" }}>
				Password
			</Typography>

			<Grid container spacing={3}>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper
						name={password.name}
						type={showPassword ? "text" : "password"}
						label={password.label}
						fullWidth
						size="small"
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
										{showPassword ? <FaEye /> : <FaEyeSlash />}
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<TextfieldWrapper
						name={confirmpassword.name}
						type={showPassword ? "text" : "password"}
						label={confirmpassword.label}
						fullWidth
						size="small"
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
										{showPassword ? <FaEye /> : <FaEyeSlash />}
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
				</Grid>
			</Grid>
		</StyledFormContainer>
	);
};

export default PasswordInfo;
