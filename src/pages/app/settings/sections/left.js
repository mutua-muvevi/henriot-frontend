import { Box, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import Avatar from "src/assets/images/avatar.png";
import { profileData } from "./info";

const StyledWrapper = styled(Stack)(({ theme }) => ({

}));

const StyledImageBox = styled(Box)(({ theme }) => ({
	
}));

const styledImage = {
	width: "100%"
}

const StyledContentBox = styled(Box)(({ theme }) => ({

}));

const StyledContentStack = styled(Stack)(({ theme }) => ({

}));

const StyleTextBox = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "left",
	alignItems: "center",
	textAlign: "left"
}));

const StyledButton = styled(Button)(({ theme }) => ({
	wodth: "100%"
}));

const SettingsLeft = () => {
	return (
		<StyledWrapper direction="column" spacing={2}>
			<StyledImageBox>
				<img
					src={Avatar}
					alt="User"
					style={styledImage}
				/>
			</StyledImageBox>

			<StyledContentBox>
				<Typography variant="h4" color="text.primary" sx={{mb:"10px"}}>
					Edy Iopnescu
				</Typography>

				<StyledContentStack
					direction="column"
					spacing={1}
				>
					{
						profileData.map((el, i) => (
							<StyleTextBox key={i}>
								{el.icon}
								<Typography variant="body1">
									{el.text}
								</Typography>
							</StyleTextBox>
						))
					}
				</StyledContentStack>
			</StyledContentBox>

			<StyledButton variant="contained">
				Trading Platform Credentials
			</StyledButton>
		</StyledWrapper>
	)
}

export default SettingsLeft