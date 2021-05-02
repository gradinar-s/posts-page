import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getImages } from "../../Store/postsReducer";
import Post from "../../Components/Post/Post";

import style from "./Posts.module.css";

const Posts = (props) => {
  useEffect(() => props.getImages(), []);

  return (
    <div className={style.posts}>
      {props.images.map((img, index) => {
        return <Post key={index} src={img.src} id={img.image_id} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    images: state.posts.images,
  };
};

export default connect(mapStateToProps, { getImages })(Posts);
