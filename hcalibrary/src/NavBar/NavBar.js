import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';

class NavBar extends Component {
	//text on changes in search text set searchtext
	handleChange = (event) => {
		if (event.target.value === '')
			this.props.handleFormSubmit(event.target.value);
		this.setState({
			searchtext: event.target.value,
		});
	};

	//search submit button call
	handleSubmit = (event) => {
		event.preventDefault();
		this.props.handleFormSubmit(this.state.searchtext);
	};
	//   //search covid 19 videos
	//   searchCovid = (event) => {
	//     event.preventDefault();
	//     this.props.handleFormSubmit("COVID-19");
	//   };
	//   //exclude COVID-19 videos
	//   searchECovid = (event) => {
	//     event.preventDefault();
	//     this.props.handleFormSubmit('-"COVID-19"');
	//   };
	render() {
		return (
			<div>
				<Navbar bg='dark' variant='dark'>
					<Container>
						<Navbar.Brand>HCA Library</Navbar.Brand>
						{/* <Nav className="me-auto">
              <Nav.Link onClick={this.searchCovid}>COVID</Nav.Link>
              <Nav.Link onClick={this.searchECovid}>All Videos</Nav.Link>
            </Nav> */}
						<form onSubmit={this.handleSubmit}>
							<input
								type='search'
								placeholder='Search...'
								onSubmit={this.handleSubmit}
								onChange={this.handleChange}
							/>
							<button
								type='submit'
								className='search'
								onClick={this.handleSubmit}>
								Search
							</button>
						</form>
					</Container>
				</Navbar>
			</div>
		);
	}
}

export default NavBar;
