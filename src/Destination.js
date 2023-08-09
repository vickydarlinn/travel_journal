const Destination = function (props) {
  console.log(props);
  return (
    <div className="destination">
      <div className="destination__image">
        <img src={props.imageUrl} alt="" />
      </div>
      <div className="destination__description">
        <div className="destination__location">
          <span className="destination__country">{props.location}</span>
          <span className="destination__inMap">
            <a href={props.googleMapsUrl}>Viw on Google Maps</a>
          </span>
        </div>
        <div className="destination__name">{props.title}</div>
        <div className="destination__date">
          <span className="destination__startingDate">{props.startDate}</span> -{" "}
          <span className="destination_endingDate">{props.endDate}</span>
        </div>
        <div className="destination__moreDescritpion">{props.description}</div>
      </div>
    </div>
  );
};
export default Destination;
