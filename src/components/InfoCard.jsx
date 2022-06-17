function InfoCard(props) {
  const { data } = props;
  const { about, joined, email, lives, website } = data;
  return (
    <>
      <div className="card mb-4">
        <div className="card-body ms-2">
          <h5 className="mb-3">About</h5>
          <p className="card-text">
            {about}
          </p>
          <div className="mt-2">
            <h5 className="mb-75">Joined:</h5>
            <p className="card-text">{joined}</p>
          </div>
          <div className="mt-2">
            <h5 className="mb-75">Lives:</h5>
            <p className="card-text">{lives}</p>
          </div>
          <div className="mt-2">
            <h5 className="mb-75">Email:</h5>
            <p className="card-text">{email}</p>
          </div>
          <div className="mt-2">
            <h5 className="mb-50">Website:</h5>
            <p className="card-text mb-0">{website}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoCard;