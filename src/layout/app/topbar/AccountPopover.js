import { useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
// @mui
import { alpha } from "@mui/material/styles";
import { Box, Divider, Typography, Stack, MenuItem, IconButton } from "@mui/material";
// components
import MenuPopover from "../../../components/UI/MenuPopover";
//icons
import { FaChevronDown } from "react-icons/fa";
import { connect } from "react-redux";
import { logoutUser } from "src/redux/auth/actions";
import { sentenceCase } from "change-case";
import Iconify from "src/components/iconify/iconify";

// ----------------------------------------------------------------------

const AccountPopover = ({ logout, me }) => {
	const anchorRef = useRef(null);

	const [open, setOpen] = useState(null);

	const handleOpen = (event) => {
		setOpen(event.currentTarget);
	};

	const handleClose = () => {
		setOpen(null);
	};

	const handleLogout = () => {
		const storage = window.localStorage;
		storage.clear();
		window.location.reload();
	};

	return (
		<>
			<Stack onClick={handleOpen} ref={anchorRef} sx={{ cursor: "pointer" }} direction="row" alignItems="center">
				<Iconify icon="mdi:account" />
				<FaChevronDown style={{ fontSize: "inherit" }} />
			</Stack>
			{console.log("Me is", me)}

			<MenuPopover
				open={Boolean(open)}
				anchorEl={open}
				onClose={handleClose}
				sx={{
					p: 0,
					mt: 1.5,
					ml: 0.75,
					"& .MuiMenuItem-root": {
						typography: "body2",
						borderRadius: 0.75,
					},
				}}
			>
				<Box sx={{ my: 1.5, px: 2.5 }}>
					<Typography variant="subtitle1" sx={{ fontWeight: "700" }}>
						{me?.data?.data?.identity?.given_name ? sentenceCase(me.data.data.identity.given_name) : ""}
					</Typography>
					<Typography variant="body1">{me?.data?.data?.email || ""}</Typography>
				</Box>

				<Divider sx={{ borderStyle: "dashed" }} />

				<MenuItem onClick={handleLogout} sx={{ m: 1 }}>
					<Typography variant="body1">Logout</Typography>
				</MenuItem>
			</MenuPopover>
		</>
	);
};

const mapStateToProps = ({ user }) => ({
	me: user.me,
});

const mapDispatchToProps = (dispatch) => ({
	logout: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountPopover);
