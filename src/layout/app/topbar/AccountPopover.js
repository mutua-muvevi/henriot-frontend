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

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
	{
		label: "Home",
		icon: "eva:home-fill",
		linkTo: "/admin/banking/dashboard",
	},
	{
		label: "Profile",
		icon: "eva:person-fill",
		linkTo: "/admin/profile",
	},
	{
		label: "Settings",
		icon: "eva:settings-2-fill",
		linkTo: "/admin/settings",
	},
];

// ----------------------------------------------------------------------

const AccountPopover = ({ logout }) => {
	const anchorRef = useRef(null);

	const [open, setOpen] = useState(null);

	const handleOpen = (event) => {
		setOpen(event.currentTarget);
	};

	const handleClose = () => {
		setOpen(null);
	};

	const handleLogout = () => {
		logout();
	};

	return (
		<>
			<Stack
				onClick={handleOpen}
				ref={anchorRef}
				sx={{cursor: "pointer",}}
				direction="row"
				alignItems="center"
			>
				<Typography variant="body1" sx={{ marginRight: "10px" }}>
					Kennedy Muturi Njagi
				</Typography>
				<FaChevronDown style={{ fontSize: "inherit" }} />
			</Stack>

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
					<Typography variant="subtitle2" noWrap>
						Kennedy
					</Typography>
					<Typography variant="body2" noWrap>
						Kennedy@mail.com
					</Typography>
				</Box>

				<Divider sx={{ borderStyle: "dashed" }} />

				<Stack sx={{ p: 1 }}>
					{MENU_OPTIONS.map((option) => (
						<MenuItem key={option.label} to={option.linkTo} component={RouterLink} onClick={handleClose}>
							{option.label}
						</MenuItem>
					))}
				</Stack>

				<Divider sx={{ borderStyle: "dashed" }} />

				<MenuItem onClick={handleLogout} sx={{ m: 1 }}>
					Logout
				</MenuItem>
			</MenuPopover>
		</>
	);
};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch) => ({
	logout: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountPopover);
