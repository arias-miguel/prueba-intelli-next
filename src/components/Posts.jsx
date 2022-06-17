import React from 'react';
import Post from './Post';

const Posts = ({data}) => {
    
  return (
    <>
       {
        data.map((element,index) => <Post key={Math.random().toString(36).substring(0,index)}  data={element} />)
       }
    </>
  )
}

export default Posts;