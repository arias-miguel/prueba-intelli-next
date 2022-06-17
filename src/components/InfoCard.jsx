import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap'
import { helpHttp } from '../helpers/helpHttp';

function InfoCard() {
    const [dataSuggestion, setDataSuggestion] = useState({})
    let url= 'https://intellinextapi.herokuapp.com/suggestedPages';
    const [dataTwitters, setDataTwitters] = useState({})
    let url2= 'https://intellinextapi.herokuapp.com/twitterFeed';
    
    useEffect(() => {
   
      helpHttp()
        .get(url)
        .then((res) => {
          if (!res.err) {
            setDataSuggestion(res)    
          }          
        });
    }, [url]);
    
    useEffect(() => {
   
        helpHttp()
          .get(url2)
          .then((res) => {
            if (!res.err) {
              setDataTwitters(res)    
            }          
          });
      }, [url2]);

  return (
    <>
         <div className="card">
          <div className="card-body">
            <h5 className="mb-75">About</h5>
            <p className="card-text">
              Tart I love sugar plum I love oat cake. Sweet ⭐️ roll caramels I love jujubes. Topping cake wafer.
            </p>
            <div className="mt-2">
              <h5 className="mb-75">Joined:</h5>
              <p className="card-text">November 15, 2015</p>
            </div>
            <div className="mt-2">
              <h5 className="mb-75">Lives:</h5>
              <p className="card-text">New York, USA</p>
            </div>
            <div className="mt-2">
              <h5 className="mb-75">Email:</h5>
              <p className="card-text">bucketful@fiendhead.org</p>
            </div>
            <div className="mt-2">
              <h5 className="mb-50">Website:</h5>
              <p className="card-text mb-0">www.pixinvent.com</p>
            </div>
          </div>
        </div>
     
        <div className="card">
          <div className="card-body profile-suggestion">
            <h5 className="mb-2">Suggested Pages</h5>
            {
                dataSuggestion.map((element,index) =>(
                    <div key={index} className="d-flex justify-content-start align-items-center mb-1">
                        <div className="avatar me-1">
                            <Image src={`${element.thumbnail}`}  alt="avatar img" height="40" width="40"/>
                        </div>
                        <div className="profile-user-info">
                            <h6 className="mb-0">{element.name}</h6>
                             <small className="text-muted">Company</small>
                        </div>
                        <div className="profile-star ms-auto"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star font-medium-3"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></div>
                    </div>
                ))
            }
           
          </div>
        </div>
       
        <div className="card">
          <div className="card-body">
            <h5>Twitter Feeds</h5>
            {
                dataTwitters.map((element, index) =>(
                    <div key={index} className="profile-twitter-feed mt-1">
                        <div className="d-flex justify-content-start align-items-center mb-1">
                            <div className="avatar me-1">
                            <Image src={`${element.thumbnail}`}  alt="avatar img" height="40" width="40"/>
                            </div>
                            <div className="profile-user-info">
                            <h6 className="mb-0">{element.name}</h6>
                            
                                <small className="text-muted">@tiana59</small>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            
                            </div>
                            <div className="profile-star ms-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star font-medium-3"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            </div>
                        </div>
                        <p className="card-text mb-50">{element.description}</p>
                        
                            <small></small>
                        
                    </div>
                ))
            }
          </div>
        </div>

    </>
  )
}

export default InfoCard