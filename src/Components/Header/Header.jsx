import React from "react";

import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.row}>
        <div className={style.title}>Test app</div>
      </div>
    </header>
  );
};

export default Header;
