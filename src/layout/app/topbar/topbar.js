import * as React from 'react';

import { Badge, Box, Button, IconButton, InputBase, Menu, MenuItem, AppBar, Toolbar, ButtonGroup } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';

import { FaBell, FaEllipsisH, FaEnvelope, FaBars, FaSearch } from 'react-icons/fa';

const drawerWidth = 270;

const AppBarWrapper = styled(AppBar, {
		shouldForwardProp: (prop) => prop !== 'open',
	})(({ theme, open }) => ({
	backgroundColor: "grey",
	//color: "grey",
	padding: "10px",
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
  }));


const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.default,
	backgroundColor: alpha(theme.palette.background.default, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.background.default, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: theme.palette.background.dark,
	'& .MuiInputBase-input': {
		padding: theme.spacing(1.5, 1.5, 1.5, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '30ch',
		},
	},
}));

const fontStyle ={
	fontSize: "20px",
	lineHeight: "0",
	color: "rgba(1,0,1,255)"
}

const PrimarySearchAppBar = ({ handleDrawerOpen, open }) => {

	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
			sx={{color: "rgba(1,0,1,255)"}}
		>
			<MenuItem>
				<Button variant="contained" color="primary" sx={{width: "100%"}}>
					Deposit
				</Button>
			</MenuItem>
			<MenuItem>
				<Button variant="contained" color="primary" sx={{width: "100%"}}>
					Kennedy Muturi Njagi
				</Button>
			</MenuItem>
		</Menu>
	);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBarWrapper position="fixed" open={open}>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="open drawer"
						sx={{ mr: 2 }}
						onClick={handleDrawerOpen}
					>
						<FaBars style={fontStyle} />
					</IconButton>
					<Search>
						<SearchIconWrapper>
							<FaSearch style={fontStyle} />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search…"
							inputProps={{ 'aria-label': 'search' }}
						/>
					</Search>
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						<ButtonGroup variant="contained">
							<Button sx={{minWidth:"120px"}}>
								DEPOSIT
							</Button>

							<Button sx={{minWidth:"120px", backgroundColor: "rgba(1,0,1,255)", color: "rgba(0,254,254,255)"}}>
								Kennedy Muturi Njagi
							</Button>
						</ButtonGroup>
					</Box>
					<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit"
						>
							<FaEllipsisH style={fontStyle} />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBarWrapper>
			{renderMobileMenu}
		</Box>
	);
}

export default PrimarySearchAppBar