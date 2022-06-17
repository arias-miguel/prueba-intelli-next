import React from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import "../styles/main.css";
import Profile from './Profile';
import Posts from './Posts';
import InfoCard from './InfoCard';
import Suggests from './Suggests';
import postsData from '../mocks/posts.json';
import personalData from '../mocks/personalInfo.json';
import suggestions from '../mocks/suggestions.json';
import twitterFeed from '../mocks/twitterFeed.json';
import lastestPhotos from '../mocks/latestPhotos.json';
import Feeds from './Feeds';
import LatestPhotos from './LatestPhotos';
import Polls from './Polls';

const Main = () => {
  return (
    <>
      <Container className="pages-profile" fluid>
        {/* <div className='content-body p-2 b-3 rounded-circle'> */}

        <Profile />
        <Row>
         <section id="profile-info">
            <div className="row">
              <div className="col-lg-3 col-12 order-2 order-lg-1">
                <InfoCard data={personalData} />
                <Suggests data={suggestions.suggestedPages} type={"pages"} title={"Suggested Pages"} />
                <Feeds data={twitterFeed.twitters} />
              </div>
              <div className="col-lg-6 col-12 order-1 order-lg-2">
                <Posts data={postsData}/>
              </div>

              <div className="col-lg-3 col-12 order-3">
                <LatestPhotos data={lastestPhotos.lastestPhotos}/>
                <Suggests data={suggestions.suggestions} type={"suggestions"} title={"Suggestions"} />
                <Polls />
              </div>

            </div>


            <div className="row">
              <div className="col-12  col-ms-6 text-center">
                <button type="button" className="botton-profile border-0 p-2 rounded-3 mb-3">Load More</button>
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