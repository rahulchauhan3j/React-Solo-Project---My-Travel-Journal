function Image(props) {
  return (
    <img
      src={props.imgURL}
      alt={props.title}
      className="css-location-image"
    ></img>
  );
}
export default Image;
