import { Box, Grow, Grid } from "@mui/material";
import { styled } from "@mui/system";
import NotificationComponent from "src/components/UI/Notification";


const StyledNotificationSection = styled(Grid)(({ theme }) => ({
	maxHeight: 200
}))

const StyledNotificationItems = styled(Grid)(({ theme }) => ({
}))

const notifications = [
	{
		level: "warning",
		text: "This is an warning notification"
	},
	{
		level: "info",
		text: "This is an info notification"
	},
	{
		level: "success",
		text: "This is an success notification"
	},
	{
		level: "error",
		text: "This is an error notification"
	},
]

const NotificationSection = () => {
	return (
		<StyledNotificationSection container spacing={1}>
			{
				notifications &&
				notifications.map((el, i) => (
					<StyledNotificationItems item key={i} xs={12} sm={12} md={12} lg={12} xl={12}>
						<NotificationComponent
							text={el.text}
							level={el.level}
						/>
					</StyledNotificationItems>
				))
			}
		</StyledNotificationSection>
	)
}

export default NotificationSection