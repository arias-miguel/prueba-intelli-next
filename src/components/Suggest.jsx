import React from 'react';
import Image from 'react-bootstrap/esm/Image';

const Suggest = (props) => {
  const {data, message, icon} = props;
  const {name, thumbnail, favorite, numberLikes } = data;
  const iconFill = `<svg xmlns="http://www.w3.org/2000/svg" fill="#ff9f43" width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star font-medium-3"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
  return (
    <div  className="d-flex justify-content-start align-items-center mb-3 mx-1">
      <div className="avatar me-1">
        <Image src={thumbnail} className="rounded-circle" alt="avatar img" height="40" width="40" />
      </div>
      <div className="profile-user-info ms-2">
        <h6 className="mb-0">{name}</h6>
        <small className="text-muted">{message}</small>
      </div>
        <div className="profile-star ms-auto" dangerouslySetInnerHTML={favorite === true ? {__html: iconFill}: {__html: icon}} />
        {numberLikes ? numberLikes: null}
    </div>
  )
}

export default Suggest;