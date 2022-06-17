import React from 'react';
import Image from 'react-bootstrap/esm/Image';
import Suggests from './Suggests';

const Post = ({data}) => {
  const { id, name, timePost, thumbnail, description, postContent, countLikes, comments, countComments, countShares } = data;
  return (
    <>
      <div className="card mb-4 rounded-5" key={id}>
        <div className="card-body">
          <div className="d-flex justify-content-start align-items-center mb-2">
            <div className="avatar me-1">
              <Image src={thumbnail} className="rounded-circle" alt="avatar img" height="50" width="50" />
            </div>

            <div className="profile-user-info ms-2">
              <h6 className="mb-0">{name}</h6>
              <small className="text-muted">{timePost}</small>
            </div>
          </div>
          <p className="card-text">
            {description}
          </p>

          <Image className="img-fluid rounded mb-75" src={`${postContent}`} alt="avatar img" />

          <div className="row d-flex justify-content-start align-items-center flex-wrap pb-50">
            <div className="col-sm-6 d-flex justify-content-between justify-content-sm-start mb-2">
              <a href="#" className="d-flex align-items-center text-muted text-nowrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart profile-likes font-medium-3 me-50"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                <span>{countLikes}</span>
              </a>
            </div>

            <div className="col-sm-6 d-flex justify-content-between justify-content-sm-end align-items-center mb-2">
              <a href="#" className="text-nowrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square text-body font-medium-3 me-50"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                <span className="text-muted me-1">{countComments}</span>
              </a>

              <a href="#" className="text-nowrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2 text-body font-medium-3 mx-50"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                <span className="text-muted">{countShares}</span>
              </a>
            </div>
          </div>
          { <Suggests type={"comments"} data={comments}/>}
        
          <fieldset className="mb-75">
            <label className="form-label" htmlFor="label-textarea">Add Comment</label>
            <textarea className="form-control" id="label-textarea" rows="3" placeholder="Add Comment"></textarea>
          </fieldset>
          <button type="button" className="botton-profile border-0 mt-3 rounded-2 p-2">Post Comment</button>
        </div>
      </div>
    </>
  )
}

export default Post;