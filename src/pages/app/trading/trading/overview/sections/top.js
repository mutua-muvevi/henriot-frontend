import { Box, Card, Grid, Typography, Grow, Stack } from "@mui/material";
import { styled } from "@mui/system";

import BankingMarquee from "./marquee";
import { connect } from "react-redux";
import Iconify from "src/components/iconify/iconify";
import { sentenceCase } from "change-case";

const StyledWrapper = styled(Box)(({ theme }) => ({}));

const TopSection = ({ user }) => {
	return (
		<StyledWrapper>
			<Stack direction="column" spacing={3}>
				<BankingMarquee />

				<Stack direction="column">
					<Typography variant="h3">
						Hello {user && user.firstname ? sentenceCase(user.firstname) : user}{" "}
						<Iconify icon="twemoji:waving-hand" />
					</Typography>
					<Typography variant="subtitle1" color="text.secondary">Welcome to your account overview.</Typography>
				</Stack>
			</Stack>
		</StyledWrapper>
	);
};

const mapStateToProps = ({ user }) => ({
	user: user.me.data.data,
});

export default connect(mapStateToProps)(TopSection);
