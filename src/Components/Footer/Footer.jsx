import React from "react";

import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.row}>
        <div className={style.copy}>© 2018 - 2019</div>
      </div>
    </footer>
  );
};

export default Footer;
