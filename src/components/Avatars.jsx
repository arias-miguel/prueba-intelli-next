import React from 'react';
import Image from 'react-bootstrap/esm/Image';

const Avatars = (props) => {
  const { images } = props;

  return (
    <>
      {
        images.map(image => (
          <div>
            <Image src={image} className="rounded-circle" alt="Avatar" height="26" width="26" />
          </div>
        ))
      }
    </>
  )
}

export default Avatars;