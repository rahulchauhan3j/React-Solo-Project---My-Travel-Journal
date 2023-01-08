import HeaderImage from "../images/HeaderImage.png";

function Header() {
  return (
    <header className="css-header">
      <img src={HeaderImage} className="css-header-image"></img>
      <span>my travel journal.</span>
    </header>
  );
}

export default Header;
