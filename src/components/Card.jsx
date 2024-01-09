const Card = ({ el }) => {
  return (
      <div className="card">
          <img src={el.photo} alt="" />
          <div className="entire">
              {el.superHost && <h4 className="superHost">superHost</h4>}
              <p className="safari">{el.type}</p>
              <p className="update">
              <span className="material-symbols-outlined">
                star_rate
              </span>
                  {el.rating}</p>
          </div>
          <h3 className="place">{el.title}</h3>
      </div>
  )
}

export default Card;




/* const Card = () => {
    return (
      <Fragment>
        <div className="card-container">
          <div className="card">
            <div className="image-container">
              <img
                src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80"
                width={340}
                height={340}
                className="imageDiv"
                alt="Apartment"
              ></img>
            </div>
            <div className="about-container">
              <div>
                <button className="superhost-button">super host</button>
                <span className="info">Private Room</span>
              </div>
              <div className="rating-container">
                <span className="material-symbols-outlined">star_rate</span>
                <span className="rating">4.4</span>
              </div>
              <div className="title">Stylist apartment in center of the city</div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };
  
  export default Card;  */