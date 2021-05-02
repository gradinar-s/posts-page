import React from "react";
import classNames from "classnames";

import "./Button.css";

const Button = ({ className, children, onClick, disable, active }) => {
  const classes = classNames(`btn`, className, { active });

  return (
    <button className={classes} disable={disable} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
