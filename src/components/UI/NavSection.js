import { useState } from "react";
import PropTypes from "prop-types";
import { NavLink as RouterLink, matchPath, useLocation } from "react-router-dom";
// material
import { alpha, useTheme, styled } from "@mui/material/styles";
import { Box, List, Collapse, ListItemText, ListItemIcon, ListItemButton, Typography } from "@mui/material";
import Iconify from "../iconify/iconify";
//

// ----------------------------------------------------------------------

const ListItemStyle = styled((props) => <ListItemButton disableGutters {...props} />)(({ theme }) => ({
	...theme.typography.body1,
	position: "relative",
	textTransform: "capitalize",
	color: theme.palette.text.primary,
	borderRadius: theme.shape.borderRadius,
}));

const ListItemIconStyle = styled(ListItemIcon)({
	width: 22,
	height: 22,
	color: "inherit",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});

// ----------------------------------------------------------------------

NavItem.propTypes = {
	item: PropTypes.object,
	active: PropTypes.func,
};

function NavItem({ item, active }) {
	const theme = useTheme();

	const isActiveRoot = active(item.path);

	const { title, path, icon, info, children } = item;

	const [open, setOpen] = useState(isActiveRoot);

	const handleOpen = () => {
		setOpen((prev) => !prev);
	};

	const activeRootStyle = {
		color: "primary.dark",
		fontWeight: "fontWeightMedium",
		bgcolor: alpha(theme.palette.primary.dark, theme.palette.action.selectedOpacity),
	};

	const activeSubStyle = {
		color: "text.primary",
		fontWeight: "fontWeightMedium",
	};

	if (children) {
		return (
			<>
				<ListItemStyle
					onClick={handleOpen}
					sx={{
						...(isActiveRoot && activeRootStyle),
					}}
				>
					<ListItemIconStyle>
						<Iconify icon={icon}/>
					</ListItemIconStyle>

					<ListItemText disableTypography primary={title} />
					{info && info}
					<Iconify
						icon={open ? "eva:arrow-ios-downward-fill" : "eva:arrow-ios-forward-fill"}
						sx={{ width: 16, height: 16, ml: 1 }}
					/>
				</ListItemStyle>

				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						{children.map((item) => {
							const { title, path } = item;
							const isActiveSub = active(path);

							return (
								<ListItemStyle
									key={title}
									component={RouterLink}
									to={path}
									sx={{
										...(isActiveSub && activeSubStyle),
										marginLeft: 2
									}}
								>
									<ListItemIconStyle>
										<Iconify icon={item.nestedIcon}/>
									</ListItemIconStyle>
									<ListItemText disableTypography primary={title} />
								</ListItemStyle>
							);
						})}
					</List>
				</Collapse>
			</>
		);
	}

	return (
		<ListItemStyle
			component={RouterLink}
			to={path}
			sx={{
				...(isActiveRoot && activeRootStyle),
			}}
		>
			<ListItemIconStyle>
				<Iconify icon={icon}/>
			</ListItemIconStyle>
			<ListItemText disableTypography primary={title} />
			{info && info}
		</ListItemStyle>
	);
}

const NavSection = ({
	bankingSection,
	tradingSection,
	wealthManagementSection,
	guideSection,
	navAdmin,
	type,
	...other
}) => {
	const { pathname } = useLocation();

	const match = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);

	// const navSection = [bankingSection, tradingSection, wealthManagementSection, guideSection];
	const navSection = [tradingSection];

	const adminNavSection = [navAdmin];

	return (
		<Box {...other}>
			{type === "user"
				? navSection.map((el, i) => (
						<Box key={i} sx={{ ml: 3 }}>
							<Typography variant="h6" sx={{ paddingTop: "5px" }}>
								{el.title}
							</Typography>
							<List disablePadding>
								{el.list.map((item) => (
									<NavItem key={item.title} item={item} active={match} />
								))}
							</List>
						</Box>
				  ))
				: adminNavSection.map((el, i) => (
						<Box key={i}>
							<List disablePadding sx={{ borderBottom: "1px solid grey" }} dense>
								{el.list.map((item) => (
									<NavItem key={item.title} item={item} active={match} />
								))}
							</List>
						</Box>
				  ))}
		</Box>
	);
};

NavSection.propTypes = {
	bankingSection: PropTypes.object,
	tradingSection: PropTypes.object,
	wealthManagementSection: PropTypes.object,
	guideSection: PropTypes.object,
};

export default NavSection;
