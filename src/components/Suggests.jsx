import React from 'react';
import Suggest from './Suggest';
import Card from 'react-bootstrap/Card';

const Suggests = (props) => {
  const { data, type, title } = props;
  const icons = {
    'pages': `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star font-medium-3 mx-1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
    'suggestions': `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF"  stroke="#FFFFFF" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="botton-profile mx-1"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>`,
    'comments': `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart text-body font-medium-3 mx-1"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`
  };

  const messages = (type, element) => {
    let message;
    switch (type) {
        case 'pages': 
          message = element.source;
          break;
        case 'suggestions':
          message = `${element.numbMutualFriends} Mutual Friends`;
          break;
        case 'comments':
          message = element.description;
          break;
        default:
          message = null;
      }
    return message;
  };

  const icon = icons[type];
  
  return (
    
    <Card className={`mb-4 border-0 shadow-sm ${type === 'comments' ? "p-0": "p-3"}`}>
      <Card.Body className="profile-suggestion p-0">
        <h5 className="ms-2 mb-3">{title ? title: null}</h5>
          {
            data.map((element,index) => 
            <Suggest key={Math.random().toString(36).substring(0,index)}
            data={element} 
            icon={icon}
            message={messages(type, element)}
            type={type}/>)
          }
      </Card.Body>
    </Card>
  )
}
export default Suggests;