import React from 'react'
import Image from 'react-bootstrap/esm/Image';

const Polls = () => {
    return (
        <>
            <div className="card">
                <div className="card-body ms-2">
                    <h5 className="mb-1">Polls</h5>
                    <p className="card-text mb-0">Who is the best actor in Marvel Cinematic Universe?</p>
                    <div className="profile-polls-info mt-2">
                        <div className="d-flex justify-content-between">
                            <div className="form-check">
                                <input type="radio" id="bestActorPoll1" name="bestActorPoll" className="form-check-input" />
                                <label className="form-check-label" htmlFor="bestActorPoll1">RDJ</label>
                            </div>
                            <div className="text-end">82%</div>
                        </div>
                        <div className="progress progress-bar-primary my-50">
                            <div className="progress-bar" role="progressbar" aria-valuenow="58" aria-valuemin="58" aria-valuemax="100"></div>
                        </div>
                        <div className="avatar-group my-1">
                            {/* {
                      dataSuggestion.map((element,index)=>( */}
                            <div data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="bottom" title="" className="avatar pull-up" data-bs-original-title="Tonia Seabold">
                                <Image alt="Avatar" height="26" width="26" />
                            </div>
                        </div>
                    </div>
                    <div className="profile-polls-info mt-2">
                        <div className="d-flex justify-content-between">
                            <div className="form-check">
                                <input type="radio" id="bestActorPoll2" name="bestActorPoll" className="form-check-input" />
                                <label className="form-check-label" htmlFor="bestActorPoll2">Chris Hemswort</label>
                            </div>
                            <div className="text-end">67%</div>
                        </div>
                        <div className="progress progress-bar-primary my-50">
                            <div className="progress-bar" role="progressbar" aria-valuenow="16" aria-valuemin="16" aria-valuemax="100" ></div>
                        </div>
                        <div className="avatar-group mt-1">
                            <div data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="bottom" title="" className="avatar pull-up" data-bs-original-title="Liliana Pecor">
                                <Image src="../../../app-assets/images/portrait/small/avatar-s-9.jpg" alt="Avatar" height="26" width="26" />
                            </div>
                            <div data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="bottom" title="" className="avatar pull-up" data-bs-original-title="Kasandra NaleVanko">
                                <Image src="../../../app-assets/images/portrait/small/avatar-s-1.jpg" alt="Avatar" height="26" width="26" />
                            </div>
                            <div data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="bottom" title="" className="avatar pull-up" data-bs-original-title="Jonathan Lyons">
                                <Image src="../../../app-assets/images/portrait/small/avatar-s-8.jpg" alt="Avatar" height="26" width="26" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Polls