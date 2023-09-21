import { Box, Card, Grid, Typography, Grow, Stack } from "@mui/material";
import { styled } from "@mui/system";

import BankingMarquee from "./marquee";
import { connect } from "react-redux";
import Iconify from "src/components/iconify/iconify";
import { sentenceCase } from "change-case";

const StyledWrapper = styled(Box)(({ theme }) => ({}));

const TopSection = ({ me }) => {
	return (
		<StyledWrapper>
			<Stack direction="column" spacing={3}>
				<BankingMarquee />

				<Stack direction="column">
					<Typography variant="h3">
						Hello {me?.data?.data?.identity?.given_name ? sentenceCase(me.data.data.identity.given_name) : ""}
						<Iconify icon="twemoji:waving-hand" />
					</Typography>
					<Typography variant="subtitle1" color="text.secondary">Welcome to your account overview.</Typography>
				</Stack>
			</Stack>
		</StyledWrapper>
	);
};

const mapStateToProps = ({ user }) => ({
	me: user.me,
});

export default connect(mapStateToProps)(TopSection);
