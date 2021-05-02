import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getLargeImage, getComments } from "../../Store/postsReducer";

import ModalWindowPost from "../../Pages/ModalWindowPost/ModalWindowPost";
import ModalWindow from "../ModalWindow/ModalWindow";

import style from "./Post.module.css";

const Post = (props) => {
  const [isOpenModalWindow, setStatusModalWindow] = useState(false);

  const handleModalWindow = (value) => {
    setStatusModalWindow(value);
    props.getLargeImage(props.id);
    props.getComments(props.id);
  };

  return (
    <>
      <ModalWindow
        isOpen={isOpenModalWindow}
        onCancel={() => handleModalWindow(false)}
      >
        <ModalWindowPost largeImage={props.largeImage} id={props.id} />
      </ModalWindow>
      <div className={style.post} onClick={() => handleModalWindow(true)}>
        <img src={props.src} alt="" />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    largeImage: state.posts.largeImage,
  };
};

export default connect(mapStateToProps, { getLargeImage, getComments })(Post);
