import React from 'react'
import Feed from './Feed'

const Feeds = (props) => {
  const {data} = props;
    
  return (
    <>
        <div className="card">
            <div className="card-body">
                <h5>Twitter Feeds</h5>
                {
                data.map((element,index) => <Feed key={Math.random().toString(36).substring(0,index)} data={element} />)
                }
            </div>
        </div>
    </>
  )
}

export default Feeds