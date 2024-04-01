import React from "react";
import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import styles from "./Styles.module.css";

const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLinks}>
          <p>Follow Us</p>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <button className={styles.footerButton}>
              <InstagramFilled />
            </button>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <button className={styles.footerButton}>
              <FacebookFilled />
            </button>
          </a>
        </div>
        <div className={styles.footerCopyrightContainer}>
          <p className={styles.footerCopyright}>Copyright @{year}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
