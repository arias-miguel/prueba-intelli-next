import React from 'react';
import Image from 'react-bootstrap/esm/Image';

const Feed = (props) => {
	const { data } = props;
	const {  name, user, thumbnail, description, hashtags } = data;
	return (
		<>
			<div  className="profile-twitter-feed mt-1 mb-2">
				<div className="d-flex justify-content-start align-items-center mb-1">
					<div className="avatar me-1 mt-2">
						<Image src={`${thumbnail}`} className="rounded-circle" alt="avatar img" height="40" width="40" />
					</div>
					<div className="profile-user-info">
						<h6 className="mb-0">{name}</h6>

						<small className="text-muted">@{user}</small>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7367F0" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle mx-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
					</div>
					<div className="profile-star ms-auto">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star font-medium-3"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
					</div>
				</div>
				<p className="card-text mb-25">{description}</p>
				{
					hashtags.map((ele, index) => (
						
							<small className='text-primary' key={Math.random().toString(36).substring(0,index)}># {ele} &nbsp;</small>
						
					))
				}

			</div>
		</>

	)
}

export default Feed;