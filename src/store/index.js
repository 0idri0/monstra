import Vue from 'vue';
import Vuex from 'vuex';

import posts from './posts';

Vue.use(Vuex);

export default function () {
  const store = new Vuex.Store({
    modules: {
      posts,
    },
  });

  return store;
}
