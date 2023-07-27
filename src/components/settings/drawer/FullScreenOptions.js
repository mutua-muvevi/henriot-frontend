import { useState } from "react";
//
import SvgColor from "../../svg-color";
import { StyledCard } from "../styles";
import Iconify from "../../iconify";
import { useTheme } from "@emotion/react";

// ----------------------------------------------------------------------

export default function FullScreenOptions() {
	const [fullscreen, setFullscreen] = useState(false);
	const theme = useTheme()

	const onToggleFullScreen = () => {
		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen();
			setFullscreen(true);
		} else if (document.exitFullscreen) {
			document.exitFullscreen();
			setFullscreen(false);
		}
	};

	return (
		<StyledCard
			selected={fullscreen}
			onClick={onToggleFullScreen}
			sx={{
				height: 48,
				typography: "subtitle2",
				"& .svg-color": {
					ml: 1,
					width: 16,
					height: 16,
				},
			}}
		>
			{fullscreen ? "Exit Fullscreen" : "Fullscreen"}
			{fullscreen ? (
				<Iconify icon="mingcute:fullscreen-fill" color={theme.palette.primary.main} />
			) : (
				<Iconify icon="mingcute:fullscreen-fill" color={theme.palette.primary.main} />
			)}
		</StyledCard>
	);
}
