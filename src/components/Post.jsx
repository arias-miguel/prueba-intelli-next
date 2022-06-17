import React from 'react'
import Image from 'react-bootstrap/esm/Image'

const Post = ({data}) => {
  console.log(data)
  return (
    <>{
      data.map((element,index)=>(
        <div class="card" key={index}>
        <div class="card-body">
          <div class="d-flex justify-content-start align-items-center mb-1">
         
            <div class="avatar me-1">
              <Image src={`${element.thumbnail}`} alt="avatar img" height="50" width="50"/>
            </div>
         
            <div class="profile-user-info">
              <h6 class="mb-0">{element.name}</h6>
              <small class="text-muted">{element.TimePost}</small>
            </div>
          </div>
          <p class="card-text">
            {element.description}
          </p>
         
          <Image class="img-fluid rounded mb-75" src={`${element.postContent}`}  alt="avatar img"/>
          
          <div class="row d-flex justify-content-start align-items-center flex-wrap pb-50">
            <div class="col-sm-6 d-flex justify-content-between justify-content-sm-start mb-2">
              <a href="#" class="d-flex align-items-center text-muted text-nowrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart profile-likes font-medium-3 me-50"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                <span>1.25k</span>
              </a>

              <div class="d-flex align-items-center">
                <div class="avatar-group ms-1">
                  <div data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="bottom" title="" class="avatar pull-up" data-bs-original-title="Trina Lynes">
                    <Image src="../../../app-assets/images/portrait/small/avatar-s-1.jpg" alt="Avatar" height="26" width="26"/>
                  </div>
                  <div data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="bottom" title="" class="avatar pull-up" data-bs-original-title="Lilian Nenez">
                    <Image src="../../../app-assets/images/portrait/small/avatar-s-2.jpg" alt="Avatar" height="26" width="26"/>
                  </div>
                  <div data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="bottom" title="" class="avatar pull-up" data-bs-original-title="Alberto Glotzbach">
                    <Image src="../../../app-assets/images/portrait/small/avatar-s-3.jpg" alt="Avatar" height="26" width="26"/>
                  </div>
                  <div data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="bottom" title="" class="avatar pull-up" data-bs-original-title="George Nordic">
                    <Image src="../../../app-assets/images/portrait/small/avatar-s-5.jpg" alt="Avatar" height="26" width="26"/>
                  </div>
                  <div data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="bottom" title="" class="avatar pull-up" data-bs-original-title="Vinnie Mostowy">
                    <Image src="../../../app-assets/images/portrait/small/avatar-s-4.jpg" alt="Avatar" height="26" width="26"/>
                  </div>
                </div>
                <a href="#" class="text-muted text-nowrap ms-50">{element.countLikes} more</a>
              </div>
            </div>

            <div class="col-sm-6 d-flex justify-content-between justify-content-sm-end align-items-center mb-2">
              <a href="#" class="text-nowrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square text-body font-medium-3 me-50"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                <span class="text-muted me-1">1.25k</span>
              </a>

              <a href="#" class="text-nowrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2 text-body font-medium-3 mx-50"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                <span class="text-muted">1.25k</span>
              </a>
            </div>
          </div>
          
          <div class="d-flex align-items-start mb-1">
            <div class="avatar mt-25 me-75">
              <Image src={`${element.coments[0].thumbnail}`} alt="Avatar" height="34" width="34"/>
            </div>
            <div class="profile-user-info w-100">
              <div class="d-flex align-items-center justify-content-between">
                <h6 class="mb-0">{element.coments[0].name}</h6>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart text-body font-medium-3"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                  <span class="align-middle text-muted">{element.coments[0].numberLikes}</span>
                </a>
              </div>
              <small>{element.coments[0].description}</small>
            </div>
          </div>
          <div class="d-flex align-items-start mb-1">
            <div class="avatar mt-25 me-75">
              <Image src={`${element.coments[1].thumbnail}`} alt="Avatar" height="34" width="34"/>
            </div>
            <div class="profile-user-info w-100">
              <div class="d-flex align-items-center justify-content-between">
                <h6 class="mb-0">{element.coments[0].name}</h6>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart profile-likes font-medium-3"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                  <span class="align-middle text-muted">{element.coments[0].numberLikes}</span>
                </a>
              </div>
              <small>{element.coments[0].description}
              </small>
            </div>
          </div>
          <fieldset class="mb-75">
            <label class="form-label" for="label-textarea">Add Comment</label>
            <textarea class="form-control" id="label-textarea" rows="3" placeholder="Add Comment"></textarea>
          </fieldset>
          <button type="button" class="btn btn-sm btn-primary waves-effect waves-float waves-light">Post Comment</button>
        </div>
      </div>
      ))
    }
      
            
    </>
  )
}

export default Post