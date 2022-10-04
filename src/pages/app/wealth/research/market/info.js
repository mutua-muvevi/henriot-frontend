import Kenya from "../../../../../assets/images/kenyaflag.png";
import SouthAfrica from "../../../../../assets/images/SAflag.png";


export const listItems = [
	{
		logo: {
			src: Kenya,
			alt:"Kenya"
		},
		code: "NBO",
		title: "Lorem Ipsum Text Here",
		number: "23.70",
		percentage: "-11.5",
		color: "error"
	},
	{
		logo: {
			src:SouthAfrica,
			alt:"SouthAfrica"
		},
		code: "SAF",
		title: "Lorem Ipsum Text Here",
		number: "43.60",
		percentage: "19",
		color: "green"
	},
	{
		logo: {
			src:SouthAfrica,
			alt:"SouthAfrica"
		},
		code: "SAF",
		title: "Lorem Ipsum Text Here",
		number: "23.70",
		percentage: "-11.5",
		color: "error"
	},
	{
		logo: {
			src: Kenya,
			alt:"Kenya"
		},
		code: "KE",
		title: "Lorem Ipsum Text Here",
		number: "23.70",
		percentage: "-15",
		color: "error"
	},
	{
		logo: {
			src: SouthAfrica,
			alt:"SouthAfrica"
		},
		code: "CPT",
		title: "Lorem Ipsum Text Here",
		number: "23.70",
		percentage: "-11.5",
		color: "error"
	},
	{
		logo: {
			src: Kenya,
			alt:"Kenya"
		},
		code: "NBO",
		title: "Lorem Ipsum Text Here",
		number: "73.70",
		percentage: "21.5",
		color: "green"
	},
]


export const chartData = {
	labels: ["Jan","Feb","Mar","April", "May", "June", "July", "Aug", "Sep"],
	datasets: [
		{
			id: 1,
			label: 'item One',
			data: [3, 19, 33, 57, 60, 78, 133, 143, 197],
			backgroundColor: "#65cfbb",
			borderColor:"#65cfbb",
			tension:0.1,
			fill:false,
			hoverBackgroundColor:"#32a08b",
		},
		{
			id: 2,
			label: 'item Two',
			data: [13, 47, 59, 73, 87, 99, 129, 189, 269],
			backgroundColor: "#3366FF",
			borderColor:"#3366FF",
			tension:0.1,
			fill:false,
			hoverBackgroundColor:"#32a08b"
		},
	],
	options:{
		responsive: true
	}
}

export const upcomingEvents = [
	{
		date:"03 Nov",
		time:"10:00",
		logo: {
			src:Kenya,
			alt:"Kenya flag"
		},
		title: "Lorem Ipsum text here"
	},
	{
		date:"13 Nov",
		time:"12:00",
		logo: {
			src:SouthAfrica,
			alt:"SouthAfrica flag"
		},
		title: "Lorem Ipsum text here"
	},
	{
		date:"24 Nov",
		time:"07:30",
		logo: {
			src:Kenya,
			alt:"Kenya flag"
		},
		title: "Lorem Ipsum text here"
	},
]