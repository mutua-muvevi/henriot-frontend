import { Box, Card, Grid, Typography, Grow, Stack, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";

import BankingMarquee from "./marquee";
import { connect } from "react-redux";
import Iconify from "src/components/iconify/iconify";
import { sentenceCase } from "change-case";

const StyledWrapper = styled(Box)(({ theme }) => ({}));

const TopSection = ({ me, assets }) => {
	return (
		<StyledWrapper>
			<Stack direction="column" spacing={3}>
				{assets?.loading ? <CircularProgress /> : <BankingMarquee assets={assets}/>}

				<Stack direction="column">
					<Typography variant="h3">
						Hello{" "}
						{me?.data?.data?.identity?.given_name ? sentenceCase(me.data.data.identity.given_name) : ""}
						<Iconify icon="twemoji:waving-hand" />
					</Typography>
					<Typography variant="subtitle1" color="text.secondary">
						Welcome to your account overview.
					</Typography>
				</Stack>
			</Stack>
		</StyledWrapper>
	);
};

const mapStateToProps = ({ user, assets }) => ({
	me: user.me,
	assets: assets,
});

export default connect(mapStateToProps)(TopSection);
