/* eslint-disable no-unused-vars */

export const setPosts = (state, payload) => {
  state.posts.push(payload);
};

export const resetPosts = (state, payload) => {
  state.posts = [];
};

export const setMedia = (state, payload) => {
  state.media.push(payload);
};

export const resetMedia = (state, payload) => {
  state.media = [];
};

export const setPages = (state, payload) => {
  state.pages.push(payload);
};

export const resetPages = (state, payload) => {
  state.pages = [];
};
