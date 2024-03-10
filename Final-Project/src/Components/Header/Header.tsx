import { SearchOutlined } from "@ant-design/icons";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <button className="search-button">
        <SearchOutlined /> Search 
      </button>
      <h1 className="header-title">The Studio Ghibli Collection</h1>
      <div>
        <span className="nav-text"> Home </span>
        <span className="nav-text"> My Favorites </span>
      </div>
    </div>
  );
};

export default Header;
