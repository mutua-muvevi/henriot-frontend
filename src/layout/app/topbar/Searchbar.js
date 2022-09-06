
// material
import { styled, alpha } from '@mui/material/styles';
import { InputBase } from '@mui/material';
// icons
import { FaSearch } from "react-icons/fa";

// ----------------------------------------------------------------------



const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha("rgba(133, 133, 133, 1)", 0.15),
	'&:hover': {
		backgroundColor: alpha("rgba(133, 133, 133, 1)", 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto',
	},
	color: "grey"
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: "grey"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "grey",
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
// ----------------------------------------------------------------------

export default function Searchbar() {

	return (
		<Search>
			<SearchIconWrapper>
				<FaSearch />
			</SearchIconWrapper>
			<StyledInputBase
				placeholder="Search…"
				inputProps={{ 'aria-label': 'search' }}
			/>
		</Search>
	);
}
