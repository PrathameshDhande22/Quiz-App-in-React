import icon from "../Images/logo.png";

const Header = () => {
  return (
    <div className="header position-sticky top-0">
      <img src={icon} alt="Quiz Logo" className="mainicon" />
      <span className="maintext">Techinal Quiz App</span>
    </div>
  );
};

export default Header;
