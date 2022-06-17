import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import "../styles/main.css";

const Profile = () => {
	return (
		<>
			<Row className="main-row">
				<Col>
					<Card className='main-card mb-4'>
						<Card.Img variant="top" src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1655336590/pruebaIntelliNext/timeline_qg5mca.jpg" className='rounded-top' alt='beach' />
						<div className="profile position-relative w-50">
							<div className="d-flex flex-row">
								<div className="profile-image-container">
									<Image src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1655336589/pruebaIntelliNext/avatar-s-2_jffezn.jpg"
										className='border border-light p-2 mb-2 rounded img-thumbnail' alt="profile Img" />
								</div>
								<div className="profile-title ms-4 mt-5">
									<h2 className="text-white">Kitty Allanson</h2>
									<p className="text-white">UI/UX Designer</p>
								</div>
							</div>
						</div>

						<div className="profile-header-nav d-flex">
							<Navbar className="navbar-expand-md-profile navbar-light justify-content-end justify-content-md-between w-100 mb-5">
								<Button className="btn-icon navbar-toggler waves-effect waves-float botton-profile">
								</Button>
								<div className="collapse navbar-collapse">
									<div className="profile-tabs d-flex justify-content-between flex-wrap mt-1 mt-md-0">
										<ul className="nav nav-pills mb-0">
											<li className="botton-profile nav-item rounded">
												<a className="nav-link fw-bold " href="#">
													<span className="botton-profile d-none d-md-block">Feed</span>
												</a>
											</li>
											<li className="nav-item">
												<a className="nav-link fw-bold" href="#">
													<span className="d-none d-md-block nav-color-profile">About</span>
												</a>
											</li>
											<li className="nav-item nav-color-profile">
												<a className="nav-link fw-bold" href="#">
													<span className="d-none d-md-block nav-color-profile">Photos</span>
												</a>
											</li>
											<li className="nav-item nav-color-profile">
												<a className="nav-link fw-bold" href="#">
													<span className="d-none d-md-block nav-color-profile">Friends</span>
												</a>
											</li>
											<li className="botton-profile nav-item rounded position-botton-profile">
												<a className="nav-link fw-bold " href="#">
													<span className="botton-profile d-none d-md-block">Edit</span>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</Navbar>
						</div>
					</Card>

				</Col>
			</Row>
		</>
	)
}

export default Profile