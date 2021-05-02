import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getComments } from "../../Store/postsReducer";

import Comment from "../../Components/Comment/Comment";
import CommentsForm from "../../Components/CommentsForm/CommentsForm";

import style from "./ModalWindowPost.module.css";

const ModalWindowPost = (props) => {
  useEffect(() => props.getComments(props.id), [props.comments]);

  return (
    <div className={style.modalWindowPost}>
      <div className={style.leftBlock}>
        <div className={style.largeImage}>
          <img src={props.largeImage} alt="" />
        </div>
        <div className={style.commentsFormWrapper}>
          <CommentsForm id={props.id} comments={props.comments} />
        </div>
      </div>
      <div className={style.rightBlock}>
        <div className={style.commentsList}>
          {props.comments.map((comment) => {
            return <Comment key={comment.id} comment={comment.description} />;
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    comments: state.posts.comments,
  };
};

export default connect(mapStateToProps, { getComments })(ModalWindowPost);
