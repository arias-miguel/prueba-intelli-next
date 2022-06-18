import React from 'react';
import Feed from './Feed';
import Card from 'react-bootstrap/Card';

const Feeds = (props) => {
  const {data} = props;
    
  return (
    <>
        <Card className="border-0 shadow-sm">
            <Card.Body >
                <h5>Twitter Feeds</h5>
                {
                data.map((element,index) => <Feed key={Math.random().toString(36).substring(0,index)} data={element} />)
                }
            </Card.Body>
        </Card>
    </>
  )
}

export default Feeds