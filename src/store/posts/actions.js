/* eslint-disable import/prefer-default-export,no-unused-vars */
import axios from 'axios';

export const fetchPosts = state => axios.get('https://monstra-monstra.de/wordpress/wp-json/wp/v2/posts?_embed', {
  params: {
    _embed: true,
  },
});

export const fetchMedia = state => axios.get('https://monstra-monstra.de/wordpress/wp-json/wp/v2/media', {
  params: {
    _embed: true,
  },
});

export const fetchPages = state => axios.get('https://monstra-monstra.de/wordpress/wp-json/wp/v2/pages', {
  params: {
    _embed: true,
  },
});
