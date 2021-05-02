import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://tzfrontend.herokuapp.com/",
});

export const postsAPI = {
  getImages() {
    return instance.get("images/").then((response) => response.data);
  },
  getLargeImage(imageId) {
    return instance.get(`images/${imageId}/`).then((response) => response.data);
  },
  getComments(imageId) {
    return instance
      .get(`comments/${imageId}/`)
      .then((response) => response.data);
  },
  addComment(comment) {
    return instance
      .post("comments/add/", comment)
      .then((response) => response.data);
  },
};
