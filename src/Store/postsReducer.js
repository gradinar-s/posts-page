import { postsAPI } from "../api/api";

// Action types
const SET_IMAGES = "posts/SET_IMAGES";
const SET_LARGE_IMAGE = "posts/SET_LARGE_IMAGE";
const SET_COMMENTS = "posts/SET_COMMENTS";

let initialState = {
  largeImage: null,
  images: [],
  comments: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGES:
      return { ...state, images: [...action.images] };
    case SET_LARGE_IMAGE:
      return { ...state, largeImage: action.image };
    case SET_COMMENTS:
      return { ...state, comments: action.comments };
    default:
      return state;
  }
};

// Action creators
export const setImages = (images) => ({
  type: SET_IMAGES,
  images,
});
export const setLargeImage = (image) => ({
  type: SET_LARGE_IMAGE,
  image,
});
export const setComments = (comments) => ({
  type: SET_COMMENTS,
  comments,
});

// Thunk creators
export const getImages = () => async (dispatch) => {
  const data = await postsAPI.getImages();
  dispatch(setImages(data));
};
export const getLargeImage = (imageId) => async (dispatch) => {
  const data = await postsAPI.getLargeImage(imageId);
  dispatch(setLargeImage(data.src));
};
export const getComments = (imageId) => async (dispatch) => {
  const data = await postsAPI.getComments(imageId);
  dispatch(setComments(data));
};
export const addComment = (comment) => async (dispatch) => {
  await postsAPI.addComment(comment);
};

export default postReducer;
