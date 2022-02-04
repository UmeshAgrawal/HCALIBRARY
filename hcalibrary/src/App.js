import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './App.css';
import NavBar from './NavBar/NavBar';
import { apiBaseUrl, channelId, key, maxResult } from './Constant/Constant';
import VideoList from './Videos/VideoList';
import VideoDetails from './Videos/VideoDetails';
// import Loadinglogo from './Media/loading.gif';

class App extends Component {
	_isMounted = false;
	constructor(props) {
		super(props);
		this.loadVideos();
		this.state = {
			videos: [],
			selectedVideo: null,
			statusCode: null,
			loading: true,
			activeButton: 0,
			pageLoad: false,
		};
	}
	componentDidMount() {
		this._isMounted = true;
	}
	componentWillUnmount() {
		this._isMounted = false;
	}
	loadVideos = async () => {
		await this.FetchVideos(
			`${apiBaseUrl}search?part=snippet&order=date&channelId=${channelId}&maxResults=${maxResult}&key=${key}`
		);
	};

	FetchVideos = async (url) => {
		await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((resJson) => {
				if (this._isMounted) {
					this.setState({
						videos: resJson.items.slice(1),
						statusCode: resJson.status,
						selectedVideo: resJson.items[0],
						loading: false,
						pageLoad: true,
					});

					console.log(this.state.videos);
				}
			})
			.catch((error) => {
				this.setState({
					loading: false,
					pageLoad: true,
				});
			});
	};
	handleVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	};
	loadallclick() {
		this.loadVideos();
		this.setState({ activeButton: 0 });
	}
	loadcovidclick = async () => {
		this.setState({ activeButton: 1 });
		await this.FetchVideos(
			`${apiBaseUrl}search?part=snippet&order=date&channelId=${channelId}&maxResults=${maxResult}&key=${key}&q=Covid-19`
		);
	};
	handleSubmit = async (textForSearch) => {
		if (textForSearch === '') this.setState({ activeButton: 0 });
		else this.setState({ activeButton: -1 });
		await this.FetchVideos(
			`${apiBaseUrl}search?part=snippet&order=date&channelId=${channelId}&maxResults=${maxResult}&key=${key}&q=${textForSearch}`
		);
	};
	render() {
		let allbuttonClass = ['btn btn-secondary btn-sm margin-right10'];
		let covidbuttonClass = ['btn btn-secondary btn-sm margin-right10'];
		if (this.state.activeButton === 0) {
			allbuttonClass.push('dark');
		} else if (this.state.activeButton === 1) {
			covidbuttonClass.push('dark');
		}
		return (
			<>
				<div className='App'>
					<NavBar handleFormSubmit={this.handleSubmit}></NavBar>

					<div className='body container'>
						{this.state.videos.length <= 0 && this.state.pageLoad === true ? (
							<div>
								<h2>
									<strong>No Result Found</strong>
								</h2>
							</div>
						) : (
							<Row>
								<Col sm={7}>
									<VideoDetails video={this.state.selectedVideo} />
								</Col>
								<Col sm={5}>
									{this.state.videos.length > 0 ? (
										<div className='mb-2'>
											<button
												className={allbuttonClass.join(' ')}
												type='submit'
												onClick={this.loadallclick.bind(this)}>
												All
											</button>
											<button
												className={covidbuttonClass.join(' ')}
												type='submit'
												onClick={this.loadcovidclick.bind(this)}>
												Covid
											</button>
										</div>
									) : (
										''
									)}
									<VideoList
										handleVideoSelect={this.handleVideoSelect}
										videos={this.state.videos}
									/>
								</Col>
							</Row>
						)}
					</div>
				</div>
			</>
		);
	}
}
export default App;
