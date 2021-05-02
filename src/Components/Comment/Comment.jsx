import React from "react";
import style from "./Comment.module.css";

const Comment = (props) => {
  return (
    <div className={style.comment}>
      <div className={style.date}>01.01.2000</div>
      <div className={style.comment}>{props.comment}</div>
    </div>
  );
};

export default Comment;
