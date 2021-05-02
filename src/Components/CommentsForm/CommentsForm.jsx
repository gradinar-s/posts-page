import React, { useState } from "react";
import { connect } from "react-redux";
import { addComment } from "../../Store/postsReducer";

import Input from "../Input/Input";
import Button from "../Button/Button";

import style from "./CommentsForm.module.css";

const CommentsForm = (props) => {
  const [userNameValue, setUserNameValue] = useState("");
  const [commentValue, setCommentValue] = useState("");

  const handleUserNameField = (value) => {
    setUserNameValue(value);
  };
  const handleCommentField = (value) => {
    setCommentValue(value);
  };

  const onSendComment = (e) => {
    e.preventDefault();
    props.addComment({
      name: userNameValue,
      description: commentValue,
      image_id: props.id,
    });
    setUserNameValue("");
    setCommentValue("");
  };

  return (
    <form className={style.commentsForm}>
      <Input
        name="userName"
        placeholder="Ваше имя"
        value={userNameValue}
        onChange={(e) => handleUserNameField(e.target.value)}
      />
      <Input
        className={style.commentInput}
        name="comment"
        placeholder="Ваш комментарий"
        value={commentValue}
        onChange={(e) => handleCommentField(e.target.value)}
      />
      <Button className={style.sendComment} onClick={(e) => onSendComment(e)}>
        Оставить комментарий
      </Button>
    </form>
  );
};

export default connect(null, { addComment })(CommentsForm);
