import React, { useState, useEffect } from "react";
import {
  SearchOutlined,
  HeartOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import styles from "./Styles.module.css";

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const location = useLocation();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchQuery(value);
    onSearch(value);
  };

  useEffect(() => {
    if (location.pathname === "/films") {
      onSearch(searchQuery);
    }
  }, [searchQuery, onSearch, location]);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src="/logo.png" alt="GhibliFilms Logo" className={styles.logo} />
      </div>
      <div className={`${styles.searchContainer} ${styles.roundedSearchContainer}`}>
        <input
          type="text"
          placeholder="Search films..."
          value={searchQuery}
          onChange={handleSearch}
          className={styles.searchInput}
        />
        <SearchOutlined className={styles.searchIcon} />
      </div>
      <div className={styles.linksContainer}>
        <h1>
          <Link to={""} className={styles.logoLink}>
            Ghibli Films
          </Link>
        </h1>
        <h1>
          <Link to={"MyFavorite"}>
            <HeartOutlined /> My Favorite
          </Link>
        </h1>
        <h1>
          <Link to={"MyTickets"}>
            <ProfileOutlined /> My Tickets
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Header;
