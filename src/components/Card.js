import Image from "./Image.js";
import Description from "./Description.js";

function Card(props) {
  return (
    <>
      <div className="css-card">
        <Image
          imgURL={props.dataElement.imageUrl}
          title={props.dataElement.title}
        />
        <Description descr={props.dataElement} />
      </div>
      {props.dataElement.id < props.length && (
        <hr className="css-horizontal-line"></hr>
      )}
    </>
  );
}

export default Card;
