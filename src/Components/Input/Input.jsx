import React from "react";

import "./Input.css";

const Input = ({ className, id, label, error, ...arrts }) => {
  return (
    <div className="inp-wrap">
      {label && (
        <label className="inp-label" htmlFor={id}>
          {label}
        </label>
      )}
      <input name={id} className={className} {...arrts} />
      {error && <div className="inp-error">{error}</div>}
    </div>
  );
};

export default Input;
