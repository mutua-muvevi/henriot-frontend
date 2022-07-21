import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	components: {

	},
	palette: {
		primary: {
			main: "rgba(100,207,186,255)",
			dark: "rgba(131, 216, 199, 1))",
			light: "rgba(115, 211, 192, 1)"
		},
		secondary: {
			main: "rgba(27, 139, 198, 1)",
			dark: "rgba(3, 71, 106, 1)",
			light: "rgba(0, 153, 234, 1)"
		},
		text: {
			primary: "#222222",
			secondary: "#737373",
			disabled: "#6f8ba4"
		},
		background: {
			paper: "rgba(38,38,38,255)",
			default: "rgba(241, 250, 248, 1)",
			dark: "rgba(1,0,1,255)",
		},
	},
	shape: {
		default: 5,
		rounded: 10
	},
	typography: {
		fontFamily: "'Fira Sans', sans-serif",
		h1: {
			fontFamily: "'Ibarra Real Nova', serif;",
			fontWeight: 700,
			fontSize: "32px",
			lineHeight: "37px"
		},
		h2: {
			fontFamily: "'Ibarra Real Nova', serif;",
			fontWeight: 600,
			fontSize: "29px",
			lineHeight: "32px"
		},
		h3: {
			fontFamily: "'Ibarra Real Nova', serif;",
			fontWeight: 500,
			fontSize: "24px",
			lineHeight: "29px"
		},
		h4: {
			fontFamily: "''Ibarra Real Nova', serif;",

		},
		h5: {
			fontFamily: "'Fira Sans', sans-serif",
		},
		h6: {
			fontFamily: "'Fira Sans', sans-serif",
		},
		subtitle1: {
			fontFamily: "'Fira Sans', sans-serif",
		},
		subtitle2: {
			fontFamily: "'Fira Sans', sans-serif",
		},
		body1: {
			fontFamily: "'Fira Sans', sans-serif",
		},
		body2: {
			fontFamily: "'Fira Sans', sans-serif",
		},
		button: {
			fontFamily: "'Fira Sans', sans-serif",
		},
		caption: {
			fontFamily: "'Fira Sans', sans-serif",
		},
		overline: {
			fontFamily: "'Fira Sans', sans-serif",
		},
		
	},
	breakpoints: {
		values: {
		  xs: 0,
		  sm: 600,
		  md: 900,
		  lg: 1300,
		  xl: 1536,
		},
	  },
})