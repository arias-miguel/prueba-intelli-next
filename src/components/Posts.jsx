import React, { useEffect, useState } from 'react'
import { helpHttp } from '../helpers/helpHttp';
import Post from './Post'

const Posts = () => {
    const [dataPost, setDataPost] = useState({})
    let url= 'https://intellinextapi.herokuapp.com/post';
    
    useEffect(() => {
   
      helpHttp()
        .get(url)
        .then((res) => {
          if (!res.err) {
            setDataPost(res)    
          } 
         
        });
    }, [url]);
    console.log(dataPost)
  return (
    <>
        <Post data={dataPost}/>
       
    </>
  )
}

export default Posts