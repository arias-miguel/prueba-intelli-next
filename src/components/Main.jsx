import React from 'react'
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import "../styles/main.css"
const Main = () => {
  return (
    <>
        <Container fluid>
            {/* <div className='content-body p-2 b-3 rounded-circle'> */}
            <Row className="main-row">
                <Col>
                        <Card className='mb-2'>
                            <Card.Img variant="top" src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1655336590/pruebaIntelliNext/timeline_qg5mca.jpg" className='w-100 rounded-top'alt='beach'/>
                            <div className="profile position-relative">
                                <div className="d-flex flex-row">
                                    <div className="profile-image-container">
                                        <Image src="https://res.cloudinary.com/dbdrkxooj/image/upload/v1655336589/pruebaIntelliNext/avatar-s-2_jffezn.jpg" 
                                            className='border border-light p-2 mb-2 rounded img-thumbnail' alt="profile Img"/>
                                    </div>
                                    <div className="profile-title ms-4 mt-5">
                                        <h2 className="text-white">Kitty Allanson</h2>
                                        <p className="text-white">UI/UX Designer</p>
                                    </div>
                                </div>
                            </div>   

                            <div className="profile-header-nav">
                            <Navbar className="navbar-expand-md navbar-light justify-content-end justify-content-md-between w-100 mt-0">
                                <Button className="btn-icon navbar-toggler waves-effect waves-float waves-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            </Button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="profile-tabs d-flex justify-content-between flex-wrap mt-1 mt-md-0">
                                    <ul className="nav nav-pills mb-0">
                                    <li className="nav-item">
                                        <a className="nav-link fw-bold active" href="#">
                                        <span className="d-none d-md-block">Feed</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link fw-bold" href="#">
                                        <span className="d-none d-md-block">About</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link fw-bold" href="#">
                                        <span className="d-none d-md-block">Photos</span>
                                       </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link fw-bold" href="#">
                                        <span className="d-none d-md-block">Friends</span>
                                       </a>
                                    </li>
                                    </ul>
                                    <Button className="btn-primary waves-effect waves-float waves-light">
                                   <span className="fw-bold d-none d-md-block">Edit</span>
                                    </Button>
                                </div>
                                </div>
                            </Navbar>
                            </div>                      
                        </Card>
                        
                    </Col>
                </Row>
            {/* </div>  */}
        </Container>
    </>
  )
}

export default Main