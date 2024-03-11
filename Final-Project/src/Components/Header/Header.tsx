import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styles from './Styles.module.css';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.searchContainer}>
        <button className={styles.searchButton}>
          <SearchOutlined /> Search
        </button>
      </div>
      <div className={styles.linksContainer}>
        <h1><Link to={'films'}>Home</Link></h1>
        <h1><Link to={''}>My Favorite</Link></h1>
      </div>
    </div>
  );
};

export default Header;
