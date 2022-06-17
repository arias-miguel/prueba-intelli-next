import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap'
import { helpHttp } from '../helpers/helpHttp'

const latestPhotos=[
    "https://res.cloudinary.com/dbdrkxooj/image/upload/v1655336588/pruebaIntelliNext/user-13_rertyy.jpg",
    "https://res.cloudinary.com/dbdrkxooj/image/upload/v1655336588/pruebaIntelliNext/user-04_zwo7s4.jpg",
    "https://res.cloudinary.com/dbdrkxooj/image/upload/v1655336589/pruebaIntelliNext/user-07_liso5h.jpg",
    "https://res.cloudinary.com/dbdrkxooj/image/upload/v1655336588/pruebaIntelliNext/user-02_iqhzs5.jpg",
    "https://res.cloudinary.com/dbdrkxooj/image/upload/v1655336589/pruebaIntelliNext/user-05_udjc0q.jpg",
    "https://res.cloudinary.com/dbdrkxooj/image/upload/v1655336588/pruebaIntelliNext/user-08_ebqbdf.jpg",
    "https://res.cloudinary.com/dbdrkxooj/image/upload/v1655336588/pruebaIntelliNext/user-03_lcudli.jpg",
    "https://res.cloudinary.com/dbdrkxooj/image/upload/v1655336589/pruebaIntelliNext/user-06_sya7cw.jpg",
    "https://res.cloudinary.com/dbdrkxooj/image/upload/v1655336589/pruebaIntelliNext/user-09_stb6fa.jpg"
]

const InfoCard2 = () => {
    const [dataSuggestion, setDataSuggestion] = useState({})
    let url= 'https://intellinextapi.herokuapp.com/twitterFeed';
    
    useEffect(() => {
   
      helpHttp()
        .get(url)
        .then((res) => {
          if (!res.err) {
            setDataSuggestion(res)    
          } 
         
        });
    }, [url]);
    console.log(dataSuggestion);
    
  return (
    <>
    
    <div className="card">
          <div className="card-body">
            <h5 className="mb-0">Latest Photos</h5>
            <div className="row">
               {    
                latestPhotos.map((element,index) =>(
                    <div  key={index} className="col-md-4 col-6 profile-latest-img">
                      <Image src={`${element}`} className="img-fluid rounded" alt="avatar img"/>  
                    </div>
                    ))
                }
            </div>
          </div>
        </div>
      
        <div className="card">
          <div className="card-body">
            <h5>Suggestions</h5>
            {
                dataSuggestion.map((element,index) =>(
                    <div key={index} className="d-flex justify-content-start align-items-center mt-2">
                        <div className="avatar me-75">
                            <Image src={`${element.thumbnail}`}alt="avatar" height="40" width="40"/>
                        </div>
                        <div className="profile-user-info">
                            <h6 className="mb-0">{element.name}</h6>
                            <small className="text-muted">{element.numbMutualFriends} Mutual Friends</small>
                        </div>
                        <button type="button" className="btn btn-primary btn-icon btn-sm ms-auto waves-effect waves-float waves-light">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                        </button>
                    </div>
                ))
            }
          </div>
        </div>
      
        <div className="card">
          <div className="card-body">
            <h5 className="mb-1">Polls</h5>
            <p className="card-text mb-0">Who is the best actor in Marvel Cinematic Universe?</p>

            <div className="profile-polls-info mt-2">
             
              <div className="d-flex justify-content-between">
                <div className="form-check">
                  <input type="radio" id="bestActorPoll1" name="bestActorPoll" className="form-check-input"/>
                  <label className="form-check-label" htmlFor="bestActorPoll1">RDJ</label>
                </div>
                <div className="text-end">82%</div>
              </div>
            
              <div className="progress progress-bar-primary my-50">
                <div className="progress-bar" role="progressbar" aria-valuenow="58" aria-valuemin="58" aria-valuemax="100"></div>
              </div>
             
              <div className="avatar-group my-1">
                  {
                      dataSuggestion.map((element,index)=>(
                        <div key={index} data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="bottom" title="" className="avatar pull-up" data-bs-original-title="Tonia Seabold">
                            <Image src={`${element.thumbnail}`} alt="Avatar" height="26" width="26"/>
                        </div>
                      ))
                  }
              </div>
              
            </div>

            <div className="profile-polls-info mt-2">
              <div className="d-flex justify-content-between">
              
                <div className="form-check">
                  <input type="radio" id="bestActorPoll2" name="bestActorPoll" className="form-check-input"/>
                  <label className="form-check-label" htmlFor="bestActorPoll2">Chris Hemswort</label>
                </div>
                
                <div className="text-end">67%</div>
              </div>
              
              <div className="progress progress-bar-primary my-50">
                <div className="progress-bar" role="progressbar" aria-valuenow="16" aria-valuemin="16" aria-valuemax="100" ></div>
              </div>
            
              <div className="avatar-group mt-1">
                <div data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="bottom" title="" className="avatar pull-up" data-bs-original-title="Liliana Pecor">
                  <Image src="../../../app-assets/images/portrait/small/avatar-s-9.jpg" alt="Avatar" height="26" width="26"/>
                </div>
                <div data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="bottom" title="" className="avatar pull-up" data-bs-original-title="Kasandra NaleVanko">
                  <Image src="../../../app-assets/images/portrait/small/avatar-s-1.jpg" alt="Avatar" height="26" width="26"/>
                </div>
                <div data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="bottom" title="" className="avatar pull-up" data-bs-original-title="Jonathan Lyons">
                  <Image src="../../../app-assets/images/portrait/small/avatar-s-8.jpg" alt="Avatar" height="26" width="26"/>
                </div>
              </div>
              
            </div>
           
          </div>
        </div>
       
      
    </>
  )
}

export default InfoCard2