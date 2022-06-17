import React from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import "../styles/main.css";
import Profile from './Profile';
import Posts from './Posts';
import InfoCard from './InfoCard';
import InfoCard2 from './InfoCard2';

const Main = () => {
  return (
    <>
        <Container fluid>
            {/* <div className='content-body p-2 b-3 rounded-circle'> */}
            
            <Profile/>
                <Row>
                <section id="profile-info">
                  <div className="row">
                    <div className="col-lg-3 col-12 order-2 order-lg-1">
                      <InfoCard />       
                    </div>
                    <div className="col-lg-6 col-12 order-1 order-lg-2">
                    <Posts/>
                    </div> 
                  
                    <div className="col-lg-3 col-12 order-3">
                      <InfoCard2/>
                    </div>
    
                  </div>

   
                  <div className="row">
                    <div className="col-12  col-ms-6 text-center">
                      <button type="button" className="btn btn-sm btn-primary block-element border-0 mb-1 waves-effect waves-float waves-light">Load More</button>
                    </div>
                  </div>
                
                </section>
  
                </Row>
            {/* </div>  */}
        </Container>
        
    </>
  )
}

export default Main