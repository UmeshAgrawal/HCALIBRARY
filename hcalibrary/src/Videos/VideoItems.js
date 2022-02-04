import React from 'react';
// import { Card } from 'react-bootstrap';
// import Moment from 'react-moment';
import './Video.css';
import ReactTimeAgo from 'react-time-ago';

const VideoItems = ({ video, handleVideoSelect }) => {
	return (
		<>
			{/* Create Card for to show image, title and publish date */}
			<div className='d-inline-block'>
				{/* <Card className="m-2border-0 shadow" onClick={() => handleVideoSelect(video)}  >
          <Row>
            <Col>
              <Card.Img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title >  
                <div data-toggle="tooltip" data-placement="right" title={video.snippet.description}>
                  {video.snippet.title}
                </div></Card.Title>
                <Card.Text >
                  <p><strong> Published By</strong> <moment format="MMM-DD-YYYY">{video.snippet.publishTime}</moment></p>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card> */}

				{/* <Card onClick={() => handleVideoSelect(video)}>
      <Card.Img 
        src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
      <Card.Body>
        <Card.Title>{video.snippet.description}</Card.Title>
        <Card.Text>
        <p><strong> Published By</strong> <Moment format="MMM-DD-YYYY">{video.snippet.publishTime}</Moment></p>
        </Card.Text>
        </Card.Body>
    </Card> */}

				<div className='card box' onClick={() => handleVideoSelect(video)}>
					<img
						src={video.snippet.thumbnails.medium.url}
						alt={video.snippet.description}
						className='card-img-top'
					/>
					<div className='custombody text-left card-body'>
						{/* <h7 className="card-title">{video.snippet.description}</h7> */}
						{/* <p className="font13 bottom-margin0 card-text">
    {video.snippet.title}
    </p> */}
						<p className='font13 bottom-margin0 card-text'>
							{video.snippet.description}
						</p>
						<p className='bottom-margin0'>
							<ReactTimeAgo
								date={Date.parse(video.snippet.publishTime)}
								locale='en-US'
							/>
							{/* <strong> Published By</strong>{' '}
							<Moment format='MMM-DD-YYYY'>{video.snippet.publishTime}</Moment> */}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default VideoItems;
