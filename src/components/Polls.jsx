import React from 'react'
import Image from 'react-bootstrap/esm/Image';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Avatars from './Avatars';

const Polls = (props) => {
	const {data} = props;
	return (
		<Card className="shadow-sm border-0">
			<Card.Body className="ms-2">
				<h5 className="mb-1">Polls</h5>
				<p className="card-text mb-0">Who is the best actor in Marvel Cinematic Universe?</p>
				{data.map(element => (
					<div className="profile-polls-info mt-2">
						<div className="d-flex justify-content-between">
							<div className="form-check">
								<input type="radio" id="bestActorPoll1" name="bestActorPoll" className="form-check-input" />
								<label className="form-check-label" htmlFor="bestActorPoll1">{element.name}</label>
							</div>
							<div className="text-end">{element.percentage} %</div>
						</div>
						<ProgressBar now={element.percentage} className="my-3 bar-progress" />
						<div className="my-1 d-flex">
							<Avatars images={element.images} />
						</div>
					</div>
				))}
			</Card.Body>
		</Card>
	)
}

export default Polls