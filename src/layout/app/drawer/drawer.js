import React from 'react';

import { Divider, IconButton, List, ListItem, Link, ListItemButton, ListItemText, Typography} from "@mui/material";
import MuiDrawer from '@mui/material/Drawer';
import { styled } from "@mui/system";

import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';
import { FaPowerOff } from 'react-icons/fa';

import { aboutLayer, overviewLayer, documentationLayer } from "./listItem";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/logo/transparentwhitelogo.png";
import Scrollbar from "../../../components/Scrollbar";


const drawerWidth = 270;

const sx= {
	minWidth: 0,
	justifyContent: 'center',
	fontSize: "inherit"
}

// open drawer mixin
const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
});

const LogoItem = styled("img")(({theme}) => ({
	width: "95%",
	marginLeft: "auto",
	marginRight: "auto",
	marginBottom: "20px",
	margin: "20px auto"
}))

// close drawer mixing
const closedMixin = (theme) => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});


const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	paddingBottom: "10px",

	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const navlinkStyle = {
	textDecoration: "none",
	color: "white"
}

const activeNavlink={
	textDecoration: "none",
	color: "rgba(0,255,252,255)",
	borderTopLeftRadius: "20px",
	borderBottomLeftRadius: "20px",
	background: "white !important"
}


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		color: theme.palette.common.white,
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		backgroundColor: theme.palette.background.dark,
		...(open && {
			...openedMixin(theme),
			'& .MuiDrawer-paper': openedMixin(theme),
		}),
		...(!open && {
			...closedMixin(theme),
			'& .MuiDrawer-paper': closedMixin(theme),
		}),
		}),
);

const StyledListItem = styled(ListItem)(({ theme }) => ({
	margin: 0,
	padding: 0,
	"&:active": {
		backgroundColor: theme.palette.secondary.dark,
		color: "white",
		"& .MuiListItemIcon-root": {
			color: "white"
		}
	},
	"&.Mui-active": {
		backgroundColor: "red",
		color: "white",
		"& .MuiListItemIcon-root": {
			color: "white"
		}
	},
	"&.Mui-selected": {
		backgroundColor: "red",
		color: "white",
		"& .MuiListItemIcon-root": {
			color: "white"
		}
	},
}))

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
	"&:hover": {
		backgroundColor: theme.palette.secondary.dark,
		color: "white",
		"& .MuiListItemIcon-root": {
			color: "white"
		}
	},
	"&.Mui-active": {
		backgroundColor: "red",
		color: "white",
		"& .MuiListItemIcon-root": {
			color: "white"
		}
	},
}))

const StyledListItemText = styled(ListItemText)(({ theme }) => ({

	"&$selected:hover": {
		backgroundColor: "purple",
		color: "white",
		"& .MuiListItemIcon-root": {
			color: "white"
		}
	}
}))

const DrawerComponent = ({open, handleDrawerOpen, handleDrawerClose, theme}) => {

	const logOut = () => {
		window.localStorage.clear()
	}

	return (
		<Drawer
			anchor="left"
			open={open}
			variant="permanent"
			PaperProps={{
				sx: {
					backgroundColor: "rgba(1,0,1,255)",
					color: "white",
				  }
			}}
		>
			
			<DrawerHeader>
				<IconButton onClick={handleDrawerClose}>
					{theme.direction === 'rtl' ? <BsChevronDoubleRight style = {{color : "rgba(0,255,252,255)"}}/> : <BsChevronDoubleLeft style = {{color : "rgba(0,255,252,255)"}}/>}
				</IconButton>
			</DrawerHeader>

			<Scrollbar
				sx={{
					height: 1,
					'& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
				}}
			>

				<List >
					<ListItem>
						<LogoItem src={Logo} alt="Rhino John Prime Metal Logo"/>
					</ListItem>
				
					<Divider style={{ backgroundColor: "rgba(0,255,252,255)" }}/>

				{/* ABOUT VAULT & RESEARCH CENTER */}
					{
						aboutLayer.map((el, index) => (
							<NavLink 
								style={({isActive}) => 
									isActive ? activeNavlink : navlinkStyle
								} 
								to={el.path} 
								key={index}>
								<StyledListItem>
									<StyledListItemButton
										sx={{
											minHeight: 48,
											justifyContent: open ? 'initial' : 'center',
											px: 2.5,
										}}
									>
										{el.icon}
										{/*<StyledListItemText primary={el.label} sx={{ opacity: open ? 1 : 0 , marginLeft: "15px"}} />*/}
										<Typography variant="body2" sx={{ opacity: open ? 1 : 0 , marginLeft: "15px"}}>
											{el.label}
										</Typography>

									</StyledListItemButton>
									
								</StyledListItem>
							</NavLink>
						))
					}
					<Divider style={{ backgroundColor: "rgba(0,255,252,255)" }}/>

				{/* OVER VIEW - CRYPTO TRANSFERS */}

					{
						overviewLayer.map((el, index) => (
							<NavLink 
								style={({isActive}) => isActive ? activeNavlink : navlinkStyle} 
								to={el.path} 
								key={index}>
								<ListItemButton
									sx={{
										minHeight: 48,
										justifyContent: open ? 'initial' : 'center',
										px: 2.5,
									}}
								>
									{el.icon}
									<Typography variant="body2" sx={{ opacity: open ? 1 : 0 , marginLeft: "15px"}}>
										{el.label}
									</Typography>

								</ListItemButton>
							</NavLink>
						))
					}
					<Divider style={{ backgroundColor: "rgba(0,255,252,255)" }}/>

					{
						documentationLayer.map((el, index) => (
							<NavLink 
								style={({isActive}) => 
								isActive ? activeNavlink : navlinkStyle
								} 
								to={el.path} 
								key={index}>
									<ListItemButton
										sx={{
											minHeight: 48,
											justifyContent: open ? 'initial' : 'center',
											px: 2.5,
										}}
									>
										{el.icon}
										<Typography variant="body2" sx={{ opacity: open ? 1 : 0 , marginLeft: "15px"}}>
											{el.label}
										</Typography>

									</ListItemButton>
							</NavLink>
						))
					}


				</List>
			</Scrollbar>


		</Drawer>
	)
}

export default DrawerComponent