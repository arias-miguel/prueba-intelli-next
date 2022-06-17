import React from 'react'
import Image from 'react-bootstrap/esm/Image';

const LatestPhotos = ({ data }) => {
    return (
        <>
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="mb-3">Latest Photos</h5>
                    <div className="row">
                        {
                            data.map((element, index) => (
                                <div key={`img${index}`} className="col-md-4 col-6 profile-latest-img mb-2">
                                    <Image src={`${element}`} className="img-fluid rounded" alt="avatar img" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestPhotos