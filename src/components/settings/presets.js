// theme
import palette from "../../theme/palette";

// ----------------------------------------------------------------------

const themePalette = palette("light");

export const presets = [
	// DEFAULT
	{
		name: "default",
		...themePalette.primary,
	},

	//GREEN
	{
		name: "green",
		lighter: "#62db52",
		light: "#4cd639",
		main: "#1fcc08",
		dark: "#1cb807",
		darker: "#19a306",
		contrastText: "#00050A",
	},

	// CYAN
	{
		name: "cyan",
		lighter: "#CCF4FE",
		light: "#68CDF9",
		main: "#078DEE",
		dark: "#0351AB",
		darker: "#012972",
		contrastText: "#FFFFFF",
	},
	// BLUE
	{
		name: "blue",
		lighter: "#D1E9FC",
		light: "#76B0F1",
		main: "#2065D1",
		dark: "#103996",
		darker: "#061B64",
		contrastText: "#FFFFFF",
	},
	// ORANGE
	{
		name: "orange",
		lighter: "#f38454",
		light: "#f2743e",
		main: "#f06529",
		dark: "#d85b25",
		darker: "#c05121",
		contrastText: "#01121D",
	},
	// RED
	{
		name: "red",
		lighter: "#FFE3D5",
		light: "#FFC1AC",
		main: "#FF3030",
		dark: "#B71833",
		darker: "#7A0930",
		contrastText: "#FFFFFF",
	},
];

export const defaultPreset = presets[0];
export const greenPreset = presets[1];
export const cyanPreset = presets[2];
export const bluePreset = presets[3];
export const orangePreset = presets[4];
export const redPreset = presets[5];

export const presetsOption = presets.map((color) => ({
	name: color.name,
	value: color.main,
}));

export function getPresets(key) {
	return {
		default: defaultPreset,
		green: greenPreset,
		cyan: cyanPreset,
		blue: bluePreset,
		orange: orangePreset,
		red: redPreset,
	}[key];
}
