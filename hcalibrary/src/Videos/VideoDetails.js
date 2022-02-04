import React from 'react';
// import { Card } from 'react-bootstrap';
// import Moment from 'react-moment';
import ReactTimeAgo from 'react-time-ago';

const VideoDetails = ({ video }) => {
	//check if video is null or empty
	if (!video) {
		return <div></div>;
	}

	//setting attributed for the selected video
	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
	return (
		<div className='card'>
			<iframe
				height='300px'
				scrolling='no'
				src={videoSrc}
				allowFullScreen
				title={video.snippet.title}
			/>
			<div className='card-body'>
				<div className='text-left card.title'>
					<h5>{video.snippet.title}</h5>
				</div>
				<div className='text-left card.text'>
					{video.snippet.description}
					<p>
						<ReactTimeAgo
							date={Date.parse(video.snippet.publishTime)}
							locale='en-US'
						/>
						{/* <strong> Published By</strong>
						{<Moment format='MMM-DD-YYYY'>{video.snippet.publishTime}</Moment>} */}
					</p>
				</div>
			</div>
		</div>
	);
};

export default VideoDetails;
