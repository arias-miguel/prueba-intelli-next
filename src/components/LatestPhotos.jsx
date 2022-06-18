import React from 'react'
import Image from 'react-bootstrap/esm/Image';
import Card from 'react-bootstrap/Card';

const LatestPhotos = ({ data }) => {
	return (
		<>
			<Card className="mb-4 border-0 shadow-sm">
				<Card.Body>
					<Card.Title className="mb-3">Latest Photos</Card.Title>
					<div className="row">
						{
							data.map((element, index) => (
								<div key={`img${index}`} className="col-md-4 col-6 profile-latest-img mb-2">
									<Image src={`${element}`} className="img-fluid rounded-2" alt="avatar img" />
								</div>
							))
						}
					</div>
				</Card.Body>
			</Card>
		</>
	)
}

export default LatestPhotos