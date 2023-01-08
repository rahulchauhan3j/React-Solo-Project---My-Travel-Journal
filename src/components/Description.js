import MapsImage from "../images/MapsImage.png";

function Description(props) {
  return (
    <div className="css-description">
      <div className="css-description-line1">
        <img
          src={MapsImage}
          alt="map"
          className="css-description-line1-image"
        ></img>
        <h4 className="css-description-line1-location">
          {props.descr.location.toUpperCase()}
        </h4>
        <a href={props.descr.googleMapsUrl} className="css-google-map-location">
          View on Google Maps
        </a>
      </div>
      <h1 className="css-description-line2">{props.descr.title}</h1>
      <h4 className="css-description-line3">
        {props.descr.startDate} - {props.descr.endDate}
      </h4>
      <p className="css-description-line4">{props.descr.description}</p>
    </div>
  );
}
export default Description;
