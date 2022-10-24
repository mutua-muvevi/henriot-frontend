import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import PropTypes from "prop-types";

const TimelineComponent = ({id, children}) => {
	return (
		<Timeline
			sx={{
				[`& .${timelineItemClasses.root}:before`]: {
					flex: 0,
					padding: 0,
				},
			}}
			id={id}
		>
			{
				children.map((element, i) => (
					<TimelineItem key={i}>
						<TimelineSeparator>
							<TimelineDot color="primary"/>
							<TimelineConnector color="secondary"/>
						</TimelineSeparator>
						<TimelineContent>
							{element}
						</TimelineContent>
					</TimelineItem>
				))
			}
			{console.log(children)}
		</Timeline>
  );
}

TimelineComponent.propTypes = {
	id: PropTypes.string,
	children: PropTypes.array.isRequired
}

export default TimelineComponent